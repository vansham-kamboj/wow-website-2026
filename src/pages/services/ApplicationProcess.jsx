import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Bell, SearchCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const appProcessFaqs = [
    {
        question: "How long does the application itself take to prepare?",
        answer: "Preparation timelines vary based on the destination and university requirements, but typically take 1 to 3 weeks. We ensure every document is pristine before we hit submit."
    },
    {
        question: "Can I track my application status?",
        answer: "Absolutely. We provide real-time updates and proactive notifications so you never have to guess where your application stands in the queue."
    },
    {
        question: "What if the embassy requests additional documents later?",
        answer: "Don't panic—this is common. Our team will guide you on exactly what is needed, format it correctly, and submit it promptly on your behalf."
    }
];

const ApplicationProcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Application Process - Wow Global Studies" 
                description="Application errors cause delays. We handle every field, document, and checkbox with zero copy-paste errors and dual-review submissions."
            />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 min-[820px]:pb-20">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px]">
                    <section className="flex flex-col gap-10 items-center text-center">
                        <div className="z-10 w-full max-w-[800px] mx-auto">
                            
                            <h1 className="font-sans font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                One Small Mistake Here <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Ends the Story Early.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[640px] mx-auto">
                                Application errors are the #1 reason for delays — not eligibility. We handle every field, every document, every checkbox.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Start My Application
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Slim horizontal progress-bar visual strip */}
                        <div className="w-full max-w-[900px] mx-auto mt-6 z-10">
                            <div className="relative pt-6">
                                {/* Track */}
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#f0eaf2] -translate-y-1/2 rounded-full hidden md:block"></div>
                                {/* Active Track */}
                                <div className="absolute top-1/2 left-0 w-[100%] h-[2px] bg-gradient-to-r from-primary/30 to-primary -translate-y-1/2 rounded-full hidden md:block"></div>
                                
                                <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center gap-3 relative z-10 group cursor-default">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_0_6px_#fff]">
                                            <span className="text-sm font-bold">1</span>
                                        </div>
                                        <span className="text-[13px] font-bold text-[#161616]">Document Collation</span>
                                    </div>
                                    
                                    {/* Step 2 */}
                                    <div className="flex flex-col items-center gap-3 relative z-10 group cursor-default">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_0_6px_#fff]">
                                            <span className="text-sm font-bold">2</span>
                                        </div>
                                        <span className="text-[13px] font-bold text-[#161616]">Field-by-Field Entry</span>
                                    </div>
                                    
                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center gap-3 relative z-10 group cursor-default">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_0_6px_#fff]">
                                            <span className="text-sm font-bold">3</span>
                                        </div>
                                        <span className="text-[13px] font-bold text-[#161616]">Dual-Review Audit</span>
                                    </div>
                                    
                                    {/* Step 4 */}
                                    <div className="flex flex-col items-center gap-3 relative z-10 group cursor-default">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_0_6px_#fff]">
                                            <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-current stroke-[3]"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <span className="text-[13px] font-bold text-[#161616]">Flawless Submission</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] pb-16 min-[820px]:pb-24">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            We treat your application like a legal document. From form-filling accuracy to strict document cross-verification, our rigorous pre-submission audits ensure that not a single detail is left to chance. Because perfection is the only standard we accept.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] flex gap-5 items-start">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center">
                                <SearchCheck size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-[19px] text-[#161616] mb-2 leading-[1.3]">
                                    Dual-Review Before Submission
                                </h3>
                                <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                    Your application passes through two distinct senior experts to guarantee all guidelines have been met precisely.
                                </p>
                            </div>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] flex gap-5 items-start">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center">
                                <FileText size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-[19px] text-[#161616] mb-2 leading-[1.3]">
                                    University/Embassy-Specific Formatting
                                </h3>
                                <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                    Every institution has its own unwritten formatting rules. We structure your files exactly how they want to see them.
                                </p>
                            </div>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] flex gap-5 items-start">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center">
                                <Bell size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-[19px] text-[#161616] mb-2 leading-[1.3]">
                                    Real-Time Application Status Updates
                                </h3>
                                <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                    No black holes. You get immediate, proactive notifications the moment your application moves to the next stage.
                                </p>
                            </div>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] flex gap-5 items-start">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center">
                                <CheckCircle2 size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-[19px] text-[#161616] mb-2 leading-[1.3]">
                                    Zero Copy-Paste Errors
                                </h3>
                                <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                    Every single field is manually checked. A misplaced comma or accidental whitespace shouldn't ruin your chances.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={appProcessFaqs} />
            </div>
        </div>
    );
};

export default ApplicationProcess;
