import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { buttonVariants } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

  const servicesLinks = [
    { name: 'Free Counselling', path: '/services/free-counselling' },
    { name: 'Application Process', path: '/services/application-process' },
    { name: 'Financial Aid', path: '/services/financial-aid' },
    { name: 'Visa Assessment', path: '/services/visa-assessment' },
    { name: 'Interview Preparation', path: '/services/interview-preparation' },
    { name: 'Air Ticket', path: '/services/air-ticket' },
    { name: 'Post Visa Services', path: '/services/post-visa-services' }
  ];

  const coachingLinks = [
    { name: 'IELTS Academic / General', path: '/coaching/ielts' },
    { name: 'GRE', path: '/coaching/gre' },
    { name: 'PTE', path: '/coaching/pte' },
    { name: 'Duolingo English Test', path: '/coaching/duolingo' },
    { name: 'SAT', path: '/coaching/sat' },
    { name: 'TOEFL - IBT', path: '/coaching/toefl-ibt' }
  ];

  const countriesLinks = [
    { name: 'USA', path: '/study-in/usa' },
    { name: 'CANADA', path: '/study-in/canada' },
    { name: 'UK', path: '/study-in/uk' },
    { name: 'Australia', path: '/study-in/australia' },
    { name: 'New Zealand', path: '/study-in/new-zealand' },
    { name: 'Germany', path: '/study-in/germany' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle transparency
      setIsScrolled(currentScrollY > 20);

      // Handle visibility
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMobileMenuOpen) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      {/* Top Announcement Bar */}
      <div className="w-full bg-primary py-[8px] px-[15px] min-[820px]:px-[20px] text-center shadow-sm">
        <p className="text-white text-[10px] min-[820px]:text-[13px] font-bold m-0 tracking-[0.2px] min-[820px]:tracking-[0.5px] leading-[1.2] min-[820px]:leading-normal">
          ✨ Great News! We are now providing up to <span className="text-[10px] min-[820px]:text-[14px] font-black text-[#f4d160]">100% Scholarships</span> for eligible students!
        </p>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="flex items-center px-[20px] md:px-[40px] py-[18px]">
        
        {/* Logo — far left */}
        <div className="flex-none mr-[40px]">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="WOW Global Studies Logo" className="h-[22px] w-auto object-contain" />
          </Link>
        </div>

        {/* Navigation — right of logo */}
        <nav className="hidden md:flex items-center flex-1">
          <ul className="flex items-center gap-[32px] list-none m-0 p-0">
            <li><Link to="/" className="text-[14px] text-[#161616] font-bold no-underline hover:text-primary transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="text-[14px] text-[#5a5a5a] font-medium no-underline hover:text-primary transition-colors duration-200">About us</Link></li>
            
            {/* Services Dropdown */}
            <li className="relative group py-[20px] -my-[20px]">
              <Link to="/services" className="text-[14px] text-[#5a5a5a] font-medium no-underline hover:text-primary transition-colors duration-200 flex items-center gap-[4px]">
                Services
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-current stroke-[2] transition-transform duration-300 group-hover:rotate-180"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <div className="absolute top-[100%] left-0 pt-[10px] opacity-0 translate-y-[10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#f0eaf2] p-[10px] min-w-[220px] flex flex-col">
                  {servicesLinks.map((item, i) => (
                    <Link key={i} to={item.path} className="px-[16px] py-[10px] text-[13.5px] text-[#5a5a5a] hover:text-primary hover:bg-[#f8f5fa] rounded-[6px] transition-colors duration-200 font-medium whitespace-nowrap">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Coaching Dropdown */}
            <li className="relative group py-[20px] -my-[20px]">
              <Link to="/coaching" className="text-[14px] text-[#5a5a5a] font-medium no-underline hover:text-primary transition-colors duration-200 flex items-center gap-[4px]">
                Coaching
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-current stroke-[2] transition-transform duration-300 group-hover:rotate-180"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <div className="absolute top-[100%] left-0 pt-[10px] opacity-0 translate-y-[10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#f0eaf2] p-[10px] min-w-[220px] flex flex-col">
                  {coachingLinks.map((item, i) => (
                    <Link key={i} to={item.path} className="px-[16px] py-[10px] text-[13.5px] text-[#5a5a5a] hover:text-primary hover:bg-[#f8f5fa] rounded-[6px] transition-colors duration-200 font-medium whitespace-nowrap">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Countries Dropdown */}
            <li className="relative group py-[20px] -my-[20px]">
              <Link to="/study-in" className="text-[14px] text-[#5a5a5a] font-medium no-underline hover:text-primary transition-colors duration-200 flex items-center gap-[4px]">
                Countries
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-current stroke-[2] transition-transform duration-300 group-hover:rotate-180"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <div className="absolute top-[100%] left-0 pt-[10px] opacity-0 translate-y-[10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#f0eaf2] p-[10px] min-w-[160px] flex flex-col">
                  {countriesLinks.map((item, i) => (
                    <Link key={i} to={item.path} className="px-[16px] py-[10px] text-[13.5px] text-[#5a5a5a] hover:text-primary hover:bg-[#f8f5fa] rounded-[6px] transition-colors duration-200 font-medium whitespace-nowrap">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><Link to="/blogs" className="text-[14px] text-[#5a5a5a] font-medium no-underline hover:text-primary transition-colors duration-200">Blogs</Link></li>
          </ul>
        </nav>

        {/* CTA Button — far right with curved borders */}
        <div className="hidden md:flex flex-none ml-auto">
          <Link 
            to="/contact"  
            className={buttonVariants({ 
              variant: "custom", 
              className: "inline-block text-[14px] font-bold text-white no-underline whitespace-nowrap bg-primary hover:bg-primary px-[24px] py-[10px] rounded-[8px] transition-all duration-300 hover:shadow-md h-auto" 
            })}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-none ml-auto md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-[8px] text-[#161616] hover:text-primary transition-colors bg-white/50 rounded-md"
            aria-label="Toggle Menu"
          >
            <div className="relative w-[26px] h-[26px] overflow-hidden">
                <Menu size={26} className={`absolute inset-0 transition-all duration-300 transform origin-center ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <X size={26} className={`absolute inset-0 transition-all duration-300 transform origin-center ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-white w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-gray-100 shadow-lg transform origin-top ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto scale-y-100' : 'max-h-0 opacity-0 overflow-hidden scale-y-95'}`}>
        <nav className="flex flex-col px-[20px] py-[15px]">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-[12px] text-[15px] text-[#161616] font-bold border-b border-gray-50">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-[12px] text-[15px] text-[#161616] font-bold border-b border-gray-50">About us</Link>
          
          {/* Services Mobile */}
          <div className="py-[12px] border-b border-gray-50 flex flex-col">
            <button onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')} className="flex justify-between items-center text-[14px] min-[820px]:text-[15px] text-[#161616] font-bold w-full text-left">
              Services
              <ChevronDown className={`transition-transform duration-300 ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col pl-[15px] overflow-hidden transition-all duration-300 ${mobileExpandedSection === 'services' ? 'max-h-[400px] mt-[10px]' : 'max-h-0'}`}>
              {servicesLinks.map((item, i) => (
                <Link key={i} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="py-[8px] text-[13px] text-[#5a5a5a] active:text-primary">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Coaching Mobile */}
          <div className="py-[12px] border-b border-gray-50 flex flex-col">
            <button onClick={() => setMobileExpandedSection(mobileExpandedSection === 'coaching' ? null : 'coaching')} className="flex justify-between items-center text-[14px] min-[820px]:text-[15px] text-[#161616] font-bold w-full text-left">
              Coaching
              <ChevronDown className={`transition-transform duration-300 ${mobileExpandedSection === 'coaching' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col pl-[15px] overflow-hidden transition-all duration-300 ${mobileExpandedSection === 'coaching' ? 'max-h-[400px] mt-[10px]' : 'max-h-0'}`}>
              {coachingLinks.map((item, i) => (
                <Link key={i} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="py-[8px] text-[13px] text-[#5a5a5a] active:text-primary">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Countries Mobile */}
          <div className="py-[12px] border-b border-gray-50 flex flex-col">
            <button onClick={() => setMobileExpandedSection(mobileExpandedSection === 'countries' ? null : 'countries')} className="flex justify-between items-center text-[14px] min-[820px]:text-[15px] text-[#161616] font-bold w-full text-left">
              Countries
              <ChevronDown className={`transition-transform duration-300 ${mobileExpandedSection === 'countries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col pl-[15px] overflow-hidden transition-all duration-300 ${mobileExpandedSection === 'countries' ? 'max-h-[400px] mt-[10px]' : 'max-h-0'}`}>
              {countriesLinks.map((item, i) => (
                <Link key={i} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="py-[8px] text-[13px] text-[#5a5a5a] active:text-primary">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="py-[12px] text-[15px] text-[#161616] font-bold border-b border-gray-50">Blogs</Link>

          <Link 
            to="/contact"  
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-[20px] inline-block text-center text-[15px] font-bold text-white bg-primary px-[24px] py-[12px] rounded-[8px]"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
