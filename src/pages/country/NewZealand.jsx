import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, FileCheck, Briefcase, TrendingDown, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const newZealandFaqs = [
    {
        question: "Is New Zealand cheaper than Australia overall?",
        answer: "Yes, generally. Both tuition fees and living expenses tend to be lower in New Zealand compared to major Australian hubs like Sydney or Melbourne. The exchange rate for the NZD is also typically more favorable for international students."
    },
    {
        question: "How competitive is PR in New Zealand?",
        answer: "New Zealand uses a points-based system similar to Australia and Canada (the Skilled Migrant Category). Because the overall applicant pool is smaller and the country actively seeks to fill skill shortages, the pathway is often less hyper-competitive than larger destinations, provided you secure skilled employment."
    },
    {
        question: "Which fields have the best job prospects there?",
        answer: "New Zealand has a strong demand for professionals in IT, engineering, agriculture, healthcare (nursing in particular), and tourism/hospitality. Graduates in these sectors often find securing a job and meeting PR thresholds much easier."
    }
];

const NewZealand = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="Study in New Zealand - Wow Global Studies" description="Smaller Class Sizes, an Easier PR Pathway, and a Lower Cost of Living. Discover the benefits of studying and settling in New Zealand." url="/study-in/new-zealand" />

            {/* 1. Hero Section */}
            <div 
                className="relative pt-[150px] pb-[80px] lg:pt-[210px] lg:pb-[140px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1600&auto=format&fit=crop")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] w-full relative z-10 flex flex-col items-center text-center">
                    
                    <h1 className="font-sans font-bold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] text-white tracking-[-1.5px] mb-6 max-w-[900px]">
                        Smaller Class Sizes, an Easier PR Pathway, <br className="hidden md:block"/>
                        <span className="text-primary-light text-primary">And a Lower Cost of Living.</span>
                    </h1>
                    
                    <p className="text-[16px] md:text-[20px] leading-[1.65] text-white/90 mb-10 max-w-[700px] font-medium">
                        Often overlooked in favor of bigger neighbors, New Zealand offers incredibly strong post-study work rights and a much more accessible Permanent Residency route due to a smaller applicant pool.
                    </p>
                    
                    <Link to="/contact">
                        <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 h-auto">
                            Check My New Zealand Eligibility
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
                            <div className="text-[16px] font-bold text-[#161616]">NZD 22K - 32K/yr</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><FileCheck size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Visa Type</div>
                            <div className="text-[16px] font-bold text-[#161616]">Student Visa</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Briefcase size={24} /></div>
                        <div>
                            <div className="text-[12px] text-[#888] font-bold uppercase tracking-wide">Post-Study Work</div>
                            <div className="text-[16px] font-bold text-[#161616]">Up to 3 yrs</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Details + Differentiators */}
            <div className="bg-white flex-grow">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24">
                    
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#444]">
                            New Zealand is the hidden gem of international education. All eight of its universities rank in the top 3% globally, but because the country has a smaller population, international students enjoy much smaller class sizes and more personalized academic support. Securing a Student visa is straightforward if you have genuine intent. Upon completing your degree, the Post-Study Work Visa allows you to stay for up to 3 years. Crucially, the smaller talent pool means less fierce competition when applying for skilled jobs and navigating the points-based PR system.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Briefcase size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Post-Study Work Visa Up to 3 Years
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                We guide you into degree programs (Level 7 or higher) that explicitly qualify for the maximum 3-year open work visa.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <TrendingDown size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Lower Cost of Living vs. Australia/UK
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                A favorable exchange rate and lower tuition fees mean you receive a world-class education with significantly less financial strain.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Users size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Less Competitive PR Pathway
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                With a smaller applicant pool and high demand for skilled professionals, your chances of securing Permanent Residency are highly attainable.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 4. FAQ */}
                <FAQ data={newZealandFaqs} />
            </div>
        </div>
    );
};

export default NewZealand;
