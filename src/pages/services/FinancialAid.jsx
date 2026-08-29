import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, GraduationCap, FileSignature, Wallet, ShieldCheck, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const financialAidFaqs = [
    {
        question: "Do you help even if I don't have collateral?",
        answer: "Yes! We partner with several top NBFCs and banks that provide unsecured (non-collateral) education loans based on your academic profile, co-applicant income, and future earning potential."
    },
    {
        question: "Which banks do you work with?",
        answer: "We have direct tie-ups with leading nationalised banks, private banks, and NBFCs, including HDFC Credila, Avanse, SBI, and ICICI, ensuring you get the most competitive interest rates."
    },
    {
        question: "Can international scholarships cover full tuition?",
        answer: "While full-ride scholarships are highly competitive, they do exist. More commonly, we help students secure partial scholarships or tuition waivers that significantly reduce the financial burden of studying abroad."
    }
];

const FinancialAid = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="Financial Aid & Education Loans - Wow Global Studies" description="Loan approvals, scholarship shortlists, and fund proof. We get everything sorted before your visa officer even asks." url="/services/financial-aid" />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pb-16">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <section className="flex flex-col items-center text-center">
                        <div className="z-10 w-full max-w-[900px] mx-auto">
                            
                            <h1 className="font-sans font-bold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Money Worries Stop More Dreams <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Than Rejections Do.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[640px] mx-auto">
                                Loan approvals, scholarship shortlists, and fund proof. We get everything sorted before your visa officer even asks.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto mb-12">
                                    Check My Financial Options
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Stats Strip (like Home) */}
                        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 bg-white border border-[#f0eaf2] rounded-2xl shadow-[0_20px_60px_rgba(147,51,234,0.04)] p-6 z-10 transform md:-translate-y-4">
                            <div className="flex flex-col items-center justify-center p-4">
                                <span className="text-[32px] md:text-[40px] font-black text-primary leading-none tracking-tight mb-2">₹1Cr+</span>
                                <span className="text-[14px] font-bold text-[#666]">Max Loan Approval</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-[#f0eaf2]">
                                <span className="text-[32px] md:text-[40px] font-black text-primary leading-none tracking-tight mb-2">48 Hrs</span>
                                <span className="text-[14px] font-bold text-[#666]">Scholarship Matching</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-[#f0eaf2]">
                                <span className="text-[32px] md:text-[40px] font-black text-primary leading-none tracking-tight mb-2">100%</span>
                                <span className="text-[14px] font-bold text-[#666]">Fund Proof Compliance</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 2. Details + Differentiators */}
            <div className="bg-white">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-8 lg:pb-16 pt-12">
                    <section className="max-w-[800px] mx-auto mb-16 text-center">
                        <p className="text-[17px] md:text-[20px] leading-[1.7] text-[#444]">
                            Studying abroad is an investment, but securing the funds shouldn't be a nightmare. We simplify the entire process through direct bank and NBFC loan tie-ups, precision scholarship matching based on your unique profile, and meticulous fund-proof documentation formatted strictly to your destination country's visa requirements.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <Landmark size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Direct Bank/NBFC <br className="hidden lg:block"/> Loan Tie-Ups
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Bypass the endless paperwork. We negotiate the best interest rates directly with partnered financial institutions.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <GraduationCap size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Scholarship Shortlisting <br className="hidden lg:block"/> by Profile Match
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Don't leave money on the table. We identify and apply for university-specific grants that fit your academic record perfectly.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)]">
                            <div className="w-16 h-16 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-6">
                                <FileSignature size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[20px] text-[#161616] mb-3 leading-[1.3]">
                                Fund Proof Formatted <br className="hidden lg:block"/> to Visa Rules
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-[#666]">
                                Every embassy is strict about how funds are shown. We organize your financial documents to guarantee compliance.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* 3. Illustrated Section */}
            <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf8fb] to-white py-[60px] lg:py-[100px]">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] relative z-10">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-[700px] aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
                            
                            {/* Decorative Background Elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/5 rounded-full blur-[40px] animate-pulse"></div>
                                <div className="absolute w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-primary/10 rounded-full blur-[30px] translate-x-12 translate-y-12"></div>
                            </div>
                            
                            {/* Central Motifs */}
                            <div className="relative z-10 flex gap-6 md:gap-12 items-center justify-center">
                                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.1)] flex items-center justify-center transform -rotate-6 transition-transform hover:scale-110">
                                    <Wallet className="text-primary w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                                </div>
                                <div className="w-20 h-20 md:w-32 md:h-32 bg-primary rounded-full shadow-[0_20px_40px_rgba(147,51,234,0.3)] flex items-center justify-center z-20 transition-transform hover:scale-110">
                                    <ShieldCheck className="text-white w-10 h-10 md:w-16 md:h-16" strokeWidth={1.5} />
                                </div>
                                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.1)] flex items-center justify-center transform rotate-6 transition-transform hover:scale-110">
                                    <Banknote className="text-primary w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Floating Pills */}
                            <div className="absolute top-[10%] left-[5%] md:left-[10%] bg-white px-4 md:px-5 py-2 md:py-3 rounded-full shadow-lg border border-[#f0eaf2] animate-bounce" style={{ animationDuration: '3s' }}>
                                <span className="text-primary font-bold text-[12px] md:text-[14px]">Loans up to ₹1 Crore</span>
                            </div>
                            <div className="absolute bottom-[20%] left-[0%] md:left-[5%] bg-white px-4 md:px-5 py-2 md:py-3 rounded-full shadow-lg border border-[#f0eaf2] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                <span className="text-primary font-bold text-[12px] md:text-[14px]">Zero Collateral Options</span>
                            </div>
                            <div className="absolute top-[20%] right-[0%] md:right-[5%] bg-white px-4 md:px-5 py-2 md:py-3 rounded-full shadow-lg border border-[#f0eaf2] animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                                <span className="text-primary font-bold text-[12px] md:text-[14px]">Scholarship Match in 48 Hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. FAQ */}
            <div className="bg-white flex-grow">
                <FAQ data={financialAidFaqs} />
            </div>
        </div>
    );
};

export default FinancialAid;
