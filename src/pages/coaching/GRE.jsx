import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, BookOpen, Calculator, BarChart3, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const greFaqs = [
    {
        question: "Do I need a strong math background for GRE?",
        answer: "No. The Quantitative Reasoning section tests high-school level mathematics (arithmetic, algebra, geometry, and data analysis). We provide a complete quant refresher course designed specifically for students coming from non-STEM backgrounds."
    },
    {
        question: "How is GRE scored?",
        answer: "The GRE provides three scores: Verbal Reasoning (130-170), Quantitative Reasoning (130-170), and Analytical Writing (0-6.0). Your final combined score is usually considered out of 340 (Verbal + Quant)."
    },
    {
        question: "How long should I prepare before the actual test?",
        answer: "For most students, 2 to 3 months of consistent, structured preparation is ideal. This allows enough time to rebuild foundational math skills, expand vocabulary organically, and master the pacing required for an adaptive test."
    }
];

const GRE = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="GRE Coaching - Wow Global Studies" 
                description="The Score Every Top Grad School Checks First. Master the GRE's adaptive format with our structured, data-driven coaching."
            />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                The Score Every Top <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Grad School Checks First.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[550px] mx-auto md:mx-0">
                                The GRE is uniquely computer-adaptive—meaning your performance on the first section determines the difficulty of the next. In this environment, raw knowledge isn't enough; pacing and test-taking strategy matter just as much.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book a Free GRE Demo
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Data/Analytics Score Visual */}
                        <div className="flex-1 w-full max-w-[500px] relative z-10">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/10 rounded-full blur-[50px]"></div>
                            
                            {/* Main Graph Card */}
                            <div className="relative mx-auto w-[320px] md:w-[420px] h-[300px] bg-white rounded-2xl shadow-xl p-6 border border-[#f0eaf2] transform hover:scale-105 transition-transform duration-500 flex flex-col justify-between">
                                {/* Header */}
                                <div className="flex justify-between items-center border-b border-[#f0eaf2] pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wider">Projected Score</div>
                                            <div className="font-bold text-[20px] leading-none text-[#161616]">330 <span className="text-[#aaa] text-[14px] font-normal">/ 340</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1">
                                        <TrendingUp size={14} /> Top 10%
                                    </div>
                                </div>
                                
                                {/* Graph Area */}
                                <div className="flex-grow flex items-end gap-2 pt-6 relative">
                                    <div className="absolute top-8 left-0 right-0 border-t border-dashed border-[#e5e5e5]"></div>
                                    <div className="absolute top-16 left-0 right-0 border-t border-dashed border-[#e5e5e5]"></div>
                                    <div className="absolute top-24 left-0 right-0 border-t border-dashed border-[#e5e5e5]"></div>
                                    
                                    {/* Bars */}
                                    <div className="flex-1 bg-primary/20 hover:bg-primary/30 transition-colors rounded-t-sm h-[40%] relative z-10 group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100">Sec 1</div></div>
                                    <div className="flex-1 bg-primary/40 hover:bg-primary/50 transition-colors rounded-t-sm h-[55%] relative z-10 group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100">Sec 2</div></div>
                                    <div className="flex-1 bg-primary/60 hover:bg-primary/70 transition-colors rounded-t-sm h-[70%] relative z-10 group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100">Sec 3</div></div>
                                    <div className="flex-1 bg-primary border-t-[3px] border-primary-hover rounded-t-sm h-[90%] relative z-10 group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#161616] text-white text-[11px] font-bold py-1 px-2 rounded">Adaptive<div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#161616] rotate-45"></div></div>
                                    </div>
                                </div>
                                
                                {/* Legend */}
                                <div className="flex justify-between mt-4 pt-4 border-t border-[#f0eaf2] text-[12px] text-[#666] font-medium">
                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary/40"></div> Quant</div>
                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Verbal</div>
                                </div>
                            </div>
                            
                            {/* Floating Stats */}
                            <div className="absolute -left-6 bottom-12 bg-white p-3 rounded-xl shadow-lg border border-[#f0eaf2] flex items-center gap-3 animate-pulse">
                                <div className="bg-[#faf8fb] p-2 rounded-lg text-primary"><BarChart3 size={18} /></div>
                                <div>
                                    <div className="text-[10px] text-[#888] font-bold uppercase">Difficulty</div>
                                    <div className="text-[13px] font-bold text-[#161616]">Hard Routed</div>
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
                            The GRE challenges you across three domains: Verbal Reasoning, Quantitative Reasoning, and Analytical Writing. Because the test is section-adaptive, performing well on your first verbal or quant section routes you to a harder second section—which is required to achieve the highest possible scores. Our coaching doesn't just teach the syllabus; we teach the algorithm.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <LineChart size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Section-Adaptive Test Strategy Training
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Learn time-management and skipping strategies specifically designed for an adaptive testing environment.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <BookOpen size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Vocabulary Building Through Context
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Memorizing lists doesn't work. We teach high-frequency GRE vocabulary through reading comprehension and context clues.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Calculator size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Quant Refresher for Non-Math Backgrounds
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Rebuild your foundational math skills from the ground up, stripping away anxiety before moving to advanced data analysis.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={greFaqs} />
            </div>
        </div>
    );
};

export default GRE;
