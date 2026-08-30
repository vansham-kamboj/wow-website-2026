import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plane, CalendarClock, Briefcase, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

const airTicketFaqs = [
    {
        question: "Do you book one-way or return tickets only?",
        answer: "We book whatever your specific visa requires. Most student visas require a one-way ticket, while visitor or short-term visas often mandate proof of a return flight."
    },
    {
        question: "Can I get help with excess baggage for study abroad?",
        answer: "Yes. Students moving abroad typically need more than standard limits. We guide you toward student-fare tickets that automatically include extra baggage allowance."
    },
    {
        question: "Is there an extra charge for this service?",
        answer: "No hidden agency fees. We simply secure the best available fare using our ticketing partners and pass the cost directly to you."
    }
];

const AirTicket = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="Air Ticket Assistance - Wow Global Studies" description="Discounted, student/visa-holder-friendly flight bookings. This gives you one less thing to manage after months of paperwork." url="/services/air-ticket" />

            {/* 1. Hero Section */}
            <div className="bg-gradient-to-b from-[#faf8fb] to-white relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-24 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left z-10">
                            
                            <h1 className="font-sans font-bold text-[26px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                                Visa Approved. <br className="hidden md:block"/>
                                <span className="text-primary font-medium">Now Let's Get You There.</span>
                            </h1>
                            
                            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[500px] mx-auto md:mx-0">
                                Discounted, student/visa-holder-friendly flight bookings. This gives you one less thing to manage after months of paperwork.
                            </p>
                            
                            <Link to="/contact">
                                <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                    Get Ticket Assistance
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Boarding Pass Stub Visual */}
                        <div className="flex-1 w-full max-w-[450px] relative z-10">
                            {/* Decorative blur behind the card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[40px]"></div>
                            
                            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(147,51,234,0.1)] overflow-hidden border border-[#f0eaf2] transform rotate-3 transition-transform hover:rotate-0 duration-300 relative z-10">
                                {/* Top colored section */}
                                <div className="bg-primary px-6 py-4 flex justify-between items-center text-white">
                                    <div className="font-bold text-xl tracking-widest">WOW AIR</div>
                                    <Plane className="opacity-80" size={24} />
                                </div>
                                
                                {/* Flight Details */}
                                <div className="px-6 py-8 flex justify-between items-center border-b-2 border-dashed border-[#e5dbe8]">
                                    <div className="text-center">
                                        <div className="text-[32px] font-black text-primary leading-none mb-1">BOM</div>
                                        <div className="text-[12px] text-[#888] font-semibold uppercase">Mumbai</div>
                                    </div>
                                    <div className="flex-1 px-4 flex flex-col items-center">
                                        <span className="text-[10px] text-[#888] font-bold uppercase mb-1">Student Fare</span>
                                        <div className="w-full flex items-center justify-center">
                                            <div className="h-[2px] bg-[#f0eaf2] w-full relative">
                                                <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" size={16} fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[32px] font-black text-primary leading-none mb-1">LHR</div>
                                        <div className="text-[12px] text-[#888] font-semibold uppercase">London</div>
                                    </div>
                                </div>
                                
                                {/* Stub details */}
                                <div className="px-6 py-5 bg-[#faf8fb] flex justify-between items-center">
                                    <div>
                                        <div className="text-[10px] text-[#888] font-bold uppercase mb-0.5">Baggage</div>
                                        <div className="text-[14px] font-bold text-[#161616]">40 KG + 7 KG</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] text-[#888] font-bold uppercase mb-0.5">Date</div>
                                        <div className="text-[14px] font-bold text-[#161616]">Flexible</div>
                                    </div>
                                </div>
                                {/* Perforated edge effect on left/right for the ticket fold */}
                                <div className="absolute top-[108px] -left-2 w-4 h-4 bg-[#faf8fb] rounded-full border border-transparent"></div>
                                <div className="absolute top-[108px] -right-2 w-4 h-4 bg-[#faf8fb] rounded-full border border-transparent"></div>
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
                            We secure flexible-date bookings for unpredictable visa timelines, provide strict baggage allowance guidance for first-time international flyers, and negotiate group discounts if your family is traveling with you.
                        </p>
                    </section>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Ticket size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Visa-Holder Fare Discounts
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Access special student and long-term visa rates that aren't available on standard booking platforms.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <CalendarClock size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Flexible Reschedule Support
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Visa delays happen. We book tickets with flexible date policies so you don't lose money on last-minute changes.
                            </p>
                        </Card>
                        
                        <Card className="p-8 border border-[#f0eaf2] text-center flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#faf8fb] text-primary flex items-center justify-center mb-5">
                                <Briefcase size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans font-bold text-[18px] text-[#161616] mb-3 leading-[1.3]">
                                Baggage & Documentation Guidance for First-Time Flyers
                            </h3>
                            <p className="text-[14px] leading-[1.6] text-[#666]">
                                Expert advice on check-in allowances and carry-on restrictions specifically tailored to students.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={airTicketFaqs} />
            </div>
        </div>
    );
};

export default AirTicket;
