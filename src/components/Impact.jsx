

export default function Impact() {
  return (
    <section id="impact" className="py-5 bg-vb-slate position-relative">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-8">
            <span className="section-subtitle">Impact & Partnerships</span>
            <h2 className="section-title mt-2">Scaling Rural Healthcare Through Collaboration</h2>
            <p className="text-vb-muted fs-5">
              Healthcare delivery in rural India requires a ecosystem effort. We partner with leading social organizations and corporate sponsors to turn technology into lives saved.
            </p>
          </div>
        </div>

        {/* Featured Partner Case Study: Art of Living */}
        <div className="row align-items-center mb-5 pb-4">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="bg-white p-5 rounded-4 shadow-sm border border-light vb-floating">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning-subtle text-warning rounded-4 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-flower1 fs-3"></i>
                </div>
                <div>
                  <span className="text-uppercase fw-bold text-vb-accent small" style={{ letterSpacing: '1px' }}>Flagship Partnership</span>
                  <h4 className="fw-extrabold text-vb-primary mb-0 mt-1">The Art of Living Foundation</h4>
                </div>
              </div>
              
              <p className="text-vb-muted mb-4" style={{ lineHeight: '1.7' }}>
                Vital Bharat has successfully powered multiple rural healthcare camps in collaboration with <strong>The Art of Living</strong>. By installing our low-bandwidth teleconsultation terminals, we enabled thousands of villagers to consult with super-specialists from top cities without leaving their villages.
              </p>

              <div className="row g-3 text-start">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-vb-accent fs-5"></i>
                    <span className="fw-semibold text-vb-primary text-sm">30+ Remote Villages Covered</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-vb-accent fs-5"></i>
                    <span className="fw-semibold text-vb-primary text-sm">Real-time EHR Portability</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-vb-accent fs-5"></i>
                    <span className="fw-semibold text-vb-primary text-sm">5,000+ Consultations Done</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-vb-accent fs-5"></i>
                    <span className="fw-semibold text-vb-primary text-sm">94% Patient Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <span className="badge bg-vb-accent-light text-vb-accent px-3 py-2 rounded-pill fw-bold mb-3 fs-7">
              NGO & CSR Outreach
            </span>
            <h3 className="fw-bold text-vb-primary mb-4" style={{ fontSize: '2rem' }}>
              Powering Your Foundation's Rural Health Mandate
            </h3>
            <p className="text-vb-muted mb-4" style={{ lineHeight: '1.7' }}>
              Spiritual organizations, NGOs, and CSR departments possess the trust and local networks, while Vital Bharat provides the clinical framework and technological backbone. Together, we deploy scalable telemedicine clinics in weeks rather than months.
            </p>

            {/* Why Partner Grid */}
            <div className="row g-3">
              <div className="col-12 d-flex gap-3">
                <div className="text-vb-secondary fs-4">
                  <i className="bi bi-bar-chart-fill"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-vb-primary">Real-Time CSR Dashboard</h6>
                  <p className="small text-vb-muted mb-0">Track patient outreach, consult volumes, and clinical parameters live to measure the precise impact of your funding.</p>
                </div>
              </div>
              <div className="col-12 d-flex gap-3">
                <div className="text-vb-secondary fs-4">
                  <i className="bi bi-wallet2"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-vb-primary">Cost-Efficient Operations</h6>
                  <p className="small text-vb-muted mb-0">Reduce physical doctor travel and stay overheads by substituting them with high-definition virtual clinics.</p>
                </div>
              </div>
              <div className="col-12 d-flex gap-3">
                <div className="text-vb-secondary fs-4">
                  <i className="bi bi-gear-wide-connected"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-vb-primary">End-to-End Implementation</h6>
                  <p className="small text-vb-muted mb-0">We assist in hardware procurement, local coordinator training, doctor onboarding, and system support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pitch callout section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-vb-primary text-white p-5 rounded-4 shadow-lg text-center position-relative overflow-hidden">
              {/* Background Glow */}
              <div className="position-absolute" style={{ right: '-5%', bottom: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%)' }}></div>
              
              <h3 className="fw-bold mb-3">Is Your Organization Planning a Health Campaign?</h3>
              <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: '750px', opacity: 0.9 }}>
                Let Vital Bharat configure your telemedicine kiosks, connect top-tier doctors, and supply structured health records. Let's maximize your healthcare outreach together.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#partner" className="btn btn-vb-accent px-4 py-2">Become a Partner</a>
                <a href="#features" className="btn btn-outline-light px-4 py-2 border-2">How It Works</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
