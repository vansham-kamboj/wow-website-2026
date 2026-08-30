import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MonitorPlay, Video, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const duolingoFaqs = [
    {
        question: "Is Duolingo English Test accepted by universities?",
        answer: "Yes, it is now accepted by over 4,000 institutions globally, including top universities in the US, UK, Canada, and Australia. However, we always recommend checking your specific university's entry requirements before booking the test."
    },
    {
        question: "How is it different from IELTS/TOEFL?",
        answer: "It's much shorter (around 1 hour), adaptive (meaning it gets harder or easier based on your previous answers), and you can take it from home. It also tests reading, writing, listening, and speaking in a mixed, rapid-fire format rather than separate modules."
    },
    {
        question: "What tech setup do I need on test day?",
        answer: "You need a quiet, well-lit room, a computer with a reliable internet connection, a front-facing webcam, a microphone, and speakers. Headphones are strictly prohibited. We'll guide you through the full tech checklist during our coaching."
    }
];

const Duolingo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <style>{`
                @keyframes progress-loop {
                    0% { width: 0%; }
                    15% { width: 0%; }
                    85% { width: 100%; }
                    100% { width: 100%; }
                }
                .animate-progress-loop {
                    animation: progress-loop 4s ease-in-out infinite;
                }
            `}</style>
            <SEO title="Duolingo English Test Coaching - Wow Global Studies" description="The Test You Take From Your Room That You Still Need to Prepare For. Affordable, fast, and fully proctored via webcam." url="/coaching/duolingo" />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[26px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                The Test You Take From Your Room, <br className="hidden md:block"/>
                                <span className="text-primary font-medium">And Still Need to Prepare For.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[550px] mx-auto md:mx-0">
                                It's fast, affordable, and increasingly accepted by top universities. But don't let the casual vibe fool you. The adaptive, single-sitting format and strict webcam proctoring frequently trip up unprepared students.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book a Free Demo
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Casual Laptop/Webcam Mockup Visual */}
                        <div className="flex-1 w-full max-w-[500px] relative z-10 group mt-8 md:mt-0">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[40px] transition-all duration-700 group-hover:bg-primary/20 group-hover:scale-110"></div>
                            
                            {/* Laptop Container (Scales as one unit) */}
                            <div className="relative transform group-hover:scale-105 transition-transform duration-500 ease-out flex flex-col items-center">
                                
                                {/* Laptop Screen Area */}
                                <div className="relative w-[320px] md:w-[420px] h-[200px] md:h-[260px] bg-[#161616] rounded-t-2xl rounded-b-sm shadow-2xl p-2 md:p-2.5 border-b-[4px] border-[#333]">
                                    
                                    {/* Webcam dot */}
                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                                    
                                    {/* Screen Display */}
                                    <div className="w-full h-full bg-[#faf8fb] rounded-xl overflow-hidden relative flex flex-col items-center justify-center border-[3px] border-[#161616]">
                                        <MonitorPlay className="text-primary opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 pointer-events-none" />
                                        
                                        <div className="relative z-10 text-center w-full">
                                            <div className="bg-white rounded-xl p-4 md:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#f0eaf2] w-[85%] md:w-[70%] mx-auto">
                                                <div className="flex items-center gap-2 text-primary font-black text-sm mb-3 justify-center">
                                                    <Video size={18} /> <span className="tracking-wide">REC</span>
                                                </div>
                                                <div className="h-2 md:h-2.5 bg-[#f0eaf2] rounded-full w-full mb-3 overflow-hidden">
                                                    <div className="h-full bg-primary rounded-full relative animate-progress-loop">
                                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                                    </div>
                                                </div>
                                                <div className="text-[#888] text-[9px] md:text-[10px] uppercase font-bold tracking-wider">Adaptive Test in Progress</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Success floaty element (Positioned outside overflow-hidden) */}
                                    <div className="absolute -right-2 md:-right-8 -bottom-4 md:-bottom-6 bg-white py-2 px-3 md:py-3 md:px-5 rounded-xl md:rounded-2xl shadow-xl border border-[#f0eaf2] flex items-center gap-2 md:gap-3 transform rotate-3 z-30 group-hover:-rotate-3 group-hover:scale-110 transition-all duration-500">
                                        <div className="bg-green-100 p-1 md:p-1.5 rounded-full">
                                            <CheckCircle2 size={16} className="text-green-600 shrink-0" strokeWidth={3} />
                                        </div>
                                        <span className="font-bold text-[11px] md:text-sm text-[#161616] whitespace-nowrap">Audio Checked</span>
                                    </div>
                                </div>

                                {/* Laptop Keyboard Lip */}
                                <div className="w-[360px] md:w-[480px] h-3 md:h-4 bg-[#e5e5e5] rounded-b-2xl shadow-2xl relative z-20 border-t border-[#d5d5d5] flex justify-center">
                                    <div className="w-16 md:w-20 h-1 md:h-1.5 bg-[#c5c5c5] rounded-b-md relative top-0"></div>
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
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            The Duolingo English Test doesn't isolate reading, writing, listening, and speaking into separate 1-hour chunks. It throws rapid-fire, mixed questions at you in a single, intense 1-hour sitting. The difficulty constantly adapts based on your previous answer. With results delivered in just 48 hours, it's incredibly efficient if you've practiced the exact format.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <MonitorPlay size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Mock Tests in the Exact Test Format
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Practice with adaptive, mixed-module questions so the rapid-fire pacing feels natural on exam day.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Video size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Webcam & Tech Setup Guidance Before Test Day
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Learn how to position your camera and eyes to avoid triggering Duolingo's strict anti-cheating AI.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Zap size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Fastest Coaching Track of All 6 Tests (1-2 Weeks)
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Because the test is shorter, our coaching track is hyper-focused and highly condensed.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={duolingoFaqs} />
            </div>
        </div>
    );
};

export default Duolingo;
