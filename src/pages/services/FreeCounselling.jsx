import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, ShieldCheck, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const freeCounsellingFaqs = [
    {
        question: "Is the first session really free?",
        answer: "Yes, it is completely free. We believe in providing honest advice upfront without any pressure or hidden fees, so you can make an informed decision about your future."
    },
    {
        question: "Do I need documents ready for this call?",
        answer: "No documents are required for our first conversation. Just bring your ideas, goals, and any questions you might have about studying abroad."
    },
    {
        question: "What happens if I'm not eligible?",
        answer: "If your current profile doesn't match your dream destination, we don't just say 'no'. We'll give you an honest assessment and work with you to find alternative pathways or steps to improve your eligibility."
    }
];

const FreeCounselling = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="Free Counselling - Wow Global Studies" description="Start your visa journey with an honest conversation. No sales pitch, no commitment. Book your free counselling session today." url="/services/free-counselling" />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pb-20">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <section className="flex flex-col lg:flex-row gap-10 items-center">
                        <div className="flex-1 text-center lg:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[26px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Before Any Paperwork, <br className="hidden md:block"/>
                                <span className="text-primary font-medium">We Just Talk.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[560px] mx-auto lg:mx-0">
                                Your visa journey doesn't start with a form. It starts with an honest conversation about where you want to go and whether it's realistic.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto mx-auto lg:mx-0">
                                    Book Your Free Session
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="flex-1 flex justify-center lg:justify-end relative w-full mt-6 lg:mt-0 z-10">
                            {/* Realistic Chat Window */}
                            <div className="relative w-full max-w-[380px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(147,51,234,0.12)] border border-[#f0eaf2] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                                
                                {/* Chat Header */}
                                <div className="bg-[#faf8fb] px-5 py-4 border-b border-[#f0eaf2] flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-[18px]">
                                            W
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#161616] text-[15px] leading-none mb-1">Wow Expert</h4>
                                        <p className="text-[12px] text-[#767676] leading-none">Online</p>
                                    </div>
                                </div>
                                
                                {/* Chat Body */}
                                <div className="p-5 flex flex-col gap-5 bg-white">
                                    {/* Student Message */}
                                    <div className="flex flex-col gap-1 self-start max-w-[85%]">
                                        <div className="bg-[#f2eff4] text-[#161616] p-4 rounded-2xl rounded-bl-none text-[14px] leading-[1.5]">
                                            Hi! I want to study in the UK, but I'm not sure if my budget is enough.
                                        </div>
                                        <span className="text-[11px] text-[#888] ml-1">10:42 AM</span>
                                    </div>
                                    
                                    {/* Expert Message */}
                                    <div className="flex flex-col gap-1 self-end max-w-[90%] items-end">
                                        <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-[0_4px_12px_rgba(147,51,234,0.2)] text-[14px] leading-[1.5]">
                                            That's exactly what we're here for. Let's look at your options together with no strings attached. 😊
                                        </div>
                                        <span className="text-[11px] text-[#888] mr-1">10:44 AM</span>
                                    </div>
                                </div>
                                
                                {/* Chat Input Area (Decorative) */}
                                <div className="px-5 py-4 border-t border-[#f0eaf2] flex items-center gap-3 bg-[#faf8fb]">
                                    <div className="flex-1 bg-white border border-[#e8dced] rounded-full h-10 px-4 flex items-center">
                                        <span className="text-[#a0a0a0] text-[13px]">Type a message...</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            Our first session is completely unscripted. <strong>No sales pitch, no commitment.</strong> We take the time to sit down with you and cover your academic and professional background, discuss your budget honestly, and evaluate your target country live with a certified counsellor.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <HeartHandshake size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                No Obligation <br className="hidden lg:block"/> to Continue
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Get the clarity you need. Whether you choose to proceed with us or not, the insights are yours to keep.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <UserCheck size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                1-on-1 with a Certified Counsellor
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Not a call center script. You talk directly to experts who have successfully guided hundreds of students.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <ShieldCheck size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Honest "This Might Not Work" Answers
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                If a pathway is unrealistic, we tell you immediately and provide viable, alternative solutions.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={freeCounsellingFaqs} />
            </div>
        </div>
    );
};

export default FreeCounselling;
