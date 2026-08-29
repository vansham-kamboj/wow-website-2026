import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Target, Users, BookCheck, ClipboardList, TrendingUp, MonitorPlay } from 'lucide-react';
import { buttonVariants, Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';
import heroVideo from '@/assets/videos/hero video.mp4';

const coachingFaqs = [
    {
        question: "How long is each coaching program?",
        answer: "Most of our standard coaching programs run for 4 to 8 weeks, depending on the test type and your current proficiency level. We also offer crash courses for students who need to test sooner."
    },
    {
        question: "Do you offer online classes?",
        answer: "Yes, we offer fully interactive online classes with the same certified trainers, real-time doubt clearing, and timed mock tests as our offline batches."
    },
    {
        question: "Can I switch test types mid-course?",
        answer: "While we recommend sticking to one test type for consistency, if university requirements change or you realize another test format suits you better (e.g. switching from IELTS to PTE), you can transition to the new batch."
    }
];

const CoachingLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Test Prep Coaching - Wow Global Studies" 
                description="The Score That Opens the Door. We Help You Hit It. All 6 major test types covered under one roof."
            />

            {/* 1. Hero + Video Section */}
            <div className="pt-[130px] lg:pt-[150px] bg-gradient-to-b from-[#faf8fb] to-white relative overflow-hidden">
                
                {/* Top Area: Heading on left, Button on right */}
                <section className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center px-[20px] lg:px-[60px] pb-[40px] gap-[30px] max-w-[1400px] mx-auto">
                    
                    {/* Left Side: Heading & Text */}
                    <div className="flex flex-col gap-[14px] flex-1">
                        
                        <h1 className="font-sans font-bold text-[36px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] m-0 max-w-[800px]">
                            The Score That Opens the Door<br />
                            <span className="text-primary font-medium">We Help You Hit It.</span>
                        </h1>
                        <p className="text-[15px] leading-[1.65] text-[#767676] max-w-[600px] m-0 mt-[4px]">
                            All 6 major test types covered under one roof, taught by certified trainers who know the exact patterns to secure top scores.
                        </p>
                    </div>
                    
                    {/* Right Side: Button */}
                    <div className="flex-none w-full lg:w-auto mt-[10px] lg:mt-0">
                        <Link to="/contact">
                            <button className={buttonVariants({
                                variant: "custom",
                                className: "bg-transparent border-2 !border-primary text-primary hover:bg-primary hover:text-white px-[20px] py-[14px] lg:px-[32px] lg:py-[18px] rounded-[8px] font-bold text-[14px] lg:text-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-auto w-full lg:w-auto text-center justify-center"
                            })}>
                                Book a Free Demo Class
                            </button>
                        </Link>
                    </div>

                </section>

                {/* Video Area with Stats Overlay */}
                <div className="w-full relative">
                    
                    {/* Video Container */}
                    <div className="relative w-full overflow-hidden bg-[#161616]">
                        
                        {/* Subtle dark overlay so white text reads perfectly */}
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
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">10K+</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Students<br className="block lg:hidden" />Trained</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">7.5+</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Avg Band<br className="block lg:hidden" />Score</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">6</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Test<br className="block lg:hidden" />Types</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1 text-center">
                                <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">20+</span>
                                <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Certified<br className="block lg:hidden" />Trainers</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* 2. Tests Grid */}
            <div className="bg-white py-16 lg:py-24">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="text-center mb-16">
                        <h2 className="font-sans font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#161616] tracking-[-1px] mb-4">
                            Pick Your Test, We'll Get You Ready.
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        
                        <Link to="/coaching/ielts" className="block group">
                            <Card className="p-8 border border-[#f0eaf2] flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <BookOpen size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3] group-hover:text-primary transition-colors">
                                    IELTS Academic/General
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                    The most recognized English test worldwide. We prep you for either version.
                                </p>
                                <div className="text-primary font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <span className="text-[16px]">→</span>
                                </div>
                            </Card>
                        </Link>
                        
                        <Link to="/coaching/gre" className="block group">
                            <Card className="p-8 border border-[#f0eaf2] flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Award size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3] group-hover:text-primary transition-colors">
                                    GRE
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                    Score high on the test every top grad school checks first.
                                </p>
                                <div className="text-primary font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <span className="text-[16px]">→</span>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/coaching/pte" className="block group">
                            <Card className="p-8 border border-[#f0eaf2] flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Target size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3] group-hover:text-primary transition-colors">
                                    PTE
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                    Fast, AI-scored, and entirely coachable if you know the pattern.
                                </p>
                                <div className="text-primary font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <span className="text-[16px]">→</span>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/coaching/duolingo" className="block group">
                            <Card className="p-8 border border-[#f0eaf2] flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <MonitorPlay size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3] group-hover:text-primary transition-colors">
                                    Duolingo English Test
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                    The test you can take from your room that you still need to prepare for.
                                </p>
                                <div className="text-primary font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <span className="text-[16px]">→</span>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/coaching/sat" className="block group">
                            <Card className="p-8 border border-[#f0eaf2] flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <BookCheck size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3] group-hover:text-primary transition-colors">
                                    SAT
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                    Your first big academic milestone for US admissions.
                                </p>
                                <div className="text-primary font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <span className="text-[16px]">→</span>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/coaching/toefl" className="block group">
                            <Card className="p-8 border border-[#f0eaf2] flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <ClipboardList size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3] group-hover:text-primary transition-colors">
                                    TOEFL-iBT
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                    The other major English test accepted almost everywhere IELTS is.
                                </p>
                                <div className="text-primary font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <span className="text-[16px]">→</span>
                                </div>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 3. Why Train With Us */}
            <div className="bg-[#faf8fb] py-16 lg:py-24 border-t border-[#f0eaf2]">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="text-center mb-16">
                        <h2 className="font-sans font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#161616] tracking-[-1px] mb-4">
                            Why Train With Us
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <Award size={24} strokeWidth={2} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-2 leading-[1.3]">
                                Certified Trainers, And Mentors, Not Merely Tutors
                            </h3>
                        </Card>
                        
                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <ClipboardList size={24} strokeWidth={2} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-2 leading-[1.3]">
                                Real Mock Tests Under Timed Conditions
                            </h3>
                        </Card>

                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <TrendingUp size={24} strokeWidth={2} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-2 leading-[1.3]">
                                Score Improvement Tracking
                            </h3>
                        </Card>
                        
                        <Card className="p-6 border border-[#e5dbe8] text-center flex flex-col items-center bg-white shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <Users size={24} strokeWidth={2} />
                            </div>
                            <h3 className="font-sans font-bold text-[17px] text-[#161616] mb-2 leading-[1.3]">
                                Small Batch Sizes
                            </h3>
                        </Card>
                    </div>
                </div>
            </div>

            {/* 4. FAQ */}
            <div className="bg-white">
                <FAQ data={coachingFaqs} />
            </div>
        </div>
    );
};

export default CoachingLanding;