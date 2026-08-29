import React from 'react';
import { MessageSquareText } from 'lucide-react';

const FloatingCTA = () => {
    const handleOpenForm = () => {
        window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
    };

    return (
        <button
            onClick={handleOpenForm}
            className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-primary-hover hover:scale-110 transition-all duration-300 group flex items-center justify-center animate-[bounce_3s_infinite]"
            aria-label="Open enquiry form"
        >
            {/* The icon */}
            <MessageSquareText size={28} className="group-hover:animate-pulse" strokeWidth={2} />
            
            {/* Ping effect behind the button to draw attention */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping -z-10"></span>
        </button>
    );
};

export default FloatingCTA;
