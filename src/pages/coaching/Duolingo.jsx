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
            <SEO 
                title="Duolingo English Test Coaching - Wow Global Studies" 
                description="The Test You Take From Your Room — And Still Need to Prepare For. Affordable, fast, and fully proctored via webcam."
            />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                The Test You Take From Your Room — <br className="hidden md:block"/>
                                <span className="text-primary font-medium">And Still Need to Prepare For.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[550px] mx-auto md:mx-0">
                                It's fast, affordable, and increasingly accepted by top universities. But don't let the casual vibe fool you — its adaptive, single-sitting format and strict webcam proctoring frequently trip up unprepared students.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book a Free Demo
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Casual Laptop/Webcam Mockup Visual */}
                        <div className="flex-1 w-full max-w-[500px] relative z-10">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[40px]"></div>
                            
                            {/* Laptop Base */}
                            <div className="relative mx-auto w-[320px] md:w-[420px] h-[220px] md:h-[280px] bg-[#161616] rounded-t-2xl rounded-b-md shadow-2xl p-2 border-b-[8px] border-[#333] transform hover:scale-105 transition-transform duration-500">
                                {/* Webcam dot */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                                
                                {/* Screen */}
                                <div className="w-full h-full bg-[#faf8fb] rounded-xl overflow-hidden relative flex flex-col items-center justify-center border-4 border-[#161616]">
                                    <MonitorPlay size={48} className="text-primary mb-4 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40" />
                                    
                                    <div className="relative z-10 text-center px-4 w-full">
                                        <div className="bg-white rounded-lg p-4 shadow-sm border border-[#f0eaf2] max-w-[80%] mx-auto">
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2 justify-center">
                                                <Video size={16} /> REC
                                            </div>
                                            <div className="h-2 bg-[#f0eaf2] rounded-full w-full mb-2">
                                                <div className="h-full bg-primary rounded-full w-[45%]"></div>
                                            </div>
                                            <div className="text-[#888] text-[10px] uppercase font-bold tracking-wider">Adaptive Test in Progress</div>
                                        </div>
                                    </div>
                                    
                                    {/* Success floaty element */}
                                    <div className="absolute -right-4 -bottom-4 bg-white p-3 rounded-xl shadow-lg border border-[#f0eaf2] flex items-center gap-2 transform -rotate-6 animate-pulse">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                        <span className="font-bold text-xs">Audio Checked</span>
                                    </div>
                                </div>
                            </div>
                            {/* Laptop Keyboard Lip */}
                            <div className="w-[380px] md:w-[500px] h-3 bg-[#ccc] rounded-b-xl mx-auto shadow-md -ml-[30px] md:-ml-[40px] relative z-20">
                                <div className="w-16 h-1 bg-[#aaa] rounded-b-md mx-auto relative top-0"></div>
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
                            The Duolingo English Test doesn't isolate reading, writing, listening, and speaking into separate 1-hour chunks. It throws rapid-fire, mixed questions at you in a single, intense 1-hour sitting. The difficulty constantly adapts based on your previous answer. With results delivered in just 48 hours, it's incredibly efficient — provided you've practiced the exact format.
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
