import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCards from '@/components/home/ServiceCards/ServiceCards';
import { FiFileText, FiDollarSign, FiSearch, FiMessageCircle, FiSend, FiHome, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import servicesData from '@/data/services.json';

const getIconComponent = (iconName, props) => {
    switch (iconName) {
        case 'FiFileText': return <FiFileText {...props} />;
        case 'FiDollarSign': return <FiDollarSign {...props} />;
        case 'FiSearch': return <FiSearch {...props} />;
        case 'FiMessageCircle': return <FiMessageCircle {...props} />;
        case 'FiSend': return <FiSend {...props} />;
        case 'FiHome': return <FiHome {...props} />;
        default: return <FiFileText {...props} />;
    }
};

const ServicesLanding = () => {
    return (
        <div className="bg-[#faf8fb] min-h-screen pt-[100px] pb-[80px]">
            <SEO 
                title="Our Services - Wow Global Studies" 
                description="Explore our comprehensive services from free counselling and application process to visa assessment and post-visa support."
            />

            <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px]">
                
                {/* 1. Hero Section */}
                <section className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                    <div className="flex-1">
                        <nav className="text-[13px] font-semibold text-[#888] mb-6 tracking-wide">
                            <Link to="/" className="hover:text-[#c026d3] transition-colors">HOME</Link>
                            <span className="mx-2">/</span>
                            <span className="text-[#161616]">SERVICES</span>
                        </nav>
                        
                        <h1 className="font-sans font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                            Every Visa Has a Journey — <br />
                            <span className="text-[#c026d3] font-medium">Here's How We Guide Yours</span>
                        </h1>
                        
                        <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[600px]">
                            From that initial spark of studying abroad to your first day on campus, it takes planning, precision, and the right guidance. We are with you across every step of your 7-stage journey.
                        </p>
                        
                        <Button variant="custom" className="bg-[#c026d3] hover:bg-[#a61eb8] text-white px-[28px] py-[14px] rounded-[8px] font-quicksand font-bold text-[15px] transition-colors shadow-[0_4px_14px_rgba(192,38,211,0.3)] flex items-center gap-2 h-auto">
                            Book Free Consultation
                        </Button>
                    </div>
                    
                    <div className="flex-1 flex justify-center lg:justify-end relative">
                        {/* Decorative visual for the journey */}
                        <div className="relative w-[100%] max-w-[500px] aspect-square bg-white rounded-[32px] shadow-[0_20px_60px_rgba(88,51,94,0.08)] border border-[#f0eaf2] p-8 overflow-hidden flex flex-col justify-center items-center">
                            {/* Abstract journey dots/lines */}
                            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-[#c026d3]/10" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="8 8">
                                <path d="M 50,350 Q 150,50 350,50" />
                            </svg>
                            
                            <div className="relative z-10 flex flex-col gap-6 w-full">
                                <div className="flex items-center gap-4 bg-[#faf8fb] p-4 rounded-2xl shadow-sm self-start">
                                    <div className="bg-[#c026d3]/10 p-3 rounded-full text-[#c026d3]"><FiMessageCircle size={24} /></div>
                                    <span className="font-bold text-[#161616]">Counselling</span>
                                </div>
                                <div className="flex items-center gap-4 bg-[#faf8fb] p-4 rounded-2xl shadow-sm self-center translate-x-4">
                                    <div className="bg-[#c026d3]/10 p-3 rounded-full text-[#c026d3]"><FiSearch size={24} /></div>
                                    <span className="font-bold text-[#161616]">Visa Assessment</span>
                                </div>
                                <div className="flex items-center gap-4 bg-[#faf8fb] p-4 rounded-2xl shadow-sm self-end">
                                    <div className="bg-[#c026d3]/10 p-3 rounded-full text-[#c026d3]"><FiSend size={24} /></div>
                                    <span className="font-bold text-[#161616]">Takeoff</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Intro/Story Block */}
                <section className="text-center max-w-[800px] mx-auto mb-12">
                    <h2 className="font-sans font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#161616] tracking-[-1px] mb-6">
                        One Journey, Many Chapters
                    </h2>
                    <p className="text-[16px] leading-[1.65] text-[#666]">
                        Every successful applicant goes through a proven series of stages. From shortlisting the best universities to securing your visa and boarding your flight, this page outlines our complete ecosystem of services. Click on any step to explore how we handle it in detail.
                    </p>
                </section>
                
            </div>

            {/* 3. Services Carousel (From Home Page) */}
            <ServiceCards />
        </div>
    );
};

export default ServicesLanding;