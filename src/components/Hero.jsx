import React from 'react';
import Swal from 'sweetalert2';

export default function Hero() {
  const handleExploreServices = () => {
    Swal.fire({
      title: 'Our Teleconsultation Suite',
      html: `
        <div class="text-start">
          <p class="text-muted mb-4">Vital Bharat platform services are rolling out in partnership phases. Here is what is launching:</p>
          <ul class="list-group list-group-flush mb-3">
            <li class="list-group-item px-0 py-2 d-flex align-items-center">
              <i class="bi bi-camera-video-fill text-vb-secondary me-3 fs-5"></i>
              <div>
                <strong>Specialist Video Link:</strong> Real-time HD teleconsultation with top urban doctors.
              </div>
            </li>
            <li class="list-group-item px-0 py-2 d-flex align-items-center">
              <i class="bi bi-folder-symlink-fill text-vb-accent me-3 fs-5"></i>
              <div>
                <strong>Portable EHR:</strong> Instant, patient-controlled medical records sharing between clinics.
              </div>
            </li>
            <li class="list-group-item px-0 py-2 d-flex align-items-center">
              <i class="bi bi-pc-display-horizontal text-primary me-3 fs-5"></i>
              <div>
                <strong>Multi-Tenant Dashboards:</strong> Dedicated views for clinics, hospitals, and local coordinators.
              </div>
            </li>
          </ul>
          <p class="small text-muted">Want early access? Drop us a line via our contact form below or book a demo!</p>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Great, thank you!',
      confirmButtonColor: '#0284c7'
    });
  };

  const handlePartnerWithUs = () => {
    Swal.fire({
      title: 'Partner with Vital Bharat',
      text: 'Are you an NGO, CSR body, or healthcare organization? Scroll down to fill out our quick inquiry form, and we will get back to you with custom integration designs.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Take Me to Form',
      cancelButtonText: 'Close',
      confirmButtonColor: '#0d9488',
      cancelButtonColor: '#64748b'
    }).then((result) => {
      if (result.isConfirmed) {
        const contactSection = document.getElementById('partner');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  };

  return (
    <section id="home" className="position-relative overflow-hidden pt-5 mt-5 gradient-bg min-vh-100 d-flex align-items-center">
      {/* Decorative Glows */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container py-5">
        <div className="row align-items-center py-4">
          {/* Left Text Column */}
          <div className="col-lg-6 mt-lg-0 mt-5 text-lg-start text-center">
            <span className="badge bg-vb-accent-light text-vb-accent px-3 py-2 rounded-pill fw-bold mb-3 fs-7">
              Bridging the Health Divide
            </span>
            <h1 className="hero-title mb-4">
              Bringing Top-Tier Specialists to <span className="text-vb-secondary">Rural India</span>
            </h1>
            <p className="lead text-vb-muted mb-4 fs-5" style={{ lineHeight: '1.6' }}>
              Vital Bharat is a patient-centric, multi-tenant teleconsultation platform that lets patients seamlessly find, book, and transfer medical data across clinics, camps, and urban hospitals.
            </p>
            
            <div className="d-flex flex-sm-row flex-column gap-3 justify-content-lg-start justify-content-center">
              <button 
                onClick={handleExploreServices} 
                className="btn btn-vb-primary btn-lg px-4"
                id="hero-explore-cta"
              >
                Explore Services
              </button>
              <button 
                onClick={handlePartnerWithUs} 
                className="btn btn-vb-outline btn-lg px-4"
                id="hero-partner-cta"
              >
                Partner With Us
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="row mt-5 pt-4 border-top border-light g-3 text-start justify-content-lg-start justify-content-center">
              <div className="col-4">
                <h3 className="fw-bold text-vb-primary mb-0">10,000+</h3>
                <p className="small text-vb-muted mb-0">Consultations</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-vb-primary mb-0">50+</h3>
                <p className="small text-vb-muted mb-0">Rural Clinics</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-vb-primary mb-0">150+</h3>
                <p className="small text-vb-muted mb-0">Specialist Doctors</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Interactive CSS/SVG graphic) */}
          <div className="col-lg-6 mt-lg-0 mt-5 d-flex justify-content-center position-relative">
            <div className="vb-floating position-relative d-flex justify-content-center align-items-center" style={{ width: '100%', maxWidth: '500px', height: '400px' }}>
              {/* Abstract SVG Illustration linking Doctors to Clinics */}
              <svg viewBox="0 0 500 400" className="w-100 h-100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid Lines */}
                <path d="M50 100 H450 M50 200 H450 M50 300 H450 M100 50 V350 M200 50 V350 M300 50 V350 M400 50 V350" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Central Data Stream Glow / Connection Links */}
                <path d="M120 280 C 180 180, 320 220, 380 120" stroke="url(#line-grad-1)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />
                <path d="M120 280 C 200 350, 300 100, 380 120" stroke="url(#line-grad-2)" strokeWidth="2" strokeLinecap="round" />

                {/* Definitions for Gradients */}
                <defs>
                  <linearGradient id="line-grad-1" x1="120" y1="280" x2="380" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0284c7" />
                    <stop offset="1" stopColor="#0d9488" />
                  </linearGradient>
                  <linearGradient id="line-grad-2" x1="120" y1="280" x2="380" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0d9488" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="shadow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.1" />
                  </filter>
                </defs>

                {/* Node 1: Urban Hospital / Specialist Doctor */}
                <g filter="url(#shadow)" transform="translate(350, 70)">
                  <rect width="90" height="90" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="45" cy="45" r="28" fill="#e0f2fe" />
                  <path d="M37 53 C37 47 41 43 45 43 C49 43 53 47 53 53 H37 Z M45 39 C47.76 39 50 36.76 50 34 C50 31.24 47.76 29 45 29 C42.24 29 40 31.24 40 34 C40 36.76 42.24 39 45 39 Z" fill="#0284c7" />
                  <circle cx="68" cy="22" r="10" fill="#0d9488" />
                  <path d="M65 22 H71 M68 19 V25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <text x="45" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">Specialist</text>
                </g>

                {/* Node 2: Rural Health Clinic */}
                <g filter="url(#shadow)" transform="translate(60, 230)">
                  <rect width="90" height="90" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="45" cy="45" r="28" fill="#f0fdf4" />
                  {/* Medical Clinic Icon */}
                  <path d="M35 34 H55 V56 H35 Z" fill="#0d9488" opacity="0.2" />
                  <path d="M37 32 H53 V52 H37 Z" stroke="#0d9488" strokeWidth="2" fill="none" />
                  <path d="M41 42 H49 M45 38 V46" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
                  <text x="45" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">Rural Clinic</text>
                </g>

                {/* Connecting Pulse Indicator */}
                <circle cx="230" cy="210" r="14" fill="#06b6d4" opacity="0.3">
                  <animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="210" r="6" fill="#06b6d4" />

                {/* Floating Tags */}
                <g filter="url(#shadow)" transform="translate(230, 280)">
                  <rect width="130" height="35" rx="10" fill="#ffffff" stroke="#ccfbf1" strokeWidth="1" />
                  <circle cx="18" cy="18" r="6" fill="#0d9488" />
                  <text x="34" y="22" fontSize="9" fontWeight="600" fill="#0f172a">Portable Health Records</text>
                </g>
                <g filter="url(#shadow)" transform="translate(190, 40)">
                  <rect width="110" height="35" rx="10" fill="#ffffff" stroke="#e0f2fe" strokeWidth="1" />
                  <circle cx="18" cy="18" r="6" fill="#0284c7" />
                  <text x="34" y="22" fontSize="9" fontWeight="600" fill="#0f172a">100% HIPAA Secure</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
