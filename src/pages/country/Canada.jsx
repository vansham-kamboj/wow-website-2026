import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, DollarSign, FileCheck, Briefcase, Map, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const canadaFaqs = [
    {
        question: "Does every course qualify for PGWP?",
        answer: "No. You must attend a Designated Learning Institution (DLI) and complete a PGWP-eligible program. Private colleges sometimes offer programs that do not qualify for the post-graduation work permit. We strictly filter our university shortlist to ensure your program is PGWP-eligible."
    },
    {
        question: "How long does PR take after graduating?",
        answer: "Typically, students work for 1 to 3 years on their PGWP to gather Canadian work experience. Once they have 1 year of skilled work experience, they can apply for PR via the Canadian Experience Class (Express Entry), which usually takes 6 months to process. The total timeline is generally 2-4 years post-graduation."
    },
    {
        question: "What's the difference between Express Entry and PNP?",
        answer: "Express Entry is the federal system for managing PR applications across Canada based on a points score (CRS). The Provincial Nominee Program (PNP) allows individual provinces to nominate candidates who meet their specific local labor needs. Getting a PNP adds 600 points to your Express Entry profile, practically guaranteeing PR."
    }
];

const Canada = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Study in Canada - Wow Global Studies" 
                description="Study, Work, and Settle. Discover the clearest PR pathways through Canada's PGWP and Express Entry programs with our expert guidance."
            />

            {/* 1. Hero Section */}
            <div 
                className="relative pt-[150px] pb-[80px] min-[820px]:pt-[210px] min-[820px]:pb-[140px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1600&auto=format&fit=crop")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] w-full relative z-10 flex flex-col items-center text-center">
                    
                    <h1 className="font-sans font-bold text-[40px] md:text-[60px] leading-[1.1] text-white tracking-[-1.5px] mb-6 max-w-[900px]">
                        Study, Work, and Settle — <br className="hidden md:block"/>
                        <span className="text-primary-light text-primary">One of the Clearest PR Pathways.</span>
                    </h1>
                    
                    <p className="text-[16px] md:text-[20px] leading-[1.65] text-white/90 mb-10 max-w-[700px] font-medium">
                        Canada’s Post-Graduation Work Permit (PGWP) and points-based Express Entry route make it the undisputed top choice for students planning to settle abroad long-term.
                    </p>
                    
                    <Link to="/contact">
                        <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 h-auto">
                            Check My Canada Eligibility
                        </Button>
                    </Link>
                </div>
            </div>

            {/* 2. Cost & Visa Snapshot (Compact Strip) */}
            <div className="relative z-20 max-w-[1000px] mx-auto px-[20px] -mt-[40px] md:-mt-[60px] mb-16">
                <div className="bg-white rounded-2xl shadow-xl border border-[#f0eaf2] p-4 md:p-8 flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-[#f0eaf2]">
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-green-100 text-green-600 p-3 rounded-xl"><DollarSign size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Avg. Tuition</div>
                            <div className="text-[16px] font-bold text-[#161616]">CAD 15K - 30K/yr</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><FileCheck size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Visa Type</div>
                            <div className="text-[16px] font-bold text-[#161616]">Study Permit</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Briefcase size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Post-Study Work</div>
                            <div className="text-[16px] font-bold text-[#161616]">Up to 3 yrs (PGWP)</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] min-[820px]:px-[60px] pb-16 min-[820px]:pb-24">
                    
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            Canada is globally renowned for its welcoming immigration policies. The journey starts with securing a Study Permit for a PGWP-eligible program. After graduating, you can work anywhere in Canada for up to 3 years. This Canadian work experience translates directly into high Comprehensive Ranking System (CRS) points for the Express Entry Permanent Residency (PR) draw, giving you a structured, highly predictable path to citizenship.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <CheckCircle2 size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                PGWP-Eligible Program Selection Only
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We rigorously vet universities and colleges to ensure every program we recommend qualifies for the Post-Graduation Work Permit.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Target size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Express Entry PR Pathway Planning
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We don't just plan your education; we forecast your eventual CRS score from day one to ensure you're on track for Permanent Residency.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Map size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Province-Wise University Matching
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We align your university choice with regional Provincial Nominee Programs (PNP) to give you backup PR routes outside of federal draws.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 4. FAQ */}
                <FAQ data={canadaFaqs} />
            </div>
        </div>
    );
};

export default Canada;
