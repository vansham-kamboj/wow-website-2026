import React from 'react';
import './Footer.css';
import logoImg from '@/assets/images/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-gray relative overflow-hidden">
      
      {/* Decorative lavender gradient circle */}
      <div 
          className="absolute pointer-events-none z-0"
          style={{
              width: '1400px',
              height: '1400px',
              top: '-600px',
              right: '-400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(192,38,211,0.25) 0%, rgba(192,38,211,0.15) 40%, transparent 70%)',
          }}
      ></div>

      <div className="relative z-10">
        <div className="footer-contact-row-gray">
          <div className="footer-contact-item-gray">
            <i className="fas fa-envelope" />
            <a href="mailto:Brd.wowemeralds@gmail.com">Brd.wowemeralds@gmail.com</a>
          </div>
          <div className="footer-contact-item-gray">
            <i className="fas fa-phone" />
            <a href="tel:+919925944556">+91 9925944556</a>
          </div>
          <div className="footer-contact-item-gray">
            <i className="fas fa-phone" />
            <a href="tel:+919924944556">+91 9924944556</a>
          </div>
          <div className="social-icons-gray">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="footer-main-gray">
          <div className="footer-column-gray">
            <div className="footer-logo-gray">
              <img src={logoImg} alt="Wow Global Studies Logo" style={{ filter: 'brightness(0) invert(1)' }} />
              <p>"Innovating for a better future, one step at a time."</p>
            </div>
            <div className="footer-map-gray">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208.82783816335106!2d73.19645892986853!3d22.270550178663257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc597727fcb75%3A0xcf89972d49813e50!2sWow%20Global%20Studies......%20Best%20Study%20Abroad%20Consultant!5e1!3m2!1sen!2sin!4v1744331936681!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="footer-column-gray">
            <h3>Services</h3>
            <ul>
              <li>Free Counselling</li>
              <li>Application Process</li>
              <li>Financial Aid</li>
              <li>Visa Assessment</li>
              <li>Interview Preparation</li>
              <li>Air Ticket</li>
              <li>Post Visa Services</li>
            </ul>
          </div>

          <div className="footer-column-gray">
            <h3>Coaching</h3>
            <ul>
              <li>IELTS Academic / General</li>
              <li>GRE</li>
              <li>PTE</li>
              <li>Duolingo English Test</li>
              <li>SAT</li>
              <li>TOEFL - IBT</li>
            </ul>
          </div>

          <div className="footer-column-gray">
            <h3>Countries</h3>
            <ul>
              <li>USA</li>
              <li>CANADA</li>
              <li>UK</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Germany</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-gray">
          <p>© 2025 Wow Global Studies. All Rights Reserved.</p>
          <button className="scroll-to-top-gray" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
