import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, LineChart, FileText, GraduationCap, Wallet, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const assessmentFaqs = [
    {
        question: "How accurate is the assessment?",
        answer: "Our assessments are based on real-time embassy data and thousands of past cases. While no one can guarantee a visa, our evaluation provides a highly realistic probability based on current immigration trends."
    },
    {
        question: "Will you tell me honestly if I don't qualify?",
        answer: "Yes. We pride ourselves on transparency. If your profile isn't strong enough right now, we won't waste your money. Instead, we'll give you a concrete roadmap on how to improve your eligibility before applying."
    },
    {
        question: "Does a past visa rejection affect this?",
        answer: "A past refusal is a critical piece of information, but it doesn't always mean a permanent denial. Our assessment factors in the refusal reasons to determine if the weaknesses can be addressed for a successful reapplication."
    }
];

const VisaAssessment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Free Visa Assessment - Wow Global Studies" 
                description="Get an honest, free assessment of your visa chances before you spend time and money. Real reports by human counsellors, not bot quizzes."
            />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Know If This Is <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Your Story to Tell.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[500px] mx-auto md:mx-0">
                                Before you spend a rupee or a month of your time, get an honest, free assessment of your visa chances.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Get My Free Assessment
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Visual Mockup */}
                        <div className="flex-1 w-full max-w-[450px] relative z-10">
                            {/* Decorative blur behind the card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[40px]"></div>
                            
                            {/* The Card Mockup */}
                            <div className="bg-white rounded-[24px] shadow-[0_30px_80px_rgba(147,51,234,0.12)] border border-[#f0eaf2] p-[24px] lg:p-[32px] relative z-10 transform transition-transform hover:-translate-y-2 duration-500 overflow-hidden text-left">
                                
                                {/* Background accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>

                                {/* Report Header */}
                                <div className="flex items-center justify-between mb-[24px] relative z-10 border-b border-[#f0eaf2] pb-[16px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#f8f5fa] flex items-center justify-center text-primary font-bold text-[14px]">
                                            AR
                                        </div>
                                        <div>
                                            <div className="text-[12px] text-[#888] font-medium uppercase tracking-wider">Candidate ID</div>
                                            <div className="font-bold text-[#161616] text-[15px]">#WGS-8291</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-[#eefaf2] text-[#22c55e] px-3 py-1.5 rounded-full font-bold text-[12px]">
                                        <CheckCircle2 size={14} />
                                        <span>Verified</span>
                                    </div>
                                </div>
                                
                                {/* Main Score */}
                                <div className="flex flex-col items-center justify-center mb-[24px] relative z-10">
                                    {/* Circular Progress Ring */}
                                    <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-4">
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[16px] animate-pulse"></div>
                                        
                                        <svg className="w-full h-full transform -rotate-90 relative z-10 drop-shadow-md" viewBox="0 0 100 100">
                                            {/* Background circle */}
                                            <circle cx="50" cy="50" r="42" stroke="#f8f5fa" strokeWidth="8" fill="none" />
                                            {/* Progress circle */}
                                            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" fill="none" className="text-primary transition-all duration-1000 ease-out" strokeDasharray="264" strokeDashoffset="37" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute flex flex-col items-center z-20">
                                            <span className="text-[36px] font-black text-[#161616] leading-none tracking-tight mt-[4px]">86<span className="text-[18px] text-[#888] font-bold">%</span></span>
                                            <span className="text-[10px] font-bold text-primary tracking-widest uppercase mt-[2px]">Approval Odds</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-[13px] text-[#666] font-medium text-center">
                                        Profile match is <span className="text-[#161616] font-bold">Strong</span> based on current embassy trends.
                                    </p>
                                </div>
                                
                                {/* Detailed Metrics */}
                                <div className="space-y-[16px] relative z-10 w-full">
                                    {/* Metric 1 */}
                                    <div>
                                        <div className="flex justify-between items-center text-[13px] font-bold mb-2">
                                            <div className="flex items-center gap-2 text-[#444]">
                                                <GraduationCap size={16} className="text-[#888]" />
                                                <span>Academic Record</span>
                                            </div>
                                            <span className="text-primary font-bold">High</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-[#f8f5fa] rounded-full overflow-hidden shadow-inner">
                                            <div className="w-[90%] h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Metric 2 */}
                                    <div>
                                        <div className="flex justify-between items-center text-[13px] font-bold mb-2">
                                            <div className="flex items-center gap-2 text-[#444]">
                                                <Wallet size={16} className="text-[#888]" />
                                                <span>Financial Standing</span>
                                            </div>
                                            <span className="text-primary font-bold">Medium</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-[#f8f5fa] rounded-full overflow-hidden shadow-inner">
                                            <div className="w-[75%] h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Metric 3 */}
                                    <div>
                                        <div className="flex justify-between items-center text-[13px] font-bold mb-2">
                                            <div className="flex items-center gap-2 text-[#444]">
                                                <ShieldCheck size={16} className="text-[#888]" />
                                                <span>Country Approval Trend</span>
                                            </div>
                                            <span className="text-primary font-bold">Very High</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-[#f8f5fa] rounded-full overflow-hidden shadow-inner">
                                            <div className="w-[95%] h-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            We evaluate the four pillars of a successful visa application: your academic score, financial standing, your target country's current visa approval trends, and any past refusal history. This comprehensive check gives you a clear picture of exactly where you stand.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <UserCheck size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Assessment by a Human Counsellor, Not a Bot Quiz
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Algorithms can't read context. An experienced counsellor reviews your profile manually to understand the nuances of your story.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <LineChart size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Country-Specific Approval Trend Data
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Policies change weekly. We factor in live embassy approval rates for your destination country to gauge true probability.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <FileText size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Written Report You <br className="hidden lg:block"/> Can Keep
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We don't just talk. You receive a tangible, written evaluation of your strengths and weaknesses to guide your next steps.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={assessmentFaqs} />
            </div>
        </div>
    );
};

export default VisaAssessment;
