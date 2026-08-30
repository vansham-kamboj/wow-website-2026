import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import FAQ from '@/components/home/FAQ/FAQ';
import ServiceCards from '@/components/home/ServiceCards/ServiceCards';



const serviceFaqs = [
    {
        question: "Do I need to pay for the first consultation?",
        answer: "Not at all. Your first step starts with a free, no-obligation conversation where we understand your goals and map out the possibilities for your journey."
    },
    {
        question: "Do you help with all countries?",
        answer: "We specialize in the top study destinations globally, including the USA, UK, Canada, Australia, New Zealand, and Germany. This ensures you have the best options for your future."
    },
    {
        question: "How long does the full process take?",
        answer: "Every journey has its own timeline depending on the country, university intake, and visa processing times. Typically, from the first counseling session to boarding your flight, it takes anywhere from 3 to 8 months. We keep you on track every step of the way."
    }
];

const ServicesLanding = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#faf8fb] min-h-screen pt-[130px] flex flex-col">
            <SEO title="Our Services - Wow Global Studies" description="Explore our comprehensive services from free counselling and application process to visa assessment and post-visa support." url="/services/services-landing" />

            {/* 1. Hero Section (with gradient fade out) */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pb-16 lg:pb-24">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <section className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 text-center lg:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[26px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Every Visa Has a Journey<br />
                                <span className="text-primary font-medium">Here's How We Guide Yours</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[600px] mx-auto lg:mx-0">
                                From that initial spark of studying abroad to your first day on campus, it takes planning, precision, and the right guidance. We are with you across all 7 stages of your journey, each detailed below.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto mx-auto lg:mx-0">
                                    Book Free Consultation
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="flex-1 flex justify-center lg:justify-end relative w-full mt-8 lg:mt-0 z-10">
                            {/* Decorative visual for the journey */}
                            {/* Decorative visual for the journey (HTML/CSS/SVG only) */}
                            <div className="relative w-full max-w-[450px] aspect-square bg-white rounded-[32px] shadow-[0_20px_60px_rgba(147,51,234,0.06)] border border-[#f0eaf2] p-8 overflow-hidden flex flex-col justify-between items-center">
                                
                                <style>{`
                                  .dash-path {
                                    stroke-dasharray: 8 12;
                                    animation: dashAnim 12s linear infinite reverse;
                                  }
                                  @keyframes dashAnim {
                                    from { stroke-dashoffset: 200; }
                                    to { stroke-dashoffset: 0; }
                                  }
                                  .float-anim {
                                    animation: floating 4s ease-in-out infinite;
                                  }
                                  .float-anim-delay-1 {
                                    animation: floating 4.5s ease-in-out infinite 0.5s;
                                  }
                                  .float-anim-delay-2 {
                                    animation: floating 5s ease-in-out infinite 1s;
                                  }
                                  @keyframes floating {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-5px); }
                                  }
                                  .stagger-in {
                                    opacity: 0;
                                    animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                                  }
                                  .stagger-delay-1 { animation-delay: 0.1s; }
                                  .stagger-delay-2 { animation-delay: 0.3s; }
                                  .stagger-delay-3 { animation-delay: 0.5s; }
                                  
                                  @keyframes fadeSlideUp {
                                    0% { opacity: 0; transform: translateY(20px); }
                                    100% { opacity: 1; transform: translateY(0); }
                                  }
                                `}</style>

                                {/* Abstract journey path */}
                                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-primary/20 pointer-events-none" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round">
                                    <path className="dash-path" d="M 80,320 C 150,220 220,150 340,80" />
                                </svg>
                                
                                {/* Background Glow behind Takeoff */}
                                <div className="absolute top-[10%] right-[10%] w-[180px] h-[180px] bg-primary rounded-full opacity-[0.05] blur-[40px] pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col justify-between w-full h-full py-4">
                                    
                                    {/* 1. Counselling */}
                                    <div className="stagger-in stagger-delay-1 self-start ml-2 mt-auto pb-4">
                                        <div className="float-anim flex items-center gap-4 bg-white p-4 rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#f8f5fa]">
                                            <div className="bg-primary/10 p-[14px] rounded-full text-primary"><MessageCircle size={20} strokeWidth={2.5} /></div>
                                            <span className="font-bold text-[#161616] text-[15px] pr-4">Counselling</span>
                                        </div>
                                    </div>
                                    
                                    {/* 2. Documentation */}
                                    <div className="stagger-in stagger-delay-2 self-center mt-[-40px]">
                                        <div className="float-anim-delay-1 flex items-center gap-4 bg-white p-4 rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#f8f5fa]">
                                            <div className="bg-primary/10 p-[14px] rounded-full text-primary"><FileText size={20} strokeWidth={2.5} /></div>
                                            <span className="font-bold text-[#161616] text-[15px] pr-4">Documentation</span>
                                        </div>
                                    </div>

                                    {/* 3. Takeoff */}
                                    <div className="stagger-in stagger-delay-3 self-end mr-2 mt-[-40px] mb-auto">
                                        <div className="float-anim-delay-2 flex items-center gap-4 bg-white p-4 rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#f8f5fa] relative">
                                            <div className="bg-primary/10 p-[14px] rounded-full text-primary"><Plane size={20} strokeWidth={2.5} className="-rotate-[30deg]" /></div>
                                            <span className="font-bold text-[#161616] text-[15px] pr-4">Takeoff</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 2. Services Grid */}
            <div className="flex-grow flex flex-col">
                <ServiceCards />

                {/* 3. FAQ */}
                <div className="bg-white">
                    <FAQ data={serviceFaqs} />
                </div>
            </div>
        </div>
    );
};

export default ServicesLanding;