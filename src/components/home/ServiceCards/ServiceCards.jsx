import React, { useState, useEffect, useRef } from 'react';
import { FileText, DollarSign, Search, MessageCircle, Send, Home } from 'lucide-react';
import Card from '@/components/common/Card';

import services from '@/data/services.json';

const ServiceCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const totalCards = services.length;

    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 820 : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 820);
        window.addEventListener('resize', handleResize, { passive: true });
        
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % totalCards);
        }, 3000);
        
        return () => {
            clearInterval(intervalRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [totalCards]);

    const cardWidth = isMobile ? 300 : 380;
    const cardHeight = isMobile ? 290 : 320;
    const spacing = isMobile ? 315 : 360;

    const getCardStyle = (index) => {
        let diff = index - activeIndex;
        if (diff > totalCards / 2) diff -= totalCards;
        if (diff < -totalCards / 2) diff += totalCards;

        const absDiff = Math.abs(diff);
        const scale = Math.max(0.65, 1 - absDiff * 0.15); // Slightly larger scale for side cards
        const opacity = Math.max(0.3, 1 - absDiff * 0.35);
        const translateX = diff * spacing; // Spread them out
        const zIndex = 10 - absDiff;

        return {
            transform: `translateX(${translateX}px) scale(${scale})`,
            opacity,
            zIndex,
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            position: 'absolute',
            left: '50%',
            marginLeft: `-${cardWidth / 2}px`,
        };
    };

    const handleClick = (index) => {
        clearInterval(intervalRef.current);
        setActiveIndex(index);
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % totalCards);
        }, 3000);
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);
        setActiveIndex(prev => (prev + 1) % totalCards);
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % totalCards);
        }, 3000);
    };

    const handlePrev = () => {
        clearInterval(intervalRef.current);
        setActiveIndex(prev => (prev - 1 + totalCards) % totalCards);
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % totalCards);
        }, 3000);
    };

    return (
        <section className="pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60px] bg-[#faf8fb] overflow-hidden relative">
            
            {/* Header Area — aligned left matching reference */}
            <div className="relative z-10 px-[20px] lg:px-[60px] max-w-[1200px] mx-auto mb-[30px] lg:mb-[40px]">
                <h2 className="font-sans font-bold text-[32px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px]">
                    Every Visa Story Has These Chapters —<br />
                    <span className="text-primary font-medium">We Guide You Through All of Them</span>
                </h2>
                <p className="text-[14px] lg:text-[15px] leading-[1.65] text-[#767676] max-w-[600px] m-0 mt-[14px]">
                    From the first "will I get approved?" doubt to landing in a new country — here's how we walk with you at every step.
                </p>
            </div>

            {/* Carousel Area */}
            <div className="relative z-10 w-full" style={{ height: isMobile ? '340px' : '420px' }}>
                <div className="relative w-full h-full max-w-[1200px] mx-auto">
                    {services.map((service, index) => {
                        let IconComp = FileText;
                        if (service.iconName === 'FiDollarSign') IconComp = DollarSign;
                        if (service.iconName === 'FiSearch') IconComp = Search;
                        if (service.iconName === 'FiMessageCircle') IconComp = MessageCircle;
                        if (service.iconName === 'FiSend') IconComp = Send;
                        if (service.iconName === 'FiHome') IconComp = Home;
                        
                        return (
                            <div
                                key={index}
                                style={getCardStyle(index)}
                                className="cursor-pointer group"
                                onClick={() => handleClick(index)}
                            >
                                <Card
                                    hoverEffect={false}
                                    className={`rounded-[20px] lg:rounded-[24px] p-[24px] lg:p-[40px] flex flex-col transition-all duration-500 border border-[#f0eaf2] overflow-hidden ${
                                        index === activeIndex
                                            ? 'bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]'
                                            : 'bg-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.02)]'
                                    }`}
                                    style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
                                >
                                    {/* Subtle dot pattern background in bottom right (replaces oversized ghost icon) */}
                                    <div className="absolute right-4 bottom-4 w-[60px] h-[60px] opacity-[0.06] pointer-events-none transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '12px 12px', color: 'var(--color-primary)' }}></div>
                                    
                                    {/* Top Row: Number & Icon */}
                                    <div className="flex justify-between items-start mb-[24px] relative z-10">
                                        <span 
                                            style={{ fontFamily: 'var(--font-family-heading)' }}
                                            className={`text-[48px] font-bold leading-none tracking-[-2px] transition-colors duration-300 ${
                                                index === activeIndex ? 'text-[#161616]' : 'text-[#888]'
                                            }`}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="text-[#e2d5e6] group-hover:text-primary transition-colors duration-300">
                                            <IconComp size={48} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="font-sans font-bold text-[24px] text-[#161616] mb-[4px] leading-[1.2] tracking-[-0.5px] relative z-10">
                                        {service.title}
                                    </h3>
                                    
                                    <span className="block text-[13px] font-bold text-primary mb-[12px] relative z-10">{service.subtitle}</span>
                                    
                                    <p className="text-[14.5px] leading-[1.55] text-[#767676] mb-[16px] pr-[10px] relative z-10">
                                        {service.description}
                                    </p>
                                    
                                    {/* Button */}
                                    <div className="mt-auto relative z-10">
                                        <button className="text-[14px] font-bold text-[#161616] hover:text-primary transition-colors text-left flex items-center gap-2">
                                            Learn more <span className="text-[16px]">→</span>
                                        </button>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}

                    {/* Previous Button - Positioned absolute left */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[48px] h-[48px] rounded-[8px] border border-[#e8dced] bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md"
                    >
                        <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-none stroke-current stroke-[2]"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>

                    {/* Next Button - Positioned absolute right */}
                    <button 
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[48px] h-[48px] rounded-[8px] border border-[#e8dced] bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md"
                    >
                        <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-none stroke-current stroke-[2]"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </div>

            {/* Navigation Progress Bar */}
            <div className="relative z-10 max-w-[800px] mx-auto mt-[40px] px-[30px] pb-[30px]">
                {/* The thin connecting line */}
                <div className="absolute left-[30px] right-[30px] top-[11px] h-[2px] bg-[#e8dced] z-0">
                    {/* Active progress fill */}
                    <div 
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(activeIndex / (totalCards - 1)) * 100}%` }}
                    ></div>
                </div>
                
                {/* Steps container */}
                <div className="relative z-10 flex justify-between items-center w-full">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className="relative group flex flex-col items-center justify-center outline-none"
                        >
                            {/* Circle Node */}
                            <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                                index === activeIndex ? 'bg-primary border-[4px] border-primary/20 scale-125' : 
                                index < activeIndex ? 'bg-primary border-2 border-primary' : 'bg-[#faf8fb] border-[2px] border-[#e8dced] group-hover:border-primary/50'
                            }`}>
                                <div className={`w-[6px] h-[6px] rounded-full ${index === activeIndex || index < activeIndex ? 'bg-white' : 'bg-transparent'}`}></div>
                            </div>
                            
                            {/* Number label below */}
                            <span className={`absolute top-[32px] font-bold text-[13px] transition-colors duration-300 ${
                                index === activeIndex ? 'text-primary scale-110' : 'text-[#888]'
                            }`}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
