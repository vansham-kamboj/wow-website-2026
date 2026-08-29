import React, { useEffect, useRef, useState } from 'react';
import servicesBg from '@/assets/images/services/services.webp';

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]"><path d="M3 12h4l3-3 4 6 3-3h4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9"/></svg>
        ),
        title: "No/Low Tuition Fee Charge"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]"><path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ),
        title: "Higher Ranked University"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]"><rect x="3" y="8" width="18" height="12" rx="1"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ),
        title: "Better Job Prospects"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]"><circle cx="9" cy="8" r="3"/><path d="M4 20c0-3.3 2.7-5 5-5s5 1.7 5 5M17 8h4M19 6v4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ),
        title: "Skill Based Programs"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]"><path d="M3 12a9 9 0 0 1 15-6.7M21 12a9 9 0 0 1-15 6.7" strokeLinecap="round"/><path d="M18 3v4h-4M6 21v-4h4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ),
        title: "On the Job Training"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]"><path d="M12 3 2 8l10 5 10-5-10-5Z" strokeLinejoin="round"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ),
        title: "Scholarship & Financial Aid"
    }
];

// Cards strictly on LEFT and RIGHT sides of the circle
const desktopAngles = [150, 180, 210, 330, 0, 30];
const mobileAngles = [120, 180, 240, 300, 0, 60];

const Features = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const cardsRef = useRef([]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 820 : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 820);
        window.addEventListener('resize', handleResize, { passive: true });
        
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            
            if (rect.top < windowH && rect.bottom > 0) {
                const progress = (windowH - rect.top) / (windowH + rect.height);
                setScrollProgress(progress);

                // Parallax on background image
                if (imgRef.current) {
                    const translateY = (progress - 0.5) * -80;
                    imgRef.current.style.transform = `translateY(${translateY}px) scale(1.1)`;
                }

                // Parallax on cards, each card shifts slightly differently
                cardsRef.current.forEach((card, i) => {
                    if (!card) return;
                    // Alternate direction: left cards shift up, right cards shift down (or vice versa)
                    const direction = i < 3 ? 1 : -1;
                    const speed = 30 + (i % 3) * 20; // stronger parallax per card
                    const cardShift = (progress - 0.5) * speed * direction;
                    const rotate = (progress - 0.5) * (i % 2 === 0 ? 3 : -3) * direction;
                    card.style.transform = `translate(-50%, -50%) translateY(${cardShift}px) rotate(${rotate}deg)`;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const radius = isMobile ? 85 : 280;
    const centerX = isMobile ? 150 : 380;
    const centerY = isMobile ? 100 : 280;
    
    const containerW = isMobile ? 300 : 760;
    const containerH = isMobile ? 190 : 560;

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
            
            {/* Background Image, parallax, no fade */}
            <img 
                ref={imgRef}
                src={servicesBg} 
                alt="" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
                style={{ transform: 'translateY(0) scale(1.1)' }}
            />
            {/* Very little bit white fade overlay */}
            <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

            {/* Content Layer */}
            <div className="relative z-10 pt-[50px] pb-[60px] lg:pt-[60px] lg:pb-[80px]">
                
                {/* Header, at the very top, bold and big */}
                <div className="relative z-10 px-[20px] lg:px-[60px] max-w-[1200px] mx-auto mb-[20px] lg:mb-[10px]">
                    <h2 className="font-sans font-bold text-[36px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px]">
                        Headstart Programs<br />
                        <span className="text-primary font-medium">unlock your potential!</span>
                    </h2>
                </div>

                {/* Responsive Circular Arch layout */}
                <div 
                    className="relative w-full mx-auto mt-[40px] lg:mt-0 flex justify-center"
                >
                    <style>
                        {`
                        .features-arch-height {
                            height: calc(${containerH}px * min(1, calc((100vw - 20px) / ${containerW})));
                        }
                        .features-arch-scaler {
                            transform: scale(min(1, calc((100vw - 20px) / ${containerW})));
                            transform-origin: top center;
                        }
                        
                        @media (min-width: 820px) {
                            .features-arch-height {
                                height: ${containerH}px;
                            }
                            .features-arch-scaler {
                                transform: scale(1);
                            }
                        }
                        `}
                    </style>

                    <div className="relative w-full features-arch-height flex justify-center mt-[20px] lg:mt-0">
                        <div 
                            className="relative features-arch-scaler flex-none"
                            style={{ 
                                width: `${containerW}px`, 
                                height: `${containerH}px`
                            }}
                        >
                            {/* The visible light circle border */}
                            <div 
                                className="absolute rounded-full border border-primary/20"
                                style={{
                                    width: `${radius * 2}px`,
                                    height: `${radius * 2}px`,
                                    top: `${centerY}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            ></div>

                            {/* Cards positioned along left and right arcs only */}
                            {features.map((f, i) => {
                                const angleDeg = isMobile ? mobileAngles[i] : desktopAngles[i];
                                const angleRad = (angleDeg * Math.PI) / 180;
                                const x = centerX + radius * Math.cos(angleRad);
                                const y = centerY + radius * Math.sin(angleRad);

                                return (
                                    <div
                                        key={i}
                                        ref={el => cardsRef.current[i] = el}
                                        className={`absolute bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(147,51,234,0.25)] group cursor-pointer flex items-center shadow-[0_4px_20px_rgba(147,51,234,0.15)] ${
                                            isMobile 
                                                ? "rounded-[10px] p-[8px] pr-[12px] gap-[8px] w-[140px]" 
                                                : "rounded-[14px] p-[16px] gap-[12px] w-[210px]"
                                        }`}
                                        style={{
                                            left: `${x}px`,
                                            top: `${y}px`,
                                            transform: 'translate(-50%, -50%)',
                                            willChange: 'transform'
                                        }}
                                    >
                                        <div className={`bg-primary flex items-center justify-center flex-none transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                                            isMobile ? "w-[28px] h-[28px] rounded-[6px]" : "w-[40px] h-[40px] rounded-[10px]"
                                        }`}>
                                            {React.cloneElement(f.icon, { className: isMobile ? 'w-[14px] h-[14px] fill-none stroke-white stroke-[1.8]' : 'w-[20px] h-[20px] fill-none stroke-white stroke-[1.8]' })}
                                        </div>
                                        <span className={`font-semibold leading-[1.35] text-[#161616] ${
                                            isMobile ? "text-[10px]" : "text-[13px]"
                                        }`}>{f.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            {/* Top Gradient Fade from Hero */}
            <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Bottom Gradient Fade to ServiceCards */}
            <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#faf8fb] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default Features;
