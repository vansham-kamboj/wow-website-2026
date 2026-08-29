import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic, CheckSquare, Pencil, Target } from 'lucide-react';
import { buttonVariants, Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';
import heroVideo from '@/assets/videos/hero video.mp4';

const ieltsFaqs = [
    {
        question: "What's the difference between Academic and General IELTS?",
        answer: "IELTS Academic is for students applying to universities abroad. IELTS General Training is primarily for professionals migrating for work or PR. While Listening and Speaking are identical, the Reading and Writing modules differ significantly."
    },
    {
        question: "How many weeks does the course take?",
        answer: "Our standard comprehensive IELTS course runs for 6 weeks, covering all four modules in depth. We also offer 2-week fast-track crash courses if your test date is approaching quickly."
    },
    {
        question: "Do you offer speaking practice one-on-one?",
        answer: "Yes, our speaking sessions are conducted one-on-one with certified trainers. We simulate real test conditions and provide immediate feedback on pronunciation, lexical resource, and fluency."
    }
];

const IELTS = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="IELTS Coaching - Wow Global Studies" description="One Test, Two Paths. We Prep You for Either. Expert coaching for both IELTS Academic and General Training." url="/coaching/ielts" />

            {/* 1. Hero + Video Section */}
            <div className="pt-[130px] lg:pt-[150px] bg-gradient-to-b from-[#faf8fb] to-white relative overflow-hidden">
                
                {/* Top Area: Heading on left, Button on right */}
                <section className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center px-[20px] lg:px-[60px] pb-[40px] gap-[30px] max-w-[1400px] mx-auto">
                    
                    {/* Left Side: Heading & Text */}
                    <div className="flex flex-col gap-[14px] flex-1">
                        
                        <h1 className="font-sans font-bold text-[36px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] m-0 max-w-[800px]">
                            One Test, Two Paths<br />
                            <span className="text-primary font-medium">We Prep You for Either.</span>
                        </h1>
                        <p className="text-[15px] leading-[1.65] text-[#767676] max-w-[650px] m-0 mt-[4px]">
                            Academic or General Training? The modules change, and so does the strategy. Most students don't know which one they need until we tell them. We align your preparation exactly with your migration or study goals.
                        </p>
                    </div>
                    
                    {/* Right Side: Button */}
                    <div className="flex-none w-full lg:w-auto mt-[10px] lg:mt-0">
                        <Link to="/contact">
                            <button className={buttonVariants({
                                variant: "custom",
                                className: "bg-transparent border-2 !border-primary text-primary hover:bg-primary hover:text-white px-[20px] py-[14px] lg:px-[32px] lg:py-[18px] rounded-[8px] font-bold text-[14px] lg:text-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-auto w-full lg:w-auto text-center justify-center"
                            })}>
                                Book a Free IELTS Demo
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
                            className="w-full block aspect-[16/9] lg:aspect-[4/1] object-cover opacity-90 relative z-0" 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        >
                            <source src={heroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Stats Overlay directly on video */}
                        <div className="absolute bottom-0 left-0 w-full px-[10px] py-[20px] lg:px-[60px] lg:py-[40px] flex flex-row justify-between items-center z-20">
                            
                            <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">7.5+</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Avg Band<br className="block lg:hidden" />Score</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">4</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Modules<br className="block lg:hidden" />Covered</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center">
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">Weekly</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Mock<br className="block lg:hidden" />Tests</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24 pt-16">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            The IELTS exam tests you across four strict modules: <strong>Listening, Reading, Writing, and Speaking</strong>. Our coaching is systematically split across these modules. We teach you how to skim long Reading passages, structure high-scoring Writing tasks, catch accents in Listening, and speak with confidence in front of a live examiner.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-14 h-14 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Mic size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-3 leading-[1.3]">
                                Separate Speaking Practice with Native-Level Trainers
                            </h3>
                        </Card>
                        
                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-14 h-14 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <CheckSquare size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-3 leading-[1.3]">
                                Weekly Full-Length Mock Tests
                            </h3>
                        </Card>

                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-14 h-14 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Pencil size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-3 leading-[1.3]">
                                Writing Task Evaluation with Written Feedback
                            </h3>
                        </Card>

                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-14 h-14 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Target size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-3 leading-[1.3]">
                                Academic vs. General Track Guidance from Day One
                            </h3>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={ieltsFaqs} />
            </div>
        </div>
    );
};

export default IELTS;
