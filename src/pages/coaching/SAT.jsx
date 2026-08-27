import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Monitor, Award, Heart, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const satFaqs = [
    {
        question: "Is the SAT now fully digital?",
        answer: "Yes, the College Board has fully transitioned to the Digital SAT format internationally. It is shorter (about 2 hours instead of 3), adaptive by module, and taken on a laptop or tablet using the Bluebook app."
    },
    {
        question: "How does SAT affect scholarship chances?",
        answer: "Many US universities tie merit-based scholarships directly to SAT score brackets. A jump of just 50-100 points can sometimes mean thousands of dollars in tuition discounts over a 4-year degree."
    },
    {
        question: "What age/grade should I start SAT prep?",
        answer: "Most students begin prep in 10th or 11th grade. Starting early gives you time to take the test multiple times, reduces stress during college application season, and allows you to focus on your school grades in your final year."
    }
];

const SAT = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="SAT Coaching - Wow Global Studies" 
                description="Your First Big Step Toward a US Degree. Prepare for the digital SAT with full-length mocks and scholarship-focused score planning."
            />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 min-[820px]:pt-[170px] min-[820px]:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[40px] md:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Your First Big Step <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Toward a US Degree.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[550px] mx-auto md:mx-0">
                                The SAT isn't just about university admission; it's heavily tied to merit-based scholarships. Early, structured preparation pays off twice—securing your seat and lowering your tuition fees.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book a Free SAT Demo
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Encouraging Student/Academic Visual */}
                        <div className="flex-1 w-full max-w-[500px] relative z-10">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-orange-100 rounded-full blur-[60px]"></div>
                            
                            {/* Main Illustration Container */}
                            <div className="relative mx-auto w-[320px] md:w-[420px] h-[340px] flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                
                                {/* Background Decorative Elements */}
                                <div className="absolute top-[10%] left-[10%] text-yellow-400 animate-pulse"><Star size={32} fill="currentColor" /></div>
                                <div className="absolute bottom-[20%] right-[10%] text-primary/40"><Heart size={40} fill="currentColor" /></div>
                                
                                {/* Central Composition */}
                                <div className="relative z-10 w-[240px] md:w-[280px]">
                                    {/* Book Stack */}
                                    <div className="absolute -bottom-4 -left-8 w-full h-[60px] flex flex-col justify-end items-center z-10">
                                        <div className="w-[180px] h-[14px] bg-blue-100 rounded-md border border-blue-200 mb-1"></div>
                                        <div className="w-[190px] h-[16px] bg-green-100 rounded-md border border-green-200 mb-1"></div>
                                        <div className="w-[200px] h-[20px] bg-primary/20 rounded-md border border-primary/30"></div>
                                    </div>
                                    
                                    {/* Student/Laptop abstraction */}
                                    <div className="bg-white rounded-[24px] shadow-2xl p-6 border border-[#f0eaf2] relative z-20 flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full bg-orange-50 border-4 border-white shadow-inner flex items-center justify-center mb-4">
                                            <GraduationCap size={40} className="text-orange-400" />
                                        </div>
                                        
                                        <div className="text-center mb-6">
                                            <div className="text-[14px] font-bold text-[#161616] mb-1">Goal: Top US University</div>
                                            <div className="text-[12px] text-[#888] font-medium">Digital SAT Prep Track</div>
                                        </div>
                                        
                                        {/* Progress Indicator */}
                                        <div className="w-full bg-[#faf8fb] rounded-xl p-3">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[11px] font-bold text-[#666]">Scholarship Target</span>
                                                <span className="text-[11px] font-bold text-primary">1450+</span>
                                            </div>
                                            <div className="h-2 bg-[#f0eaf2] rounded-full w-full">
                                                <div className="h-full bg-primary rounded-full w-[75%] relative">
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating Badge */}
                                <div className="absolute top-[20%] -right-4 bg-white p-3 rounded-xl shadow-lg border border-[#f0eaf2] flex items-center gap-2 animate-bounce">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    <span className="font-bold text-[12px] text-[#161616]">Math Foundational</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] pb-16 min-[820px]:pb-24">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            The Digital SAT is streamlined into two main areas: Evidence-Based Reading & Writing, and Math. While the content tests high school concepts, the adaptive, fast-paced format requires significant practice. We provide an encouraging, low-stress coaching environment that builds confidence, eliminates test anxiety, and systematically targets score brackets that unlock major scholarships.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Monitor size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Full-Length Digital SAT Mock Tests
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Get completely comfortable with the Bluebook app interface and the digital adaptive format before test day.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <BookOpen size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Section-Wise Weak Area Diagnostics
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We pinpoint exactly which concepts (e.g., algebra vs. geometry) are holding your score back and fix them.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Award size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Scholarship-Focused Score Target Planning
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We don't just aim for "good." We map your target score directly to the scholarship requirements of your dream schools.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={satFaqs} />
            </div>
        </div>
    );
};

export default SAT;
