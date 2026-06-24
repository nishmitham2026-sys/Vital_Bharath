import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookDemo = () => {
    Swal.fire({
      title: 'Schedule a Vital Bharat Demo',
      html: `
        <p class="text-muted mb-4">Select your interest and we will configure a custom sandbox environment for you.</p>
        <div class="text-start">
          <div class="mb-3">
            <label for="swal-name" class="form-label font-weight-bold">Your Name *</label>
            <input type="text" id="swal-name" class="form-control" placeholder="e.g. Dr. Rajesh Kumar">
          </div>
          <div class="mb-3">
            <label for="swal-org" class="form-label">Organization Name *</label>
            <input type="text" id="swal-org" class="form-control" placeholder="e.g. Life Care Foundation">
          </div>
          <div class="mb-3">
            <label for="swal-email" class="form-label">Work Email *</label>
            <input type="email" id="swal-email" class="form-control" placeholder="name@organization.com">
          </div>
          <div class="mb-3">
            <label for="swal-role" class="form-label">Your Role / Segment *</label>
            <select id="swal-role" class="form-select">
              <option value="ngo">NGO / Foundation</option>
              <option value="csr">CSR Representative</option>
              <option value="hospital">Hospital / Clinic Network</option>
              <option value="government">Government Health Department</option>
              <option value="doctor">Individual Specialist Doctor</option>
            </select>
          </div>
        </div>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Submit Request',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#0284c7',
      cancelButtonColor: '#64748b',
      preConfirm: () => {
        const name = document.getElementById('swal-name').value.trim();
        const org = document.getElementById('swal-org').value.trim();
        const email = document.getElementById('swal-email').value.trim();
        const role = document.getElementById('swal-role').value;

        if (!name || !org || !email) {
          Swal.showValidationMessage('Please fill in all required fields');
          return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          Swal.showValidationMessage('Please enter a valid email address');
          return false;
        }

        return { name, org, email, role };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Demo Request Received!',
          text: `Thank you, ${result.value.name}. Our partnerships coordinator will reach out to ${result.value.email} within 24 hours to schedule your custom walkthrough.`,
          icon: 'success',
          confirmButtonColor: '#0d9488'
        });
      }
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top vb-navbar ${scrolled ? 'scrolled' : 'py-3'}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div className="bg-vb-secondary text-white rounded-3 p-2 me-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <i className="bi bi-heart-pulse-fill fs-5"></i>
          </div>
          <span className="fw-extrabold fs-4 tracking-tight text-vb-primary" style={{ fontWeight: 800 }}>
            Vital<span className="text-vb-secondary">Bharat</span>
          </span>
        </a>

        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item mx-2">
              <a className="nav-link vb-nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link vb-nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link vb-nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link vb-nav-link" href="#impact">Our Impact</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link vb-nav-link" href="#partner">Partner With Us</a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button 
                onClick={handleBookDemo} 
                className="btn btn-vb-primary w-100"
                id="navbar-book-demo-cta"
              >
                Book a Demo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
