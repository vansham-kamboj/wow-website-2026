import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banknote, FileCheck, Briefcase, GraduationCap, Map, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const ukFaqs = [
    {
        question: "Is a 1-year UK master's respected the same as a 2-year one?",
        answer: "Yes. UK master's degrees are internationally recognized and highly respected. They are 1-year programs because they are intensive and run for a full 12 months, without the long summer breaks common in 2-year programs in other countries. You earn the exact same credit value."
    },
    {
        question: "How much bank balance is required for the visa?",
        answer: "You must show that you have enough money to pay for your first year of tuition fees, plus living costs for up to 9 months. If studying in London, you need £1,334 per month (total £12,006). If studying outside London, you need £1,023 per month (total £9,207). This money must have been held in your bank account for 28 consecutive days."
    },
    {
        question: "Can I bring dependents on a UK student visa?",
        answer: "As of January 2024, the rules changed. Generally, you can only bring dependents if you are studying a PhD, other doctoral qualification, or a research-based higher degree. Taught master's and undergraduate students are no longer permitted to bring dependents."
    }
];

const UK = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Study in UK - Wow Global Studies" 
                description="One-Year Master's Programs and Centuries of Academic Prestige. Navigate the Student visa process and the 2-year Graduate Route with expert guidance."
            />

            {/* 1. Hero Section */}
            <div 
                className="relative pt-[150px] pb-[80px] lg:pt-[210px] lg:pb-[140px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] w-full relative z-10 flex flex-col items-center text-center">
                    
                    <h1 className="font-sans font-bold text-[40px] md:text-[60px] leading-[1.1] text-white tracking-[-1.5px] mb-6 max-w-[900px]">
                        One-Year Master's Programs. <br className="hidden md:block"/>
                        <span className="text-primary-light text-primary">Centuries of Academic Prestige.</span>
                    </h1>
                    
                    <p className="text-[16px] md:text-[20px] leading-[1.65] text-white/90 mb-10 max-w-[700px] font-medium">
                        Renowned for its rigorous, intensive 1-year master's programs and the highly coveted 2-year Graduate Route work visa, the UK offers a faster, often more affordable route to a world-class degree.
                    </p>
                    
                    <Link to="/contact">
                        <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 h-auto">
                            Check My UK Eligibility
                        </Button>
                    </Link>
                </div>
            </div>

            {/* 2. Cost & Visa Snapshot (Compact Strip) */}
            <div className="relative z-20 max-w-[1000px] mx-auto px-[20px] -mt-[40px] md:-mt-[60px] mb-16">
                <div className="bg-white rounded-2xl shadow-xl border border-[#f0eaf2] p-4 md:p-8 flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-[#f0eaf2]">
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-green-100 text-green-600 p-3 rounded-xl"><Banknote size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Avg. Tuition</div>
                            <div className="text-[16px] font-bold text-[#161616]">£15K - £25K/yr</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><FileCheck size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Visa Type</div>
                            <div className="text-[16px] font-bold text-[#161616]">Student Visa</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Briefcase size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Post-Study Work</div>
                            <div className="text-[16px] font-bold text-[#161616]">2 yrs (Graduate Route)</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            Studying in the UK is a masterclass in efficiency. Unlike North American destinations where a master's degree typically takes two years, the UK's intensive 1-year model significantly reduces your overall tuition and living expenses, while getting you into the workforce a year earlier. Upon graduation, the Graduate Route visa allows you to stay and work in the UK for 2 years (or 3 years for PhD graduates) without needing a sponsor, giving you a massive head start in your global career. The Student visa process is point-based and transparent, largely hinging on your CAS (Confirmation of Acceptance for Studies) and financial documentation.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <GraduationCap size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                1-Year Master's = Lower Total Cost
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We help you capitalize on the UK's intensive 1-year master's model, saving you a full year of living expenses and tuition compared to 2-year programs elsewhere.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Map size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Graduate Route Visa Planning
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We structure your applications to ensure you qualify for the 2-year post-study work visa, giving you ample time to secure sponsored employment.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Landmark size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Russell Group University Shortlisting
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                From Oxford and Cambridge to Manchester and KCL, we have the expertise to help you build a highly competitive application for the UK's elite Russell Group institutions.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 4. FAQ */}
                <FAQ data={ukFaqs} />
            </div>
        </div>
    );
};

export default UK;
