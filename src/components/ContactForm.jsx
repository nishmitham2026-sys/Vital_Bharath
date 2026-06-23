import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    partnershipType: 'ngo',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setSubmitting(false);
      
      // SweetAlert2 Interception
      Swal.fire({
        title: 'Inquiry Submitted Successfully!',
        text: 'Thank you for reaching out! The Vital Bharat partnerships team will contact you shortly.',
        icon: 'success',
        confirmButtonColor: '#0284c7',
        background: '#ffffff',
        customClass: {
          popup: 'rounded-4'
        }
      });

      // Reset form
      setFormData({
        name: '',
        organization: '',
        email: '',
        partnershipType: 'ngo',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="partner" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-7">
            <span className="section-subtitle">Get Involved</span>
            <h2 className="section-title mt-2">Partner with Vital Bharat</h2>
            <p className="text-vb-muted fs-5">
              Ready to expand telemedicine access or launch a CSR-driven rural clinic? Fill out the form, and let's craft a tailored solution.
            </p>
          </div>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Contact Details Column */}
          <div className="col-lg-5 d-flex flex-column justify-content-between">
            <div className="bg-vb-primary text-white p-5 rounded-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
              {/* Abstract overlay graphics */}
              <div className="position-absolute" style={{ top: '-10%', left: '-10%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%)' }}></div>
              
              <div>
                <h4 className="fw-bold mb-4">Contact Information</h4>
                <p className="text-light mb-5" style={{ opacity: 0.85 }}>
                  Have immediate technical, integration, or compliance questions? Connect with our central coordination center.
                </p>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="bg-vb-primary-light text-vb-accent rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-light">Corporate Headquarters</h6>
                    <p className="small text-light mb-0" style={{ opacity: 0.8 }}>
                      Vital Bharat HQ, 4th Block, Koramangala,<br />Bengaluru, Karnataka - 560034, India
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="bg-vb-primary-light text-vb-accent rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-envelope-open-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-light">Partnership Inquiries</h6>
                    <p className="small text-light mb-0" style={{ opacity: 0.8 }}>
                      partners@vitalbharat.org
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="bg-vb-primary-light text-vb-accent rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-light">Direct Coordination Line</h6>
                    <p className="small text-light mb-0" style={{ opacity: 0.8 }}>
                      +91 (80) 4920 1800
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-top border-light border-opacity-10 d-flex justify-content-between align-items-center">
                <span className="small" style={{ opacity: 0.7 }}>ABDM Registered Platform</span>
                <i className="bi bi-shield-check text-vb-accent fs-4"></i>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-7">
            <div className="card border-light p-4 p-md-5 shadow-lg rounded-4 h-100 vb-card">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">
                  
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold text-vb-primary">Full Name *</label>
                    <input 
                      type="text" 
                      className={`form-control py-2.5 ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      placeholder="Dr. / Mr. / Ms."
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Organization Name */}
                  <div className="col-md-6">
                    <label htmlFor="organization" className="form-label fw-semibold text-vb-primary">Organization *</label>
                    <input 
                      type="text" 
                      className={`form-control py-2.5 ${errors.organization ? 'is-invalid' : ''}`}
                      id="organization"
                      name="organization"
                      placeholder="e.g. Life Care NGO"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                    {errors.organization && <div className="invalid-feedback">{errors.organization}</div>}
                  </div>

                  {/* Work Email */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold text-vb-primary">Work Email *</label>
                    <input 
                      type="email" 
                      className={`form-control py-2.5 ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      placeholder="name@org.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Partnership Type */}
                  <div className="col-md-6">
                    <label htmlFor="partnershipType" className="form-label fw-semibold text-vb-primary">Partnership Focus</label>
                    <select 
                      className="form-select py-2.5" 
                      id="partnershipType" 
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                    >
                      <option value="ngo">NGO / Foundation Outreach</option>
                      <option value="csr">CSR Funding & Sponsorship</option>
                      <option value="doctor">Specialist Doctor Network</option>
                      <option value="hardware">Kiosk/Hardware Provider</option>
                      <option value="other">General B2B Inquiry</option>
                    </select>
                  </div>

                  {/* Message Detail */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold text-vb-primary">Message / Partnership Scope *</label>
                    <textarea 
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message" 
                      name="message"
                      rows="4" 
                      placeholder="Please briefly describe your rural reach, active clinic networks, or campaign timelines..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button 
                      type="submit" 
                      className="btn btn-vb-accent w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                      disabled={submitting}
                      id="contact-submit-btn"
                    >
                      {submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill"></i>
                          <span>Send Inquiry Request</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
