import React, { useState } from 'react';
import SEO from '@/components/common/SEO';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // WhatsApp number (no spaces, no + sign)
    const phoneNumber = "919924944556"; 

    // Create WhatsApp message
    const whatsappMessage = `Hello, I want to contact you.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
        <>
            <SEO title="Contact - Wow Global Studies" />
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="subtitle">
          We’d love to hear from you! Fill out the form and our team will get back to you shortly.
        </p>

        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Type your message here..." 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="contact-info-card">
          <h2>Our Office</h2>
          <p><strong>Address:</strong> FF 111 Ronak Plaza, Tulsidham, Manjalpur, Vadodara, Gujarat 390011, India</p>
          <p><strong>Phone:</strong> +91 99259 44556</p>
          <p><strong>Email:</strong> support@wowglobalstudies.com</p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/wow_global_studies" target="_blank" rel="noreferrer">@wow_global_studies</a></p>
          <p><strong>Website:</strong> <a href="https://www.wowglobalstudies.com" target="_blank" rel="noreferrer">wowglobalstudies.com</a></p>
        </div>
      </div>
    </section>
  
        </>);
};

export default Contact;