import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import teamImage from '@/assets/images/about_us_team.jpg';

const teamMembers = [
    {
        name: "Aarti Sharma",
        role: "Lead Visa Counsellor",
        certification: "ICCRC Certified",
        image: "https://placehold.co/400x500/f8f5fa/9333ea?text=AS"
    },
    {
        name: "Rahul Verma",
        role: "Senior Admissions Expert",
        certification: "British Council Certified",
        image: "https://placehold.co/400x500/f8f5fa/9333ea?text=RV"
    },
    {
        name: "Priya Patel",
        role: "Immigration Specialist",
        certification: "MARA Registered",
        image: "https://placehold.co/400x500/f8f5fa/9333ea?text=PP"
    },
    {
        name: "Vikram Singh",
        role: "Financial Aid Advisor",
        certification: "Ex-Bank Officer",
        image: "https://placehold.co/400x500/f8f5fa/9333ea?text=VS"
    }
];

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="About Us - Wow Global Studies" description="We've walked this road before you. Learn why Wow Global Studies was founded and meet the experts behind your approval letter." url="/about-us" image={teamImage} />

            {/* 1. Hero Section */}
            <div className="bg-[#faf8fb] relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[13px] font-bold text-[#888] mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-primary">About Us</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        <div className="flex-1 text-left">
                            <h1 className="font-sans font-bold text-[28px] md:text-[46px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                We've Walked This Road <br className="hidden lg:block"/> <span className="text-primary">Before You.</span>
                            </h1>
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[500px]">
                                Wow Global Studies was built out of frustration. Too many students were being sold false dreams, handed generic advice, and faced completely avoidable visa rejections due to dishonest consultants. We knew there had to be a better, more transparent way.
                            </p>
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Book Free Consultation
                                </Button>
                            </Link>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                                <img src={teamImage} alt="Our Team" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Our Story */}
            <div className="py-16 lg:py-24 bg-white relative">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="max-w-[800px] mx-auto text-center mb-16">
                        <h2 className="font-sans font-bold text-[26px] md:text-[42px] leading-[1.15] text-[#161616] tracking-[-1px] mb-6">
                            Why We Started
                        </h2>
                        <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.7] text-[#555] text-left md:text-center">
                            <p>
                                Every year, thousands of brilliant minds miss out on global opportunities not because they lack potential, but because they lack the right guidance. When our founders started their own journeys abroad, they faced a maze of hidden fees, automated cookie-cutter college lists, and agents who vanished the moment a rejection letter arrived.
                            </p>
                            <p>
                                We built Wow Global Studies to be the antithesis of the traditional "visa agent". We don't believe in selling dreams; we believe in building strategies. If your profile isn't strong enough for a specific program, we will tell you the truth, even if it costs us a client.
                            </p>
                            <p>
                                Today, our success is measured not by how many applications we file, but by the number of students who are currently thriving in universities across the globe, knowing they had an honest partner every step of the way.
                            </p>
                        </div>
                    </div>

                    {/* Stats Strip */}
                    <div className="bg-primary rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
                        <div className="flex flex-col items-center flex-1 text-center md:border-r border-white/20 pb-6 md:pb-0 border-b md:border-b-0 w-full">
                            <span className="block font-sans font-bold text-[42px] lg:text-[56px] text-white leading-none mb-2 tracking-tight">5000+</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Success Stories</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 text-center md:border-r border-white/20 pb-6 md:pb-0 border-b md:border-b-0 w-full">
                            <span className="block font-sans font-bold text-[42px] lg:text-[56px] text-white leading-none mb-2 tracking-tight">95%</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Approval Rate</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 text-center md:border-r border-white/20 pb-6 md:pb-0 border-b md:border-b-0 w-full">
                            <span className="block font-sans font-bold text-[42px] lg:text-[56px] text-white leading-none mb-2 tracking-tight">20+</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Countries</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 text-center w-full">
                            <span className="block font-sans font-bold text-[42px] lg:text-[56px] text-white leading-none mb-2 tracking-tight">15+</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Years Exp</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Our Team */}
            <div className="bg-[#faf8fb] py-16 lg:py-24">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="text-center mb-16">
                        <h2 className="font-sans font-bold text-[26px] md:text-[42px] leading-[1.15] text-[#161616] tracking-[-1px] mb-4">
                            The People Behind Your Approval Letter
                        </h2>
                        <p className="text-[17px] text-[#666] max-w-[600px] mx-auto">
                            Our team isn't made up of salespeople; we are educators, ex-visa officers, and certified immigration experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, idx) => (
                            <Card key={idx} className="overflow-hidden bg-white border border-[#f0eaf2]">
                                <div className="aspect-[4/5] w-full relative overflow-hidden bg-[#f0eaf2]">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-bold text-[18px] text-[#161616] mb-1">{member.name}</h3>
                                    <p className="text-[14px] text-[#666] font-medium mb-3">{member.role}</p>
                                    <div className="inline-block bg-[#f8f5fa] text-primary px-3 py-1 rounded-full text-[12px] font-bold">
                                        {member.certification}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Our Values */}
            <div className="py-16 lg:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="text-center mb-16">
                        <h2 className="font-sans font-bold text-[26px] md:text-[42px] leading-[1.15] text-[#161616] tracking-[-1px] mb-4">
                            The Wow Global Standard
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8 border border-[#f0eaf2] bg-white flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-[#faf8fb] text-primary flex items-center justify-center shrink-0">
                                <Scale size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#161616] mb-2">Honest Assessments, Even When It Costs Us a Client</h3>
                                <p className="text-[15px] leading-[1.6] text-[#666]">
                                    We won't file your application if we know it will be rejected. We prefer to lose your business today than lose your trust forever.
                                </p>
                            </div>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] bg-white flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-[#faf8fb] text-primary flex items-center justify-center shrink-0">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#161616] mb-2">Transparent Pricing, No Hidden Fees</h3>
                                <p className="text-[15px] leading-[1.6] text-[#666]">
                                    What we quote is exactly what you pay. We despise the industry norm of bait-and-switch pricing and "last-minute processing fees."
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8 border border-[#f0eaf2] bg-white flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-[#faf8fb] text-primary flex items-center justify-center shrink-0">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#161616] mb-2">Every Consultant Certified, No Exceptions</h3>
                                <p className="text-[15px] leading-[1.6] text-[#666]">
                                    Your future shouldn't be handled by an intern. Every profile is managed and reviewed by certified immigration experts.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8 border border-[#f0eaf2] bg-white flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-[#faf8fb] text-primary flex items-center justify-center shrink-0">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#161616] mb-2">Your Data Stays Private, Always</h3>
                                <p className="text-[15px] leading-[1.6] text-[#666]">
                                    Financial documents, medical records, and academic scores are highly sensitive. We enforce bank-level security on all client files.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* CTA Band */}
            <div className="bg-primary py-16">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] text-center">
                    <h2 className="font-sans font-bold text-[26px] md:text-[42px] text-white leading-[1.2] tracking-[-1px] mb-6">
                        Ready to Start Your Journey With a Partner You Can Trust?
                    </h2>
                    <Link to="/contact">
                        <Button variant="custom" className="bg-white hover:bg-gray-50 text-primary px-[32px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-xl hover:-translate-y-1 inline-flex items-center justify-center h-auto">
                            Speak to an Expert Today
                            <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
