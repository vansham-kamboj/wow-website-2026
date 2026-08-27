import React from 'react';
import SEO from '@/components/common/SEO';
import './AboutUs.css';

const About = () => {
  return (
        <>
            <SEO title="About - Wow Global Studies" />
    <section className="about-section">
      <div className="about-container">

        <div className="about-card">
          <h1>About Us</h1>
          <p className="intro">
            Empowering Global Journeys: Your Trusted Visa Partner
          </p>
          <p>
            Founded in 2016 and headquartered in Vadodara, Gujarat, WOW Global Studies is a privately held company specializing in professional services related to international education. With a dedicated team, we have been assisting students in achieving their dreams of studying abroad for nearly a decade.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            At WOW Global Studies, our mission is to empower students by providing comprehensive guidance and support throughout their journey to study abroad. We aim to simplify the complex processes of university selection, visa applications, and financial planning.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Services</h2>
          <div className="no-bullets">
            <p><strong>Study Abroad Consultation:</strong> Personalized counseling to help students choose the right course and university.</p>
            <p><strong>Visa Assistance:</strong> Expert guidance with a 99% success rate.</p>
            <p><strong>Financial Planning:</strong> Support with education loans via partnerships like SBI.</p>
            <p><strong>Application Support:</strong> Help with SOPs, essays, LORs, and more.</p>
          </div>
        </div>

        <div className="about-card">
          <h2>Our Achievements</h2>
          <div className="no-bullets">
            <p>Successfully assisted 28 students from Nirma University with visas in a single day.</p>
            <p>Collaborations with institutions like Laurentian University, Canada.</p>
          </div>
        </div>

        <div className="about-card">
          <h2>Connect With Us</h2>
          <p>Embark on your global education journey with WOW Global Studies. Our experienced team is here to guide you every step of the way.</p>

          <div className="contact-info">
            <p><strong>Address:</strong> FF 111 Ronak Plaza, Tulsidham, Manjalpur, Vadodara, Gujarat 390011, India</p>
            <p><strong>Phone:</strong> +91 99259 44556</p>
            <p><strong>Website:</strong> <a href="https://www.wowglobalstudies.com" target="_blank" rel="noopener noreferrer">wowglobalstudies.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://in.linkedin.com/company/wowglobalstudies" target="_blank" rel="noopener noreferrer">WOW Global Studies</a></p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/wow_global_studies" target="_blank" rel="noopener noreferrer">@wow_global_studies</a></p>
          </div>
        </div>

      </div>
    </section>
  
        </>);
};

export default About;
