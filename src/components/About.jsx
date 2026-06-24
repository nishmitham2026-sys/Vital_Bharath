

export default function About() {
  return (
    <section id="about" className="py-5 bg-white position-relative">
      <div className="container py-5">
        
        <div className="row align-items-center g-5">
          {/* Left Column: Graphics & Quick Info */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="row g-3">
              <div className="col-6">
                <div className="p-4 rounded-4 bg-vb-slate border border-light h-100 text-start">
                  <div className="bg-vb-secondary text-white rounded-3 p-2 mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-reception-4 fs-5"></i>
                  </div>
                  <h5 className="fw-bold text-vb-primary mb-2">Low Bandwidth Sync</h5>
                  <p className="small text-vb-muted mb-0">Our platform is optimized to transfer high-resolution medical images and text even on unstable 3G networks.</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-4 rounded-4 bg-vb-accent-light border border-light h-100 text-start">
                  <div className="bg-vb-accent text-white rounded-3 p-2 mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-shield-fill-check fs-5"></i>
                  </div>
                  <h5 className="fw-bold text-vb-primary mb-2">ABDM Compliant</h5>
                  <p className="small text-vb-muted mb-0">Full compliance with Ayushman Bharat Digital Mission (ABDM) for unified digital health records.</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-4 rounded-4 bg-warning-subtle border border-light h-100 text-start">
                  <div className="text-warning rounded-3 p-2 mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', backgroundColor: '#fef3c7' }}>
                    <i className="bi bi-person-badge-fill fs-5"></i>
                  </div>
                  <h5 className="fw-bold text-vb-primary mb-2">Empowered Health Workers</h5>
                  <p className="small text-vb-muted mb-0">Trained local coordinators operate physical kiosks, lowering barriers of digital literacy for villagers.</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-4 rounded-4 bg-primary-subtle border border-light h-100 text-start">
                  <div className="text-primary rounded-3 p-2 mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', backgroundColor: '#dbeafe' }}>
                    <i className="bi bi-bezier2 fs-5"></i>
                  </div>
                  <h5 className="fw-bold text-vb-primary mb-2">Multi-Tenant Setup</h5>
                  <p className="small text-vb-muted mb-0">Isolated workspaces allow different organizations to run camps independently with localized controls.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="col-lg-6 order-lg-2 order-1 text-lg-start text-center">
            <span className="section-subtitle">Our Vision</span>
            <h2 className="section-title mt-2">Bridging the Specialist Deficit in Rural India</h2>
            <p className="text-vb-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
              Over 70% of India's population lives in rural areas, yet 80% of specialist doctors reside in major urban hubs. Traveling to cities for specialized healthcare is financially and physically draining for villagers.
            </p>
            <p className="text-vb-muted mb-4" style={{ lineHeight: '1.7' }}>
              <strong>Vital Bharat</strong> is designed to change this. We provide a modular digital bridge. Local health clinics and camps operate as "tenants" on our platform, using low-cost tablets or laptops to schedule video consultations with urban specialists. When patients consult, their medical files, vitals, and prescription orders sync immediately, ensuring seamless data portability across clinics and partner hospitals.
            </p>
            
            <div className="p-4 border-start border-vb-secondary border-4 bg-vb-slate rounded-end-4 mb-4 text-start">
              <p className="fst-italic text-vb-primary fw-medium mb-2">
                "Our ultimate goal is making quality teleconsultations and secure data portable, ensuring that geography never limits a person's access to healing."
              </p>
              <span className="small text-vb-muted fw-bold">— Vital Bharat Leadership Board</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
