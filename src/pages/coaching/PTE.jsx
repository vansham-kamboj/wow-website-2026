import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Repeat, Zap } from 'lucide-react';
import { buttonVariants, Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';
import heroVideo from '@/assets/videos/hero video.mp4';

const pteFaqs = [
    {
        question: "How is PTE different from IELTS?",
        answer: "PTE is entirely computer-based and scored by AI, making it completely objective. While IELTS evaluates natural language use, PTE evaluates your ability to adhere to specific structural patterns. Many students find PTE easier to 'crack' with the right templates."
    },
    {
        question: "How fast will I get my results?",
        answer: "One of the biggest advantages of PTE is speed. Results are typically available within 48 hours of taking the test, making it ideal for students with tight application deadlines."
    },
    {
        question: "Can I retake the test if I don't score well the first time?",
        answer: "Yes, you can book another PTE Academic test as soon as you receive your scores from the previous one. However, our goal is to ensure you hit your target score on the first attempt."
    }
];

const PTE = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="PTE Coaching - Wow Global Studies" 
                description="Fast, AI-Scored, and Entirely Coachable. Get your PTE results in 48 hours with our pattern-based training."
            />

            {/* 1. Hero + Video Section */}
            <div className="pt-[130px] min-[820px]:pt-[150px] bg-gradient-to-b from-[#faf8fb] to-white relative overflow-hidden">
                
                {/* Top Area: Heading on left, Button on right */}
                <section className="relative z-10 flex flex-col min-[820px]:flex-row justify-between items-start min-[820px]:items-center px-[20px] min-[820px]:px-[60px] pb-[40px] gap-[30px] max-w-[1400px] mx-auto">
                    
                    {/* Left Side: Heading & Text */}
                    <div className="flex flex-col gap-[14px] flex-1">
                        
                        <h1 className="font-sans font-bold text-[36px] min-[820px]:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] m-0 max-w-[800px]">
                            Fast, AI-Scored, and <br className="hidden md:block"/>
                            <span className="text-primary font-medium">Entirely Coachable.</span>
                        </h1>
                        <p className="text-[15px] leading-[1.65] text-[#767676] max-w-[650px] m-0 mt-[4px]">
                            With results in 48 hours and a purely pattern-based scoring algorithm, PTE isn't just an English test—it's a system. The right coaching can move your score significantly by teaching you exactly what the AI wants to hear.
                        </p>
                    </div>
                    
                    {/* Right Side: Button */}
                    <div className="flex-none w-full min-[820px]:w-auto mt-[10px] min-[820px]:mt-0">
                        <Link to="/contact">
                            <button className={buttonVariants({
                                variant: "custom",
                                className: "bg-transparent border-2 !border-primary text-primary hover:bg-primary hover:text-white px-[20px] py-[14px] min-[820px]:px-[32px] min-[820px]:py-[18px] rounded-[8px] font-bold text-[14px] min-[820px]:text-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-auto w-full min-[820px]:w-auto text-center justify-center"
                            })}>
                                Book a Free PTE Demo
                            </button>
                        </Link>
                    </div>

                </section>

                {/* Video Area with Stats Overlay */}
                <div className="w-full relative">
                    
                    {/* Video Container */}
                    <div className="relative w-full overflow-hidden bg-[#161616]">
                        
                        {/* Subtle dark overlay */}
                        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

                        <video 
                            className="w-full block aspect-[16/9] min-[820px]:aspect-[4/1] object-cover opacity-90 relative z-0" 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        >
                            <source src={heroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Stats Overlay directly on video (3 stats instead of 4) */}
                        <div className="absolute bottom-0 left-0 w-full px-[10px] py-[20px] min-[820px]:px-[60px] min-[820px]:py-[40px] flex flex-row justify-between items-center z-20">
                            
                            <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                                <span className="block font-sans font-light text-[14px] min-[820px]:text-[56px] text-white leading-none mb-[2px] min-[820px]:mb-[8px] tracking-tight">48 Hrs</span>
                                <span className="block text-[7px] min-[820px]:text-[13px] text-white/90 font-medium uppercase tracking-widest min-[820px]:tracking-[0.5px]">Avg Results<br className="block min-[820px]:hidden" />Time</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                                <span className="block font-sans font-light text-[14px] min-[820px]:text-[56px] text-white leading-none mb-[2px] min-[820px]:mb-[8px] tracking-tight">15+</span>
                                <span className="block text-[7px] min-[820px]:text-[13px] text-white/90 font-medium uppercase tracking-widest min-[820px]:tracking-[0.5px]">Avg Score<br className="block min-[820px]:hidden" />Jump</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center">
                                <span className="block font-sans font-light text-[14px] min-[820px]:text-[56px] text-white leading-none mb-[2px] min-[820px]:mb-[8px] tracking-tight">AI</span>
                                <span className="block text-[7px] min-[820px]:text-[13px] text-white/90 font-medium uppercase tracking-widest min-[820px]:tracking-[0.5px]">Pattern-Based<br className="block min-[820px]:hidden" />Training</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] pb-16 min-[820px]:pb-24 pt-16">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            Unlike traditional exams evaluated by humans, the Pearson Test of English (PTE) is scored by a highly advanced AI. This means human nuance matters less than hitting the exact structural, phonetic, and pacing triggers the algorithm looks for. We teach you template-based answering strategies that practically guarantee high marks when executed correctly.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <Bot size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                AI-Scoring Pattern Training
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Master the exact keywords, pause durations, and templates the AI scoring engine rewards the most.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <Repeat size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Repeat Question Bank Practice
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                PTE frequently recycles questions. Train extensively on high-frequency questions from recent global exams.
                            </p>
                        </Card>

                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <Zap size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Fastest Turnaround Coaching Batches (2-3 Weeks)
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Because it's template-driven, you can prep faster. Our intensive batches get you exam-ready in half a month.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={pteFaqs} />
            </div>
        </div>
    );
};

export default PTE;
