import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission
        console.log("Form submitted:", formData);
        alert("Thank you! Your message has been received. We will contact you shortly.");
        setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO title="Contact Us - Wow Global Studies" description="Get in touch with Wow Global Studies. Book your free consultation, visit our office, or drop us a message to start your visa journey today." url="/contact" />

            {/* 1. Hero Section */}
            <div className="bg-[#faf8fb] relative pt-[130px] pb-12 lg:pt-[170px] lg:pb-16 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] relative z-10 text-center">
                    <h1 className="font-sans font-bold text-[36px] md:text-[46px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                        Let's Talk About <span className="text-primary">Your Future.</span>
                    </h1>
                    <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] max-w-[600px] mx-auto">
                        Whether you have a quick question about a specific country's visa policy or you're ready to start your application, our experts are here to help.
                    </p>
                </div>
            </div>

            {/* 2. Contact Content */}
            <div className="py-16 bg-white relative">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        
                        {/* Contact Form */}
                        <div>
                            <h2 className="font-sans font-bold text-[28px] md:text-[36px] leading-[1.15] text-[#161616] tracking-[-1px] mb-8">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-[14px] font-bold text-[#161616]">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-[#faf8fb] border border-[#e8dced] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-[14px] font-bold text-[#161616]">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-[#faf8fb] border border-[#e8dced] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-[14px] font-bold text-[#161616]">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#faf8fb] border border-[#e8dced] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="country" className="block text-[14px] font-bold text-[#161616]">Target Country</label>
                                    <select 
                                        id="country" 
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full bg-[#faf8fb] border border-[#e8dced] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors appearance-none"
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23888\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                                    >
                                        <option value="" disabled>Select a country</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">UK</option>
                                        <option value="Australia">Australia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-[14px] font-bold text-[#161616]">How can we help you?</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-[#faf8fb] border border-[#e8dced] rounded-[8px] px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us about your academic background and goals..."
                                    ></textarea>
                                </div>
                                
                                <Button type="submit" variant="custom" className="w-full bg-primary hover:bg-primary-hover text-white px-[28px] py-[16px] rounded-[8px] font-bold text-[16px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto mt-4">
                                    Submit Request
                                    <Send size={18} className="ml-2" />
                                </Button>
                            </form>
                        </div>
                        
                        {/* Contact Details & Map */}
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <Card className="p-6 border border-[#f0eaf2] bg-white">
                                    <div className="w-10 h-10 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-4">
                                        <Phone size={20} />
                                    </div>
                                    <h3 className="font-bold text-[16px] text-[#161616] mb-1">Call Us</h3>
                                    <a href="tel:+919925944556" className="text-[15px] text-[#666] hover:text-primary transition-colors block">
                                        +91 9925944556
                                    </a>
                                </Card>
                                
                                <Card className="p-6 border border-[#f0eaf2] bg-white">
                                    <div className="w-10 h-10 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center mb-4">
                                        <Mail size={20} />
                                    </div>
                                    <h3 className="font-bold text-[16px] text-[#161616] mb-1">Email Us</h3>
                                    {/* TODO: Needs real domain email, replace placeholder below */}
                                    <a href="mailto:info@wowglobalstudies.com" className="text-[15px] text-[#666] hover:text-primary transition-colors block break-all">
                                        info@wowglobalstudies.com
                                    </a>
                                </Card>

                                <Card className="p-6 border border-[#f0eaf2] bg-white md:col-span-2 flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#faf8fb] text-primary flex items-center justify-center shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[16px] text-[#161616] mb-1">Office Hours</h3>
                                        <p className="text-[15px] text-[#666]">
                                            Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </Card>
                            </div>
                            
                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden border border-[#f0eaf2] shadow-sm h-[350px]">
                                <iframe
                                    title="Wow Global Studies Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208.82783816335106!2d73.19645892986853!3d22.270550178663257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc597727fcb75%3A0xcf89972d49813e50!2sWow%20Global%20Studies......%20Best%20Study%20Abroad%20Consultant!5e1!3m2!1sen!2sin!4v1744331936681!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
