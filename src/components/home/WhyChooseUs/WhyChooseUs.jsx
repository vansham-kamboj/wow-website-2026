import React, { useEffect, useRef, useState } from 'react';
import footerBg from '@/assets/images/footer_img.webp';
import { CheckCircle, Award, Globe, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/common/Card';

const featuresData = [
    // Outer Arch (4 cards) - ring: 'outer'
    { icon: <TrendingUp />, title: "Zero Rejections", angle: 145, ring: 'outer' },
    { icon: <Award />, title: "Certified Experts", angle: 215, ring: 'outer' },
    { icon: <Globe />, title: "Perfect Docs", angle: 325, ring: 'outer' },
    { icon: <CheckCircle />, title: "Transparent Fees", angle: 35, ring: 'outer' },
    
    // Inner Arch (2 cards) - ring: 'inner'
    { icon: <Users />, title: "Fast Processing", angle: 200, ring: 'inner' },
    { icon: <Shield />, title: "Free Check", angle: 340, ring: 'inner' }
];

const WhyChooseUs = () => {
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
                    const translateY = (progress - 0.5) * -60;
                    imgRef.current.style.transform = `translateY(${translateY}px) scale(1.1)`;
                }

                // Parallax on cards — each card shifts slightly differently
                cardsRef.current.forEach((card, i) => {
                    if (!card) return;
                    // Left cards move opposite to right cards
                    const direction = featuresData[i].angle > 90 && featuresData[i].angle < 270 ? 1 : -1;
                    const speed = 20 + (i % 3) * 15; 
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

    const outerRadius = isMobile ? 150 : 260;
    const innerRadius = isMobile ? 85 : 155;
    
    const containerW = isMobile ? 320 : 760;
    const containerH = isMobile ? 360 : 620;
    
    const centerX = containerW / 2;
    const centerY = containerH / 2;

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#faf8fb]">
            
            {/* Background Image — parallax with NO fade/overlay */}
            <img 
                ref={imgRef}
                src={footerBg} 
                alt="" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
                style={{ transform: 'translateY(0) scale(1.1)' }}
            />
            {/* Very little bit white fade overlay */}
            <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

            {/* Content Layer */}
            <div className="relative z-10 py-[40px] min-[1100px]:py-[40px] px-[20px] min-[820px]:px-[60px] max-w-[1400px] mx-auto flex flex-col min-[1100px]:flex-row items-center justify-between gap-[40px] min-[1100px]:gap-[20px]">
                
                {/* Header (Left on Desktop) */}
                <div className="w-full min-[1100px]:w-[35%] text-left z-20">
                    <h2 className="font-sans font-bold text-[36px] min-[820px]:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px]">
                        Why Choose Us<br />
                        <span className="text-primary font-medium">your trusted education partner!</span>
                    </h2>
                    <p className="text-[16px] text-[#555] mt-[24px] leading-[1.6]">
                        We don't just process applications; we craft success stories. Our team of certified experts ensures your journey is smooth, transparent, and built for approval.
                    </p>
                </div>

                {/* Arch Layout (Right on Desktop) */}
                <div className="w-full min-[1100px]:w-[65%] relative flex justify-center min-[1100px]:justify-end">
                    
                    <style>
                        {`
                        .why-arch-height {
                            height: calc(${containerH}px * min(1, calc((100vw - 40px) / ${containerW})));
                        }
                        .why-arch-scaler {
                            transform: scale(min(1, calc((100vw - 40px) / ${containerW})));
                            transform-origin: top center;
                        }
                        
                        @media (min-width: 1100px) {
                            .why-arch-height {
                                height: calc(${containerH}px * min(1, calc((100vw * 0.65 - 80px) / ${containerW})));
                            }
                            .why-arch-scaler {
                                transform: scale(min(1, calc((100vw * 0.65 - 80px) / ${containerW})));
                                transform-origin: top right;
                            }
                        }
                        @media (min-width: 1350px) {
                            .why-arch-height {
                                height: ${containerH}px;
                            }
                            .why-arch-scaler {
                                transform: scale(1);
                            }
                        }
                        `}
                    </style>

                    <div className="relative w-full why-arch-height flex justify-center min-[1100px]:justify-end mt-[20px] min-[1100px]:mt-0">
                        <div 
                            className="relative why-arch-scaler flex-none"
                            style={{ 
                                width: `${containerW}px`, 
                                height: `${containerH}px`
                            }}
                        >
                            {/* Outer circle border */}
                            <div 
                                className="absolute rounded-full border-[1.5px] border-primary/20"
                                style={{
                                    width: `${outerRadius * 2}px`,
                                    height: `${outerRadius * 2}px`,
                                    top: `${centerY}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            ></div>

                            {/* Inner circle border */}
                            <div 
                                className="absolute rounded-full border-[1.5px] border-primary/30"
                                style={{
                                    width: `${innerRadius * 2}px`,
                                    height: `${innerRadius * 2}px`,
                                    top: `${centerY}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            ></div>

                            {/* Cards */}
                            {featuresData.map((f, i) => {
                                const radius = f.ring === 'outer' ? outerRadius : innerRadius;
                                const angleRad = (f.angle * Math.PI) / 180;
                                const x = centerX + radius * Math.cos(angleRad);
                                const y = centerY + radius * Math.sin(angleRad);

                                return (
                                    <Card
                                        key={i}
                                        ref={el => cardsRef.current[i] = el}
                                        hoverEffect={false}
                                        className={`!absolute flex items-center will-change-transform hover:scale-[1.03] cursor-pointer z-10 group ${
                                            isMobile 
                                                ? "rounded-[10px] !p-[8px] !pr-[12px] gap-[8px] w-[150px]" 
                                                : "rounded-[14px] !p-[14px] gap-[12px] w-[260px]"
                                        }`}
                                        style={{
                                            left: `${x}px`,
                                            top: `${y}px`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <div className={`bg-primary flex items-center justify-center flex-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                                            isMobile ? "w-[26px] h-[26px] rounded-[6px]" : "w-[36px] h-[36px] rounded-[8px]"
                                        }`}>
                                            {React.cloneElement(f.icon, { className: isMobile ? 'w-[14px] h-[14px] text-white' : 'w-[18px] h-[18px] text-white' })}
                                        </div>
                                        <span className={`font-bold text-[#161616] ${
                                            isMobile ? "text-[10px] leading-[1.2]" : "text-[13px] leading-[1.35]"
                                        }`}>{f.title}</span>
                                    </Card>
                                );
                            })}

                            {/* Central Button */}
                            <div 
                                className="absolute flex justify-center items-center"
                                style={{
                                    top: `${centerY + (isMobile ? 15 : 20)}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Button variant="custom" className={`bg-primary hover:bg-primary-hover text-white transition-all duration-300 shadow-md hover:shadow-lg h-auto font-bold ${
                                    isMobile ? "px-[16px] py-[10px] rounded-[6px] text-[12px]" : "px-[32px] py-[14px] rounded-[8px] text-[15px]"
                                }`}>
                                    Get Free Consulting
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Gradient Fade for Section Bridging */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#f8f5fa] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default WhyChooseUs;
