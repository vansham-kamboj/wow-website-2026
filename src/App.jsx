import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './styles/App.css';
import AppRoutes from './routes/AppRoutes';
import EnquiryPopup from './components/common/EnquiryPopup';
import FloatingCTA from './components/common/FloatingCTA';

function App() {
  // Initialize Lenis for smooth scroll (momentum scrolling)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <script 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Wow Global Studies",
                        "url": "https://www.wowglobalstudies.com",
                        "logo": "https://www.wowglobalstudies.com/assets/images/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-9925944556",
                            "contactType": "customer service",
                            "email": "info@wowglobalstudies.com"
                        },
                        "sameAs": [
                            "https://instagram.com",
                            "https://linkedin.com"
                        ]
                    }) }} 
                />
            </Helmet>
            <EnquiryPopup />
            <FloatingCTA />
            <Router>
                <AppRoutes />
            </Router>
        </HelmetProvider>
    );
}

export default App;
