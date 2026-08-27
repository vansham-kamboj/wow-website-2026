import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const interviewFaqs = [
    {
        question: "How many mock sessions do I get?",
        answer: "Typically, students go through 2-3 rigorous mock sessions, but we don't count hours. We work with you until you are confident and capable of answering unexpected questions smoothly."
    },
    {
        question: "Do you prepare for country-specific interview styles?",
        answer: "Absolutely. A US F-1 visa interview is fast-paced and aggressive, while an Australian GTE interview is highly detailed and documented. We tailor the exact questioning style to the country you are applying for."
    },
    {
        question: "What if I still get rejected after prep?",
        answer: "While we have an exceptional success rate, rejections can happen due to external quotas or unstated officer bias. If it happens, we analyze the interview immediately, formulate a strong rebuttal plan, and prep you for re-application."
    }
];

const InterviewPreparation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Visa Interview Preparation - Wow Global Studies" 
                description="We don't just prep you with questions — we train you to sound confident under real pressure. Real embassy-style mock sessions."
            />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 min-[820px]:pb-20">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px]">
                    <section className="flex flex-col gap-10 items-center text-center">
                        <div className="z-10 w-full max-w-[800px] mx-auto">
                            
                            <h1 className="font-sans font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                One Interview. A Few Minutes. <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Your Future.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[640px] mx-auto">
                                We don't just prep you with questions — we train you to sound confident under real pressure.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book a Mock Interview
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] pb-16 min-[820px]:pb-24">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            A visa interview isn't just about what you say, it's about how you say it. We conduct real, high-pressure embassy-style mock sessions. We analyze common rejection-trigger questions specific to your country, and rigorously coach your body language and communication until you project absolute credibility.
                        </p>
                    </section>
                    
                    {/* Before/After Contrast Block */}
                    <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                        {/* Without Prep (Left) */}
                        <Card className="p-8 border-2 border-[#f0eaf2] bg-white shadow-none text-center flex flex-col items-center opacity-80 transition-all hover:opacity-100">
                            <div className="inline-block bg-[#f0eaf2] text-[#666] px-5 py-1.5 rounded-full font-bold text-[13px] tracking-wider mb-8 uppercase">
                                Without Prep
                            </div>
                            
                            <ul className="space-y-6 text-left w-full">
                                <li className="flex gap-4 items-start">
                                    <XCircle size={22} className="text-[#a0a0a0] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#444] text-[16px] mb-1">Generic Answers</h4>
                                        <p className="text-[14px] text-[#777] leading-relaxed">Sounding rehearsed with answers found on Google instead of your unique story.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <XCircle size={22} className="text-[#a0a0a0] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#444] text-[16px] mb-1">Visible Nerves</h4>
                                        <p className="text-[14px] text-[#777] leading-relaxed">Fidgeting and avoiding eye contact under the intimidating embassy pressure.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <XCircle size={22} className="text-[#a0a0a0] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#444] text-[16px] mb-1">Inconsistent Story</h4>
                                        <p className="text-[14px] text-[#777] leading-relaxed">Contradicting your own application documents, triggering immediate red flags.</p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                        
                        {/* With Us (Right) */}
                        <Card className="p-8 border-2 border-primary bg-[#faf8fb] shadow-[0_20px_40px_rgba(147,51,234,0.08)] text-center flex flex-col items-center transform md:-translate-y-4 transition-all hover:-translate-y-6">
                            <div className="inline-block bg-primary text-white px-5 py-1.5 rounded-full font-bold text-[13px] tracking-wider mb-8 uppercase shadow-md">
                                With Wow Global
                            </div>
                            
                            <ul className="space-y-6 text-left w-full">
                                <li className="flex gap-4 items-start">
                                    <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#161616] text-[16px] mb-1">Rehearsed Clarity</h4>
                                        <p className="text-[14px] text-[#555] leading-relaxed">Crisp, personalized answers that highlight your academic intent and strong ties.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#161616] text-[16px] mb-1">Confident Tone</h4>
                                        <p className="text-[14px] text-[#555] leading-relaxed">Conditioned to maintain strong body language and eye contact under scrutiny.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#161616] text-[16px] mb-1">Documentation-Backed</h4>
                                        <p className="text-[14px] text-[#555] leading-relaxed">Every answer perfectly aligns with the paperwork sitting on the officer's desk.</p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={interviewFaqs} />
            </div>
        </div>
    );
};

export default InterviewPreparation;
