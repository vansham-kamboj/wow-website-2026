import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Euro, FileCheck, Briefcase, Landmark, ShieldCheck, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const germanyFaqs = [
    {
        question: "Is it true German public universities are almost free?",
        answer: "Yes! Most public universities in Germany do not charge tuition fees for international students, with the exception of institutions in the state of Baden-Württemberg (which charge around €1,500 per semester). You generally only pay a small semester contribution (approx. €150 to €350) which covers administration and a regional public transport ticket."
    },
    {
        question: "Do I need to know German to study there?",
        answer: "Not necessarily. Germany offers hundreds of English-taught master's programs, particularly in STEM and business fields. However, learning basic German is highly recommended to help you navigate daily life and significantly improve your job prospects during and after your studies."
    },
    {
        question: "What is a blocked account and how much do I need in it?",
        answer: "A blocked account (Sperrkonto) is a special bank account required to prove you have the financial resources to live in Germany for a year. As of recent regulations, you need to deposit €11,208. You can withdraw a maximum of €934 per month to cover your living expenses."
    }
];

const Germany = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="Study in Germany - Wow Global Studies" description="Low or Zero Tuition for International Students. Secure a world-class STEM degree and navigate the Blocked Account and 18-Month Job Seeker Visa with us." url="/study-in/germany" />

            {/* 1. Hero Section */}
            <div 
                className="relative pt-[150px] pb-[80px] lg:pt-[210px] lg:pb-[140px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] w-full relative z-10 flex flex-col items-center text-center">
                    
                    <h1 className="font-sans font-bold text-[40px] md:text-[60px] leading-[1.1] text-white tracking-[-1.5px] mb-6 max-w-[900px]">
                        Low or Zero Tuition<br className="hidden md:block"/>
                        <span className="text-primary-light text-primary">Even for International Students.</span>
                    </h1>
                    
                    <p className="text-[16px] md:text-[20px] leading-[1.65] text-white/90 mb-10 max-w-[700px] font-medium">
                        With most public universities charging little to no tuition, Germany is one of the most affordable serious study-abroad options in the world, especially for STEM fields.
                    </p>
                    
                    <Link to="/contact">
                        <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 h-auto">
                            Check My Germany Eligibility
                        </Button>
                    </Link>
                </div>
            </div>

            {/* 2. Cost & Visa Snapshot (Compact Strip) */}
            <div className="relative z-20 max-w-[1000px] mx-auto px-[20px] -mt-[40px] md:-mt-[60px] mb-16">
                <div className="bg-white rounded-2xl shadow-xl border border-[#f0eaf2] p-4 md:p-8 flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-[#f0eaf2]">
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-green-100 text-green-600 p-3 rounded-xl"><Euro size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Avg. Tuition</div>
                            <div className="text-[16px] font-bold text-[#161616]">€0 - €3K/yr (public)</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><FileCheck size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Visa Type</div>
                            <div className="text-[16px] font-bold text-[#161616]">National (Type D)</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Briefcase size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Post-Study Work</div>
                            <div className="text-[16px] font-bold text-[#161616]">18-Month Job Seeker Visa</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            Germany is the industrial and technological heart of Europe, making it an unparalleled destination for engineering, tech, and business students. While the prospect of zero-tuition public universities is highly attractive, the admissions process is strict and grade-focused. Securing a National (Type D) student visa requires you to open and fund a 'Blocked Account' to guarantee your living expenses. After graduation, Germany offers a generous 18-month Job Seeker Visa, allowing you ample time to secure employment related to your field and transition to an EU Blue Card or standard residence permit.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Landmark size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Zero/Low Tuition Public University Shortlisting
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We help you navigate the strict entry requirements to secure placements in Germany's highly coveted, tuition-free public universities.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Blocked Account Setup Guidance
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We guide you step-by-step through setting up your Sperrkonto (Blocked Account) to ensure your Type D visa application is flawless.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Route size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                18-Month Job Seeker Visa Planning
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We structure your study plan to maximize your chances of securing full-time employment during the 1.5-year post-graduation window.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 4. FAQ */}
                <FAQ data={germanyFaqs} />
            </div>
        </div>
    );
};

export default Germany;
