// Trigger redeployment under GitHub Actions settings
import { useState, useEffect, useRef } from 'react';

// Help map timezones to countries as a lookup fallback
const getTimezoneCountry = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return { name: 'India', code: 'IN' };
    
    if (tz.startsWith('Asia/Kolkata') || tz.startsWith('Asia/Calcutta')) return { name: 'India', code: 'IN' };
    if (tz.startsWith('America/')) return { name: 'United States', code: 'US' };
    if (tz.startsWith('Europe/London') || tz.startsWith('Europe/Belfast')) return { name: 'United Kingdom', code: 'GB' };
    if (tz.startsWith('Europe/Berlin') || tz.startsWith('Europe/Munich')) return { name: 'Germany', code: 'DE' };
    if (tz.startsWith('Asia/Tokyo')) return { name: 'Japan', code: 'JP' };
    if (tz.startsWith('Australia/')) return { name: 'Australia', code: 'AU' };
    
    // Generic matches
    if (tz.startsWith('Europe/')) return { name: 'Germany', code: 'DE' };
    if (tz.startsWith('Asia/')) return { name: 'India', code: 'IN' };
    
    return { name: 'India', code: 'IN' };
  } catch (e) {
    return { name: 'India', code: 'IN' };
  }
};

const countryFlags = {
  IN: '🇮🇳',
  US: '🇺🇸',
  GB: '🇬🇧',
  DE: '🇩🇪',
  JP: '🇯🇵',
  AU: '🇦🇺'
};

const GOOGLE_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxpQ2Kozx8k1aIHdZaXgGxmETozzcWssAMRKAQKyknWUJljDMgWljf3NcmtEthWFWr0/exec';

// Format seconds to HH:MM:SS format (e.g., 00:10:07)
const formatSecondsToHMS = (secs) => {
  const h = Math.floor(secs / 3600).toString().padStart(2, '0');
  const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

// Send telemetry data to Google Apps Script Web App using fetch/sendBeacon
const sendTelemetry = (location, duration, page) => {
  try {
    const rawSeconds = Number(duration || 0);

    const params = new URLSearchParams({
      location: String(location || 'India'),
      duration: String(rawSeconds),
      page: String(page || 'home')
    });

    const payload = {
      location: location || 'India',
      duration: rawSeconds,
      page: page || 'home'
    };

    console.log(`[Analytics] Sending telemetry - Location: ${location}, Duration: ${rawSeconds}s, Page: ${page}`);

    const url = `${GOOGLE_WEB_APP_URL}?${params.toString()}`;

    // Use navigator.sendBeacon if available for reliable unload transmissions
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      const beaconSent = navigator.sendBeacon(url, blob);
      if (beaconSent) {
        console.log('[Analytics] Telemetry queued successfully via sendBeacon');
        return;
      }
    }

    // Fallback to fetch with keepalive
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(err => {
      console.warn('[Analytics] Telemetry fetch warning (expected with no-cors):', err);
    });
  } catch (e) {
    console.error('[Analytics] Failed to send telemetry:', e);
  }
};

export default function AnalyticsTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [country, setCountry] = useState({ name: 'India', code: 'IN' });
  const [ipAddress, setIpAddress] = useState('103.45.201.73'); // Default mock
  const [activeSection, setActiveSection] = useState('home');
  const [visitedPath, setVisitedPath] = useState(['home']);
  const [sectionHits, setSectionHits] = useState({
    home: 1,
    about: 0,
    features: 0,
    impact: 0,
    partner: 0
  });
  const [history, setHistory] = useState([]);

  // Session ID to distinguish current session
  const sessionIdRef = useRef(Math.random().toString(36).substring(2, 9));

  // Initialize and load historical sessions
  useEffect(() => {
    // 1. Get Country and IP via API or Fallback
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_name && data.country) {
          setCountry({ name: data.country_name, code: data.country });
          if (data.ip) setIpAddress(data.ip);
        } else {
          setCountry(getTimezoneCountry());
        }
      })
      .catch(() => {
        setCountry(getTimezoneCountry());
      });

    // 2. Load History from LocalStorage
    const savedHistory = localStorage.getItem('vb_analytics_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        setHistory([]);
      }
    }

    // 3. Save current session when unloading / mounting previous session
    // To show dynamic progress, we can log the previous session if the user reloaded
    const lastSession = sessionStorage.getItem('vb_current_session');
    if (lastSession) {
      try {
        const parsed = JSON.parse(lastSession);
        // Only log if it has some duration
        if (parsed.duration > 2) {
          const prevHistory = savedHistory ? JSON.parse(savedHistory) : [];
          // Avoid duplicate entries if reloading fast
          const updatedHistory = [parsed, ...prevHistory].slice(0, 10);
          localStorage.setItem('vb_analytics_history', JSON.stringify(updatedHistory));
          setHistory(updatedHistory);

          // Sync with Google Sheet if it hasn't been sent yet
          if (!parsed.sent) {
            sendTelemetry(
              parsed.country,
              parsed.duration,
              parsed.path ? parsed.path.join(' > ') : 'home'
            );
            parsed.sent = true;
            sessionStorage.setItem('vb_current_session', JSON.stringify(parsed));
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    // Initialize this session in sessionStorage
    const today = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    sessionStorage.setItem('vb_current_session', JSON.stringify({
      id: sessionIdRef.current,
      date: today,
      duration: 0,
      country: country.name,
      code: country.code,
      path: ['home'],
      sent: false
    }));

  }, []);

  // Sync session duration and sessionStorage state
  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(prev => {
        const next = prev + 1;
        // Periodically update sessionStorage
        try {
          const current = JSON.parse(sessionStorage.getItem('vb_current_session') || '{}');
          current.duration = next;
          current.country = country.name;
          current.code = country.code;
          current.path = visitedPath;
          sessionStorage.setItem('vb_current_session', JSON.stringify(current));
        } catch (e) {}
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [country, visitedPath]);

  // Send telemetry when page is closed, hidden, or navigated away
  useEffect(() => {
    const handleUnload = () => {
      try {
        const currentStr = sessionStorage.getItem('vb_current_session');
        if (!currentStr) return;
        const current = JSON.parse(currentStr);
        if (current && current.duration > 2 && !current.sent) {
          sendTelemetry(
            current.country,
            current.duration,
            current.path ? current.path.join(' > ') : 'home'
          );
          current.sent = true;
          sessionStorage.setItem('vb_current_session', JSON.stringify(current));
        }
      } catch (e) {}
    };

    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('pagehide', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('pagehide', handleUnload);
    };
  }, []);

  // Intersection Observer for tracking page sections viewed
  useEffect(() => {
    const sections = ['home', 'about', 'features', 'impact', 'partner'];
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);

          // Update hits
          setSectionHits(prev => {
            const nextHits = { ...prev, [id]: prev[id] + 1 };
            return nextHits;
          });

          // Add to path if different from previous element in path
          setVisitedPath(prev => {
            if (prev[prev.length - 1] !== id) {
              return [...prev, id];
            }
            return prev;
          });
        }
      });
    };

    const observerOptions = {
      root: null, // Viewport
      threshold: 0.4 // 40% of the section must be visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Format seconds to HH:MM:SS
  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Format history session duration (e.g. 45s, 2m 10s)
  const formatHistoryDuration = (secs) => {
    if (secs < 60) return `${secs}s`;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return s > 0 ? `${m}m ${s}s` : `${m}m`;
  };

  // Calculate section popularity percentage
  const totalHits = Object.values(sectionHits).reduce((a, b) => a + b, 0) || 1;

  // Clear analytics records
  const handleClearHistory = () => {
    localStorage.removeItem('vb_analytics_history');
    setHistory([]);
  };

  // Mock country simulation for demonstration/testing
  const handleSimulateCountry = (e) => {
    const code = e.target.value;
    let name = 'India';
    let ip = '103.45.201.73';
    
    if (code === 'US') { name = 'United States'; ip = '198.51.100.42'; }
    else if (code === 'GB') { name = 'United Kingdom'; ip = '82.165.12.98'; }
    else if (code === 'DE') { name = 'Germany'; ip = '46.112.5.12'; }
    else if (code === 'JP') { name = 'Japan'; ip = '114.160.29.45'; }
    else if (code === 'AU') { name = 'Australia'; ip = '1.124.0.50'; }

    setCountry({ name, code });
    setIpAddress(ip);
  };

  return (
    <>
      {/* Floating Toggle Button (Bottom-Left) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="floating-widget-btn floating-analytics-btn d-flex align-items-center justify-content-center"
        title="View Website Analytics"
        aria-label="Toggle Website Analytics"
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-graph-up-arrow'}`}></i>
      </button>

      {/* Backdrop */}
      {isOpen && <div className="analytics-backdrop" onClick={() => setIsOpen(false)} />}

      {/* Side Slide-out Panel */}
      <div className={`analytics-panel ${isOpen ? 'open' : ''}`}>
        
        {/* Header */}
        <div className="analytics-header d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0 fw-bold text-vb-primary d-flex align-items-center">
              <i className="bi bi-shield-check text-vb-accent me-2"></i>
              Live Visitor Analytics
            </h5>
            <small className="text-vb-muted">Real-time engagement telemetry</small>
          </div>
          <button 
            type="button" 
            className="btn-close shadow-none" 
            onClick={() => setIsOpen(false)}
            aria-label="Close analytics"
          ></button>
        </div>

        {/* Content Body */}
        <div className="analytics-body">
          
          {/* Active Session Stat Grid */}
          <div>
            <h6 className="fw-bold mb-3 text-vb-primary border-bottom pb-2">Active Session</h6>
            <div className="stat-grid">
              
              {/* Location Card */}
              <div className="stat-box">
                <span className="fs-3" role="img" aria-label="country-flag">
                  {countryFlags[country.code] || '🌐'}
                </span>
                <div className="stat-num fs-6 mt-1 text-truncate" title={country.name}>{country.name}</div>
                <div className="stat-label">Country (IP: {ipAddress.split(',')[0]})</div>
              </div>

              {/* Session Duration */}
              <div className="stat-box">
                <i className="bi bi-clock-history text-vb-secondary fs-4"></i>
                <div className="stat-num text-vb-secondary">{formatTime(duration)}</div>
                <div className="stat-label">Duration</div>
              </div>

              {/* Current Active Page */}
              <div className="stat-box">
                <i className="bi bi-eye text-vb-accent fs-4"></i>
                <div className="stat-num fs-6 mt-1 text-capitalize text-vb-accent">{activeSection}</div>
                <div className="stat-label">Active Section</div>
              </div>

              {/* Total Section Views */}
              <div className="stat-box">
                <i className="bi bi-layers-half text-vb-primary fs-4"></i>
                <div className="stat-num text-vb-primary">{totalHits}</div>
                <div className="stat-label">Total Scroll Hits</div>
              </div>

            </div>
          </div>

          {/* Section Breadcrumbs (Path Timeline) */}
          <div>
            <h6 className="fw-bold mb-2 text-vb-primary">Section Browse Path</h6>
            <small className="text-vb-muted d-block mb-2">Chronological order of sections scrolled</small>
            <div className="path-timeline">
              {visitedPath.map((sec, idx) => (
                <span key={idx} className="d-flex align-items-center">
                  <span className="path-node text-capitalize">{sec}</span>
                  {idx < visitedPath.length - 1 && (
                    <i className="bi bi-chevron-right path-arrow mx-1"></i>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Popularity Heatmap */}
          <div>
            <h6 className="fw-bold mb-2 text-vb-primary">Section View Heatmap</h6>
            <small className="text-vb-muted d-block mb-3">Popularity breakdown by viewport triggers</small>
            <div className="progress-list">
              {Object.entries(sectionHits).map(([sec, hits]) => {
                const percentage = Math.round((hits / totalHits) * 100);
                return (
                  <div key={sec}>
                    <div className="progress-item-label text-capitalize">
                      <span>{sec}</span>
                      <span className="text-vb-muted">{hits} hit{hits !== 1 ? 's' : ''} ({percentage}%)</span>
                    </div>
                    <div className="progress-bar-bg mt-1">
                      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simulated Testing Utilities */}
          <div className="bg-light p-3 rounded-3 border">
            <h6 className="fw-bold mb-2 text-vb-primary d-flex align-items-center">
              <i className="bi bi-gear-fill text-vb-muted me-1"></i>
              Simulator Controls
            </h6>
            <div className="mb-2">
              <label htmlFor="country-selector" className="form-label mb-1" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                Simulate Visitor Location:
              </label>
              <select 
                id="country-selector" 
                className="form-select form-select-sm" 
                onChange={handleSimulateCountry}
                defaultValue={country.code}
              >
                <option value="IN">🇮🇳 India</option>
                <option value="US">🇺🇸 United States</option>
                <option value="GB">🇬🇧 United Kingdom</option>
                <option value="DE">🇩🇪 Germany</option>
                <option value="JP">🇯🇵 Japan</option>
                <option value="AU">🇦🇺 Australia</option>
              </select>
            </div>
          </div>

          {/* History Log */}
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold mb-0 text-vb-primary">Local Session Logs</h6>
              {history.length > 0 && (
                <button 
                  onClick={handleClearHistory} 
                  className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
                  style={{ fontSize: '0.75rem' }}
                >
                  Clear Logs
                </button>
              )}
            </div>
            {history.length === 0 ? (
              <div className="text-center py-4 bg-light rounded-3 text-vb-muted" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-journal-x fs-4 d-block mb-1"></i>
                No historical logs yet. Reload or revisit to commit current session.
              </div>
            ) : (
              <div className="history-logs-list">
                {history.map((h, i) => (
                  <div key={i} className="history-log-item">
                    <div>
                      <span className="me-2" role="img" aria-label="country-flag">{countryFlags[h.code] || '🌐'}</span>
                      <strong className="text-vb-primary">{h.country}</strong>
                      <span className="text-vb-muted d-block" style={{ fontSize: '0.65rem' }}>{h.date}</span>
                    </div>
                    <span className="badge bg-vb-slate text-vb-secondary font-weight-bold">
                      {formatHistoryDuration(h.duration)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </>
  );
}
