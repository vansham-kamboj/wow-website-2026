import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Presentation, Luggage, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const postVisaFaqs = [
    {
        question: "Do you help find accommodation before I arrive?",
        answer: "Yes, we partner with verified local housing providers and student accommodations to help you secure a safe, convenient place to live before you even board your flight."
    },
    {
        question: "What forex services do you offer?",
        answer: "We connect you with trusted forex partners who provide better exchange rates than traditional banks, along with zero-markup forex cards and easy wire transfers for tuition fees."
    },
    {
        question: "Do you provide support after I've landed too?",
        answer: "Absolutely. Our relationship doesn't end at the airport. Our pre-departure briefing covers everything you need to know upon arrival, and our team remains available to guide you through your initial transition phase."
    }
];

const PostVisaServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Post Visa Services - Wow Global Studies" 
                description="Accommodation, forex, and a proper pre-departure briefing — so you land prepared, not lost."
            />

            {/* 1. Hero Section (Full-width illustrated) */}
            <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf8fb] to-white pt-[130px] pb-12 min-[820px]:pt-[170px] min-[820px]:pb-24">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="z-20 w-full max-w-[900px] mx-auto mb-12">
                            
                            <h1 className="font-sans font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Your Story Doesn't <br className="hidden md:block"/>
                                <span className="text-primary font-medium">End at the Airport.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[640px] mx-auto">
                                Accommodation, forex, and a proper pre-departure briefing — so you land prepared, not lost.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Plan My Arrival
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Full-width Illustration Container */}
                        <div className="relative w-full max-w-[800px] h-[300px] md:h-[400px] flex items-center justify-center mt-4">
                            
                            {/* Decorative Background Elements */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[60px] animate-pulse"></div>
                                <div className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/10 rounded-full blur-[40px] -translate-x-12 -translate-y-12"></div>
                            </div>
                            
                            {/* Central Motifs */}
                            <div className="relative z-10 flex gap-6 md:gap-16 items-center justify-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.1)] flex items-center justify-center transform -rotate-12 transition-transform hover:scale-110">
                                    <Luggage className="text-primary w-10 h-10 md:w-14 md:h-14" strokeWidth={1.5} />
                                </div>
                                <div className="w-24 h-24 md:w-40 md:h-40 bg-primary rounded-full shadow-[0_20px_50px_rgba(147,51,234,0.3)] flex items-center justify-center z-20 transition-transform hover:scale-110">
                                    <MapPin className="text-white w-12 h-12 md:w-20 md:h-20" strokeWidth={1.5} />
                                </div>
                                <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.1)] flex items-center justify-center transform rotate-12 transition-transform hover:scale-110">
                                    <Home className="text-primary w-10 h-10 md:w-14 md:h-14" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Floating Pills */}
                            <div className="absolute top-[15%] left-[0%] md:left-[5%] bg-white px-5 py-3 rounded-full shadow-lg border border-[#f0eaf2] animate-bounce z-20" style={{ animationDuration: '3.5s' }}>
                                <span className="text-primary font-bold text-[13px] md:text-[15px]">Verified Accommodation</span>
                            </div>
                            <div className="absolute bottom-[20%] left-[10%] md:left-[15%] bg-white px-5 py-3 rounded-full shadow-lg border border-[#f0eaf2] animate-bounce z-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                <span className="text-primary font-bold text-[13px] md:text-[15px]">Pre-Departure Briefing</span>
                            </div>
                            <div className="absolute top-[25%] right-[0%] md:right-[5%] bg-white px-5 py-3 rounded-full shadow-lg border border-[#f0eaf2] animate-bounce z-20" style={{ animationDuration: '3.2s', animationDelay: '0.5s' }}>
                                <span className="text-primary font-bold text-[13px] md:text-[15px]">Best Forex Rates</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] pb-16 min-[820px]:pb-24 pt-4 md:pt-12">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            We handle your seamless transition to a new country. From accommodation shortlisting near your campus or workplace, to providing forex card and currency guidance, to delivering a highly structured pre-departure checklist session so you know exactly what to expect.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <Home size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Verified Local Accommodation Partners
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Don't fall for housing scams online. We connect you with trusted providers to secure a safe home near your university.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <CreditCard size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Better-Than-Bank Forex Rates
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Save on international transactions with partnered forex cards and secure the best currency exchange rates for your cash.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <Presentation size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Personal Pre-Departure Briefing Call
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                A comprehensive session covering what to pack, airport immigration procedures, and initial settling-in advice.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={postVisaFaqs} />
            </div>
        </div>
    );
};

export default PostVisaServices;
