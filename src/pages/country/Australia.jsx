import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, FileCheck, Briefcase, Clock, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const australiaFaqs = [
    {
        question: "How long can I stay and work after graduating?",
        answer: "Under the Temporary Graduate visa (subclass 485), bachelor's graduates typically get 2 years, master's graduates get 2-3 years, and PhD graduates get up to 4 years. If you study in a designated regional area, you may be eligible for an additional 1 to 2 years of post-study work rights."
    },
    {
        question: "Does studying in a regional area help my PR chances?",
        answer: "Yes, significantly. Studying in a designated regional area (like Adelaide, Perth, or Hobart) gives you 5 extra points toward your skilled migration point test. Additionally, it often makes you eligible for state nomination and longer post-study work visas."
    },
    {
        question: "What's the visa financial requirement?",
        answer: "To secure a Student visa (subclass 500), you must prove you have enough funds to cover your travel costs, one year of tuition fees, and 12 months of living costs. As of recent updates, the 12-month living cost requirement is approximately AUD $29,710 for a single student."
    }
];

const Australia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Study in Australia - Wow Global Studies" 
                description="Strong Post-Study Work Rights and a Lifestyle Students Don't Want to Leave. Navigate the Subclass 500 and 485 visas with expert guidance."
            />

            {/* 1. Hero Section */}
            <div 
                className="relative pt-[150px] pb-[80px] lg:pt-[210px] lg:pb-[140px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1600&auto=format&fit=crop")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] w-full relative z-10 flex flex-col items-center text-center">
                    
                    <h1 className="font-sans font-bold text-[40px] md:text-[60px] leading-[1.1] text-white tracking-[-1.5px] mb-6 max-w-[900px]">
                        Strong Post-Study Work Rights, <br className="hidden md:block"/>
                        <span className="text-primary-light text-primary">And a Lifestyle Students Don't Want to Leave.</span>
                    </h1>
                    
                    <p className="text-[16px] md:text-[20px] leading-[1.65] text-white/90 mb-10 max-w-[700px] font-medium">
                        Australia blends world-class education with an unbeatable standard of living. The Temporary Graduate visa (subclass 485) makes it incredibly popular for students looking to kickstart a global career.
                    </p>
                    
                    <Link to="/contact">
                        <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 h-auto">
                            Check My Australia Eligibility
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
                            <div className="text-[16px] font-bold text-[#161616]">AUD 20K - 45K/yr</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><FileCheck size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Visa Type</div>
                            <div className="text-[16px] font-bold text-[#161616]">Subclass 500</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Briefcase size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Post-Study Work</div>
                            <div className="text-[16px] font-bold text-[#161616]">2 - 4 yrs (Subclass 485)</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            Australia is a top-tier destination for international students, heavily driven by its quality of life, robust healthcare, and engineering industries. The Student visa (subclass 500) requires you to hold an OSHC (Overseas Student Health Cover) and prove sufficient funds. Post-graduation, the Temporary Graduate visa (subclass 485) grants you full work rights, with the duration varying by your degree level. Strategic students who choose to study in designated regional areas can access extended work rights and crucial bonus points for skilled migration.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Clock size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Subclass 485 Work Visa Duration Planning
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We ensure the course length and qualification level you select naturally align with the maximum post-study work duration you desire.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <MapPin size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Regional Study Bonus Guidance
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                If migration is your goal, we explicitly map out high-quality regional universities to secure you extra PR points and extended visas.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Building2 size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                University Shortlisting by City & Course Ranking
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                From the prestigious Group of Eight (Go8) to innovative technology institutes, we match you to the right city lifestyle and course ranking.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 4. FAQ */}
                <FAQ data={australiaFaqs} />
            </div>
        </div>
    );
};

export default Australia;
