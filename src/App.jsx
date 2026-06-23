import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Impact from './components/Impact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features & Value Props */}
      <Features />

      {/* Partnerships & B2B Impact */}
      <Impact />

      {/* Lead Generation Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
