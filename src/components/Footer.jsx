

export default function Footer() {
  return (
    <footer className="bg-vb-primary text-white pt-5 pb-4 border-top border-light border-opacity-10">
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6 text-start">
            <a className="d-flex align-items-center mb-3 text-white text-decoration-none" href="#home">
              <div className="bg-vb-secondary text-white rounded-3 p-2 me-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-heart-pulse-fill fs-6"></i>
              </div>
              <span className="fw-extrabold fs-4 tracking-tight" style={{ fontWeight: 800 }}>
                Vital<span className="text-vb-secondary">Bharat</span>
              </span>
            </a>
            <p className="text-light mb-4 small" style={{ opacity: 0.7, lineHeight: '1.6' }}>
              Vital Bharat is a high-performance, multi-tenant digital health infrastructure built specifically for remote rural communities. We bridge the rural-urban divide, bringing the best medical minds directly to clinics and local health camps.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', opacity: 0.8 }} aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', opacity: 0.8 }} aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', opacity: 0.8 }} aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', opacity: 0.8 }} aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6 text-start">
            <h5 className="fw-bold mb-3 text-light" style={{ fontSize: '1rem' }}>Sitemap</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Home</a></li>
              <li className="mb-2"><a href="#about" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>About Platform</a></li>
              <li className="mb-2"><a href="#features" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Platform Features</a></li>
              <li className="mb-2"><a href="#impact" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Impact & Case Studies</a></li>
              <li className="mb-2"><a href="#partner" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Partner With Us</a></li>
            </ul>
          </div>

          {/* Core Areas */}
          <div className="col-lg-2 col-md-3 col-6 text-start">
            <h5 className="fw-bold mb-3 text-light" style={{ fontSize: '1rem' }}>Solutions</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#features" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Teleconsultations</a></li>
              <li className="mb-2"><a href="#features" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Electronic Health Records</a></li>
              <li className="mb-2"><a href="#impact" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>NGO Health Camps</a></li>
              <li className="mb-2"><a href="#impact" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>CSR Integration</a></li>
              <li className="mb-2"><a href="#partner" className="text-light text-decoration-none small" style={{ opacity: 0.75 }}>Specialist Onboarding</a></li>
            </ul>
          </div>

          {/* Support / Legal */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="fw-bold mb-3 text-light" style={{ fontSize: '1rem' }}>Regulatory & Standards</h5>
            <p className="text-light small mb-3" style={{ opacity: 0.7, lineHeight: '1.6' }}>
              Operating in full compliance with the National Digital Health Mission (NDHM) guidelines and the Information Technology Act.
            </p>
            <div className="bg-vb-primary-light p-3 rounded-3 border border-light border-opacity-10">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-shield-check text-vb-accent fs-4"></i>
                <div className="text-start">
                  <h6 className="fw-bold text-light mb-0 small">ABDM Ready</h6>
                  <p className="small text-light mb-0" style={{ opacity: 0.6, fontSize: '0.75rem' }}>Integrated with India's health stack.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-4 border-light border-opacity-10" />

        {/* Bottom row */}
        <div className="row align-items-center g-3 text-start">
          <div className="col-md-6 text-md-start text-center">
            <p className="small text-light mb-0" style={{ opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} Vital Bharat Platform. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3"><a href="#" className="text-light text-decoration-none small" style={{ opacity: 0.6 }}>Privacy Policy</a></li>
              <li className="list-inline-item me-3"><a href="#" className="text-light text-decoration-none small" style={{ opacity: 0.6 }}>Terms of Service</a></li>
              <li className="list-inline-item"><a href="#" className="text-light text-decoration-none small" style={{ opacity: 0.6 }}>ABDM Consent Terms</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
