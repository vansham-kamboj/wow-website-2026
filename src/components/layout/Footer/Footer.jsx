import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';
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
              background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(147,51,234,0.08) 40%, transparent 70%)',
          }}
      ></div>

      <div className="relative z-10">
        <div className="footer-contact-row-gray">
          <div className="footer-contact-item-gray">
            <Mail size={18} />
            <a href="mailto:Brd.wowemeralds@gmail.com">Brd.wowemeralds@gmail.com</a>
          </div>
          <div className="footer-contact-item-gray">
            <Phone size={18} />
            <a href="tel:+919925944556">+91 9925944556</a>
          </div>
          <div className="footer-contact-item-gray">
            <Phone size={18} />
            <a href="tel:+919924944556">+91 9924944556</a>
          </div>
          <div className="social-icons-gray">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
              <li><Link to="/services/free-counselling">Free Counselling</Link></li>
              <li><Link to="/services/application-process">Application Process</Link></li>
              <li><Link to="/services/financial-aid">Financial Aid</Link></li>
              <li><Link to="/services/visa-assessment">Visa Assessment</Link></li>
              <li><Link to="/services/interview-preparation">Interview Preparation</Link></li>
              <li><Link to="/services/air-ticket">Air Ticket</Link></li>
              <li><Link to="/services/post-visa-services">Post Visa Services</Link></li>
            </ul>
          </div>

          <div className="footer-column-gray">
            <h3>Coaching</h3>
            <ul>
              <li><Link to="/coaching/ielts">IELTS Academic / General</Link></li>
              <li><Link to="/coaching/gre">GRE</Link></li>
              <li><Link to="/coaching/pte">PTE</Link></li>
              <li><Link to="/coaching/duolingo">Duolingo English Test</Link></li>
              <li><Link to="/coaching/sat">SAT</Link></li>
              <li><Link to="/coaching/toefl-ibt">TOEFL - IBT</Link></li>
            </ul>
          </div>

          <div className="footer-column-gray">
            <h3>Countries</h3>
            <ul>
              <li><Link to="/study-in/usa">USA</Link></li>
              <li><Link to="/study-in/canada">Canada</Link></li>
              <li><Link to="/study-in/uk">UK</Link></li>
              <li><Link to="/study-in/australia">Australia</Link></li>
              <li><Link to="/study-in/new-zealand">New Zealand</Link></li>
              <li><Link to="/study-in/germany">Germany</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-gray">
          <p>© 2025 Wow Global Studies. All Rights Reserved.</p>
          <button className="scroll-to-top-gray" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
