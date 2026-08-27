import React, { useEffect, useRef, useState } from 'react';
import footerBg from '@/assets/images/footer img.png';
import { FiCheckCircle, FiAward, FiGlobe, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const features = [
    // Outer Arch (4 cards)
    { icon: <FiTrendingUp className="w-[18px] h-[18px] text-white" />, title: "We've Seen Every Rejection Reason — So Yours Won't Happen", angle: 145, radius: 260 },
    { icon: <FiAward className="w-[18px] h-[18px] text-white" />, title: "Certified Experts Who've Walked This Path 1000s of Times", angle: 215, radius: 260 },
    { icon: <FiGlobe className="w-[18px] h-[18px] text-white" />, title: "Every Document Told Right, So Your Story Gets Approved", angle: 325, radius: 260 },
    { icon: <FiCheckCircle className="w-[18px] h-[18px] text-white" />, title: "No Hidden Chapters — Just Honest, Transparent Pricing", angle: 35, radius: 260 },
    
    // Inner Arch (2 cards)
    { icon: <FiUsers className="w-[18px] h-[18px] text-white" />, title: "From First Call to Boarding Pass — Faster Than You Think", angle: 200, radius: 155 },
    { icon: <FiShield className="w-[18px] h-[18px] text-white" />, title: "Not Sure If You Qualify? Let's Find Out, Free", angle: 340, radius: 155 }
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const cardsRef = useRef([]);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
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
                    const direction = features[i].angle > 90 && features[i].angle < 270 ? 1 : -1;
                    const speed = 20 + (i % 3) * 15; 
                    const cardShift = (progress - 0.5) * speed * direction;
                    const rotate = (progress - 0.5) * (i % 2 === 0 ? 3 : -3) * direction;
                    card.style.transform = `translate(-50%, -50%) translateY(${cardShift}px) rotate(${rotate}deg)`;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const centerX = 380;
    const centerY = 310;

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden">
            
            {/* Background Image — parallax with NO fade/overlay */}
            <img 
                ref={imgRef}
                src={footerBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
                style={{ transform: 'translateY(0) scale(1.1)' }}
            />

            {/* Content Layer */}
            <div className="relative z-10 py-[40px] min-[1100px]:py-[40px] px-[20px] min-[820px]:px-[60px] max-w-[1400px] mx-auto flex flex-col min-[1100px]:flex-row items-center justify-between gap-[40px] min-[1100px]:gap-[20px]">
                
                {/* Header (Left on Desktop) */}
                <div className="w-full min-[1100px]:w-[35%] text-left z-20">
                    <h2 className="font-sans font-bold text-[36px] min-[820px]:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px]">
                        Why Choose Us<br />
                        <span className="text-[#c026d3] font-medium">your trusted education partner!</span>
                    </h2>
                    <p className="text-[16px] text-[#555] mt-[24px] leading-[1.6]">
                        We don't just process applications; we craft success stories. Our team of certified experts ensures your journey is smooth, transparent, and built for approval.
                    </p>
                </div>

                {/* Arch Layout (Right on Desktop) */}
                <div className="w-full min-[1100px]:w-[65%] relative flex justify-center min-[1100px]:justify-end">
                    
                    <style>
                        {`
                        .arch-height-wrapper {
                            height: calc(620px * min(1, calc((100vw - 40px) / 760)));
                        }
                        .arch-scaler {
                            transform: scale(min(1, calc((100vw - 40px) / 760)));
                            transform-origin: top center;
                        }
                        
                        @media (min-width: 1100px) {
                            .arch-height-wrapper {
                                height: calc(620px * min(1, calc((100vw * 0.65 - 80px) / 760)));
                            }
                            .arch-scaler {
                                transform: scale(min(1, calc((100vw * 0.65 - 80px) / 760)));
                                transform-origin: top right;
                            }
                        }
                        @media (min-width: 1350px) {
                            .arch-height-wrapper {
                                height: 620px;
                            }
                            .arch-scaler {
                                transform: scale(1);
                            }
                        }
                        `}
                    </style>

                    <div className="relative w-full arch-height-wrapper flex justify-center min-[1100px]:justify-end">
                        <div 
                            className="relative arch-scaler flex-none"
                            style={{ 
                                width: '760px', 
                                height: '620px'
                            }}
                        >
                            {/* Outer circle border */}
                            <div 
                                className="absolute rounded-full border-[1.5px] border-[#c026d3]/20"
                                style={{
                                    width: `520px`,
                                    height: `520px`,
                                    top: `${centerY}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            ></div>

                            {/* Inner circle border */}
                            <div 
                                className="absolute rounded-full border-[1.5px] border-[#c026d3]/30"
                                style={{
                                    width: `310px`,
                                    height: `310px`,
                                    top: `${centerY}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            ></div>

                            {/* Cards */}
                            {features.map((f, i) => {
                                const angleRad = (f.angle * Math.PI) / 180;
                                const x = centerX + f.radius * Math.cos(angleRad);
                                const y = centerY + f.radius * Math.sin(angleRad);

                                return (
                                    <div
                                        key={i}
                                        ref={el => cardsRef.current[i] = el}
                                        className="absolute bg-white rounded-[14px] p-[14px] flex items-center gap-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#f0eaf2] w-[260px] will-change-transform transition-transform duration-300 hover:scale-[1.03] cursor-pointer z-10 group"
                                        style={{
                                            left: `${x}px`,
                                            top: `${y}px`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <div className="w-[36px] h-[36px] rounded-[8px] bg-[#c026d3] flex items-center justify-center flex-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                                            {f.icon}
                                        </div>
                                        <span className="font-quicksand font-bold text-[13px] leading-[1.35] text-[#161616]">{f.title}</span>
                                    </div>
                                );
                            })}

                            {/* Central Button */}
                            <div 
                                className="absolute flex justify-center items-center"
                                style={{
                                    top: `${centerY + 20}px`,
                                    left: `${centerX}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Button variant="custom" className="bg-[#c026d3] hover:bg-[#a21caf] text-white px-[32px] py-[14px] rounded-[8px] font-quicksand font-bold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg h-auto">
                                    Get Free Consulting
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
