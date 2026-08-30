import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Keyboard, Map, Mic, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const toeflFaqs = [
    {
        question: "How is TOEFL different from IELTS?",
        answer: "While both test the same four skills, TOEFL is exclusively computer-based (including speaking into a microphone, rather than to a human examiner). TOEFL also features 'integrated tasks', such as reading a passage, listening to a lecture on it, and then writing an essay combining both sources."
    },
    {
        question: "Is TOEFL accepted for UK/Canada universities too?",
        answer: "Yes. While TOEFL is most strongly associated with US universities, it is widely accepted by 11,000+ universities across 150 countries, including almost all major institutions in the UK, Canada, Australia, and New Zealand."
    },
    {
        question: "Do I need strong typing skills for this test?",
        answer: "You don't need to be a professional typist, but since the entire writing section must be typed (no paper option), slow typing can hurt your score by limiting the length and detail of your essays. Our coaching includes practice to help you type comfortably under time pressure."
    }
];

const TOEFL = () => {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!sessionStorage.getItem('siteStartTime')) {
            sessionStorage.setItem('siteStartTime', Date.now().toString());
        }

        const updateTimer = () => {
            const startTime = parseInt(sessionStorage.getItem('siteStartTime') || Date.now().toString());
            setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="TOEFL-iBT Coaching - Wow Global Studies" description="The Other Major English Test That Is Accepted Almost Everywhere IELTS Is. Master the computer-based format and integrated tasks." url="/coaching/toefl-ibt" />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[26px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                The Other Major English Test, <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Accepted Almost Everywhere IELTS Is.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[550px] mx-auto md:mx-0">
                                While TOEFL tests the same core language skills as IELTS, the format couldn't be more different. It's entirely computer-based, heavily features integrated tasks, and uses a completely different scoring rubric. Your prep strategy needs to adapt accordingly.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book a Free TOEFL Demo
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Desktop Computer/Test Mockup Visual */}
                        <div className="flex-1 w-full max-w-[500px] relative z-10 mt-8 md:mt-0">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100 rounded-full blur-[50px] transition-all duration-700"></div>
                            
                            {/* Desktop Monitor Base */}
                            <div className="relative mx-auto w-[340px] md:w-[420px] flex flex-col items-center transform hover:scale-105 transition-transform duration-500 group">
                                {/* Monitor Screen */}
                                <div className="w-full h-[220px] md:h-[260px] bg-[#161616] rounded-xl shadow-2xl p-2 md:p-2.5 border-b-[6px] border-[#333] relative z-20">
                                    <div className="w-full h-full bg-[#faf8fb] rounded-lg overflow-hidden relative flex flex-col items-center justify-center border-[3px] border-[#161616]">
                                        
                                        {/* Dynamic Timer */}
                                        <div className="absolute top-3 right-4 text-[11px] font-bold text-[#666] flex items-center gap-1.5 bg-white/80 py-1 px-2 rounded-md shadow-sm border border-[#e0e0e0]">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> 
                                            {formatTime(elapsedSeconds)} remaining
                                        </div>
                                        
                                        <div className="flex gap-6 items-center mb-6 mt-4">
                                            <div className="bg-purple-100 text-purple-600 p-3.5 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                                <Headphones size={26} strokeWidth={2} />
                                            </div>
                                            <div className="bg-primary/10 text-primary p-3.5 rounded-full shadow-sm group-hover:scale-110 transition-transform animate-pulse">
                                                <Mic size={26} strokeWidth={2} />
                                            </div>
                                        </div>
                                        
                                        <div className="text-center px-4 w-full">
                                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#f0eaf2] w-[85%] mx-auto group-hover:border-primary/20 transition-colors">
                                                <div className="h-2.5 bg-[#f0eaf2] rounded-full w-3/4 mx-auto mb-2.5"></div>
                                                <div className="h-2.5 bg-[#f0eaf2] rounded-full w-full mx-auto mb-2.5"></div>
                                                <div className="h-2.5 bg-[#f0eaf2] rounded-full w-5/6 mx-auto"></div>
                                            </div>
                                            <div className="text-[#161616] font-bold text-[14px] md:text-[16px] mt-4">Section 2: Integrated Speaking</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Monitor Stand */}
                                <div className="w-12 md:w-16 h-10 bg-[#d5d5d5] border-x-4 border-[#c5c5c5] relative z-10 -mt-1 shadow-inner"></div>
                                <div className="w-32 md:w-40 h-3 md:h-4 bg-[#ccc] rounded-t-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] relative z-10 border-b border-[#b5b5b5]"></div>
                                
                                {/* Keyboard abstract */}
                                <div className="w-[280px] md:w-[320px] h-[30px] md:h-[34px] bg-[#f5f5f5] rounded-xl border-2 border-[#e5e5e5] shadow-md mt-6 flex justify-between items-center px-3 md:px-4 z-20 group-hover:-translate-y-1 transition-transform cursor-default">
                                    <div className="flex gap-1.5 md:gap-2">
                                        <div className="w-4 md:w-5 h-4 bg-[#e5e5e5] rounded-sm shadow-sm border border-[#d5d5d5]"></div>
                                        <div className="w-4 md:w-5 h-4 bg-[#e5e5e5] rounded-sm shadow-sm border border-[#d5d5d5]"></div>
                                        <div className="w-4 md:w-5 h-4 bg-[#e5e5e5] rounded-sm shadow-sm border border-[#d5d5d5]"></div>
                                    </div>
                                    <div className="w-32 md:w-40 h-4 bg-[#e5e5e5] rounded-sm shadow-inner border border-[#d5d5d5] mx-auto"></div>
                                    <div className="flex gap-1.5 md:gap-2">
                                        <div className="w-4 md:w-5 h-4 bg-[#e5e5e5] rounded-sm shadow-sm border border-[#d5d5d5]"></div>
                                        <div className="w-4 md:w-5 h-4 bg-[#e5e5e5] rounded-sm shadow-sm border border-[#d5d5d5]"></div>
                                        <div className="w-8 md:w-10 h-4 bg-primary/20 rounded-sm border border-primary/30 shadow-sm"></div>
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
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            TOEFL challenges you on Reading, Listening, Speaking, and Writing entirely done via a computer interface. What trips most students up is the "Integrated Task" format, where you might have to read a passage, listen to an audio lecture, and then type a response comparing the two. You aren't just learning English; you're learning how to multitask under pressure.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Keyboard size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Typing Speed & Integrated-Task Practice
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Master taking audio notes and typing extended essays simultaneously without losing focus.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Map size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                US University Score Requirement Guidance
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We tailor your coaching intensity based on whether you need a baseline 80 or a competitive 100+ for elite US programs.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Monitor size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Full Computer-Based Mock Simulations
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Get used to the exact on-screen timer, reading layout, and microphone recording mechanics before test day.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={toeflFaqs} />
            </div>
        </div>
    );
};

export default TOEFL;
