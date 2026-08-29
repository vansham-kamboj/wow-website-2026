import React, { useState, useEffect } from 'react';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const EnquiryPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        country: 'USA'
    });

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('wow_enquiry_shown');
        
        if (!hasSeenPopup) {
            setIsVisible(true);
        }

        const handleOpenEvent = () => {
            setIsVisible(true);
        };

        window.addEventListener('open-enquiry-modal', handleOpenEvent);
        
        return () => {
            window.removeEventListener('open-enquiry-modal', handleOpenEvent);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('wow_enquiry_shown', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reuse contact form logic concept (in a real app, dispatch to API)
        console.log('Enquiry Submitted:', formData);
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div 
                className="absolute inset-0" 
                onClick={handleClose}
                aria-label="Close modal"
            />
            
            <Card className="relative w-full max-w-[450px] p-8 shadow-2xl bg-white border border-[#f0eaf2] animate-in zoom-in-95 duration-300 z-10">
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="mb-6">
                    <h3 className="font-sans font-bold text-[24px] text-[#161616] leading-tight mb-2">
                        Not Sure Where to Start?
                    </h3>
                    <p className="text-[15px] text-[#666] leading-relaxed">
                        Drop your details below. We will call you back and guide you through the process step by step.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="enquiry-name" className="text-[13px] font-bold text-[#444] uppercase tracking-wide">
                            Name
                        </label>
                        <input 
                            id="enquiry-name"
                            type="text" 
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-[#e5e0e8] bg-[#faf8fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="enquiry-phone" className="text-[13px] font-bold text-[#444] uppercase tracking-wide">
                            Phone Number
                        </label>
                        <input 
                            id="enquiry-phone"
                            type="tel" 
                            required
                            placeholder="+91 99999 99999"
                            className="w-full px-4 py-3 rounded-xl border border-[#e5e0e8] bg-[#faf8fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="enquiry-country" className="text-[13px] font-bold text-[#444] uppercase tracking-wide">
                            Interested In
                        </label>
                        <select
                            id="enquiry-country"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e5e0e8] bg-[#faf8fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px] appearance-none"
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
                    </div>

                    <Button 
                        type="submit" 
                        variant="custom" 
                        className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-[16px] shadow-lg hover:-translate-y-0.5 transition-all mt-4"
                    >
                        Get a Free Callback
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EnquiryPopup;
