import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessagesSquare, Compass, CheckCircle2, DollarSign, FileCheck, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const usaFaqs = [
    {
        question: "How hard is it to get a US student visa?",
        answer: "The F-1 visa process is interview-based and heavily focuses on your intent to return home after studying, as well as your financial capacity. While the refusal rate can be intimidating, a well-prepared candidate with genuine academic goals and clear documentation has a very high chance of approval. We prep you specifically for this interview."
    },
    {
        question: "Can I work while studying in the USA?",
        answer: "Yes, F-1 students can work on-campus up to 20 hours per week during academic terms and full-time during breaks. For off-campus work related to your field of study, you must apply for CPT (Curricular Practical Training) or wait until you qualify for OPT (Optional Practical Training)."
    },
    {
        question: "What GPA/test scores do I need for a good university?",
        answer: "The US has thousands of universities across different tiers. Elite institutions (Ivy League, Top 50) demand very high GPAs (3.8+) and top percentiles in SAT/GRE. However, there are hundreds of excellent, highly-ranked state and private universities that accept moderate GPAs (3.0+) and lower test scores. We help match you to the right tier."
    }
];

const USA = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Study in USA - Wow Global Studies" 
                description="The World's Largest Higher-Education System. Navigate the F-1 visa, OPT work rights, and top-tier university admissions with our expert guidance."
            />

            {/* 1. Hero Section */}
            <div 
                className="relative pt-[150px] pb-[80px] lg:pt-[210px] lg:pb-[140px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1600&auto=format&fit=crop")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay gradient: Dark at top for text readability, fading to white at the bottom for smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] w-full relative z-10 flex flex-col items-center text-center">
                    
                    <h1 className="font-sans font-bold text-[40px] md:text-[60px] leading-[1.1] text-white tracking-[-1.5px] mb-6 max-w-[900px]">
                        The World's Largest Higher-Education System — <br className="hidden md:block"/>
                        <span className="text-primary-light text-primary">And the Most Competitive.</span>
                    </h1>
                    
                    <p className="text-[16px] md:text-[20px] leading-[1.65] text-white/90 mb-10 max-w-[700px] font-medium">
                        Home to the highest number of top-ranked universities globally and the coveted up-to-3-year STEM OPT work rights. But the rewards come with tougher admissions, higher costs, and the strict F-1 visa interview.
                    </p>
                    
                    <Link to="/contact">
                        <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 h-auto">
                            Check My USA Eligibility
                        </Button>
                    </Link>
                </div>
            </div>

            {/* 2. Cost & Visa Snapshot (Compact Strip) */}
            <div className="relative z-20 max-w-[1000px] mx-auto px-[20px] -mt-[40px] md:-mt-[60px] mb-16">
                <div className="bg-white rounded-2xl shadow-xl border border-[#f0eaf2] p-4 md:p-8 flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-[#f0eaf2]">
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-green-100 text-green-600 p-3 rounded-xl"><DollarSign size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Avg. Tuition</div>
                            <div className="text-[16px] font-bold text-[#161616]">$20K - $45K/yr</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><FileCheck size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Visa Type</div>
                            <div className="text-[16px] font-bold text-[#161616]">F-1 Student Visa</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Briefcase size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Post-Study Work</div>
                            <div className="text-[16px] font-bold text-[#161616]">Up to 3 yrs (STEM OPT)</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            Studying in the USA requires strategic planning. Choosing a STEM (Science, Technology, Engineering, Math) designated program unlocks up to 3 years of OPT (Optional Practical Training), allowing you to work and recoup costs. Business and Humanities fields are equally robust but require careful navigation of CPT during your studies to secure strong networking outcomes. Ultimately, success relies on surviving the F-1 visa interview—a process unique to the US that requires you to verbally prove your intent and financial capability to a visa officer.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <MessagesSquare size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                F-1 Visa Interview Prep Included
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We conduct rigorous mock interviews to ensure you can confidently answer questions about your funding, course choice, and home ties.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <CheckCircle2 size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                STEM OPT Extension Guidance
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We explicitly identify and shortlist universities with highly-ranked STEM-designated programs to maximize your 3-year post-study work rights.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Compass size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                University Shortlisting by Ranking & Budget Fit
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We balance elite aspirations with reality, building a safe, target, and reach portfolio that fits both your profile and your finances.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 4. FAQ */}
                <FAQ data={usaFaqs} />
            </div>
        </div>
    );
};

export default USA;
