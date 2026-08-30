import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Phone, Globe, ChevronDown, CheckCircle, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import talkingImage from '@/assets/images/talking image.png';

const HomeContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        country: 'USA',
        honeypot: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    country_interested: formData.country,
                    source: 'services_callback'
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit enquiry');
            }

            setIsSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8fb]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24" ref={ref}>
                    
                    {/* Left Side: Image */}
                    <div 
                        className={`w-full lg:w-1/2 h-[450px] lg:h-[550px] bg-cover bg-center rounded-[2rem] shadow-2xl relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                        style={{ backgroundImage: `url(${talkingImage})` }}
                    >
                        {/* Gradient Overlay - made lower */}
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-primary/90 via-primary/20 to-transparent to-60%"></div>
                        
                        {/* Floating Stat Badge */}
                        <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2.5 border border-gray-100 z-10 animate-[bounce_3s_infinite]">
                            <Clock size={16} className="text-primary" />
                            <span className="font-bold text-sm text-gray-800">24 Hour Response Time</span>
                        </div>

                        {/* Heading & Description */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                            <h2 className="font-sans font-bold text-[26px] md:text-[40px] leading-[1.1] mb-4">
                                Ready to Take the Next Step?
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-[400px]">
                                Our experts are ready to map out your study abroad journey. Drop your details and we will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="font-sans font-bold text-[28px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[30px] transition-all duration-700 delay-100">
                            {isSuccess ? 'Thank You!' : 'Request a Callback'}<br />
                            <span className="text-primary font-medium">
                                {isSuccess ? 'we will call you shortly' : 'we are here to help'}
                            </span>
                        </h2>
                        
                        {!isSuccess && (
                        <>
                            {/* Trust Strip */}
                            <div className={`flex flex-wrap items-center gap-4 mb-[50px] transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <div className="flex items-center gap-2 text-[15px] font-medium text-[#767676]">
                                    <CheckCircle size={16} className="text-primary" />
                                    <span>100% Free</span>
                                </div>
                                <div className="w-[1px] h-4 bg-[#e5e0e8]"></div>
                                <div className="flex items-center gap-2 text-[15px] font-medium text-[#767676]">
                                    <ShieldCheck size={16} className="text-primary" />
                                    <span>No Spam</span>
                                </div>
                                <div className="w-[1px] h-4 bg-[#e5e0e8]"></div>
                                <div className="flex items-center gap-2 text-[15px] font-medium text-[#767676]">
                                    <Clock size={16} className="text-primary" />
                                    <span>Reply Within 24 Hrs</span>
                                </div>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-[40px]">
                                {error && (
                                    <div className="p-3 text-[14px] text-red-600 bg-red-50 border border-red-100 rounded-lg">
                                        {error}
                                    </div>
                                )}

                                {/* Honeypot field (hidden) */}
                                <div style={{ display: 'none' }} aria-hidden="true">
                                    <label htmlFor="callback-honeypot">Leave this field empty</label>
                                    <input 
                                        id="callback-honeypot"
                                        type="text"
                                        name="honeypot"
                                        tabIndex="-1"
                                        autoComplete="off"
                                        value={formData.honeypot}
                                        onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                                    />
                                </div>
                            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <label htmlFor="home-enquiry-name" className="text-[13px] font-bold text-[#767676] uppercase tracking-wider block mb-3">
                                    Full Name
                                </label>
                                <div className="flex items-center gap-3 border-b border-[#e5e0e8] focus-within:border-primary transition-colors pb-3">
                                    <User size={18} className="text-gray-400" />
                                    <input 
                                        id="home-enquiry-name"
                                        type="text" 
                                        required
                                        placeholder="Your full name"
                                        className="w-full bg-transparent focus:outline-none text-[16px] text-[#161616] placeholder:text-gray-300"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className={`transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <label htmlFor="home-enquiry-phone" className="text-[13px] font-bold text-[#767676] uppercase tracking-wider block mb-3">
                                    Phone Number
                                </label>
                                <div className="flex items-center gap-3 border-b border-[#e5e0e8] focus-within:border-primary transition-colors pb-3">
                                    <Phone size={18} className="text-gray-400" />
                                    <input 
                                        id="home-enquiry-phone"
                                        type="tel" 
                                        required
                                        placeholder="+91 99999 99999"
                                        className="w-full bg-transparent focus:outline-none text-[16px] text-[#161616] placeholder:text-gray-300"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className={`transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <label htmlFor="home-enquiry-country" className="text-[13px] font-bold text-[#767676] uppercase tracking-wider block mb-3">
                                    Interested In
                                </label>
                                <div className="flex items-center gap-3 border-b border-[#e5e0e8] focus-within:border-primary transition-colors pb-3 relative">
                                    <Globe size={18} className="text-gray-400 flex-shrink-0" />
                                    <select
                                        id="home-enquiry-country"
                                        required
                                        className="w-full bg-transparent focus:outline-none text-[16px] text-[#161616] appearance-none cursor-pointer pr-8"
                                        value={formData.country}
                                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                                    >
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Germany">Germany</option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>

                            <div className={`pt-2 transition-all duration-700 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <Button 
                                    type="submit" 
                                    variant="custom" 
                                    disabled={isLoading}
                                    className="w-full bg-primary hover:bg-primary-hover hover:-translate-y-1 text-white py-[18px] h-auto rounded-xl font-bold text-[16px] shadow-[0_8px_20px_rgb(147,51,234,0.3)] transition-all flex items-center justify-center gap-2.5 group disabled:opacity-70 disabled:hover:translate-y-0"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block"></span>
                                            <span>Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit Details</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                                <p className="text-center text-[12px] text-gray-400 mt-4 font-medium">
                                    We will only use these details to help plan your visa journey.
                                </p>
                            </div>
                        </form>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContactSection;
