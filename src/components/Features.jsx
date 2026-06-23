import React from 'react';

export default function Features() {
  const featuresList = [
    {
      icon: 'bi-people-fill',
      title: 'Patient-Centric Ecosystem',
      description: 'Empowering individuals to search for providers, book appointments, and securely manage their own health history from a unified mobile-friendly hub.',
      accentClass: 'bg-vb-accent-light text-vb-accent',
      color: 'var(--vb-accent)'
    },
    {
      icon: 'bi-diagram-3-fill',
      title: 'Multi-Tenant Architecture',
      description: 'Allows medical data portability. Clinics, NGO camps, and hospitals operate on isolated accounts, yet share secure, patient-consented records instantly.',
      accentClass: 'bg-primary-subtle text-primary',
      color: 'var(--vb-secondary)'
    },
    {
      icon: 'bi-broadcast',
      title: 'Specialist Reach',
      description: 'Enables high-definition live teleconsultations, bridging the geographic gap to bring urban specialist doctors to remote rural clinics and health camps.',
      accentClass: 'bg-warning-subtle text-warning',
      color: '#d97706'
    }
  ];

  return (
    <section id="features" className="py-5 bg-white position-relative">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-7">
            <span className="section-subtitle">Core Capabilities</span>
            <h2 className="section-title mt-2">Engineered to Solve Healthcare Scarcity</h2>
            <p className="text-vb-muted fs-5">
              Vital Bharat operates at the intersection of robust, scalable technology and real-world rural operations, creating a seamless connection.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="row g-4">
          {featuresList.map((feature, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 shadow-sm border-light vb-card vb-hover-card">
                <div className="card-body p-0 d-flex flex-column align-items-start">
                  
                  {/* Icon Container */}
                  <div className={`p-3 rounded-4 mb-4 d-flex align-items-center justify-content-center ${feature.accentClass}`} style={{ width: '60px', height: '60px' }}>
                    <i className={`bi ${feature.icon} fs-3`}></i>
                  </div>

                  {/* Content */}
                  <h3 className="h4 fw-bold mb-3 text-vb-primary">{feature.title}</h3>
                  <p className="text-vb-muted mb-4 flex-grow-1" style={{ lineHeight: '1.6', fontSize: '0.975rem' }}>
                    {feature.description}
                  </p>

                  {/* Decorative line linking to theme */}
                  <div style={{ height: '4px', width: '40px', backgroundColor: feature.color, borderRadius: '2px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Banner */}
        <div className="row mt-5 pt-4 justify-content-center text-center">
          <div className="col-lg-10">
            <div className="p-4 bg-vb-slate rounded-4 d-flex flex-md-row flex-column align-items-center justify-content-between gap-3 text-md-start text-center">
              <div className="d-flex align-items-center gap-3 flex-md-row flex-column">
                <div className="bg-white p-2 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-shield-lock-fill text-vb-secondary fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1 text-vb-primary">100% Secure & Compliant Platform</h5>
                  <p className="text-vb-muted mb-0 small">Enforcing end-to-end data encryption, consent-driven sharing, and ABDM architecture compatibility.</p>
                </div>
              </div>
              <a href="#partner" className="btn btn-vb-outline btn-sm px-4 py-2 text-nowrap">Learn Integration Options</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
