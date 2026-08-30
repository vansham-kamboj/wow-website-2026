import React from 'react';
import EligibilityChecker from '../EligibilityChecker/EligibilityChecker';
import heroVideo from '@/assets/videos/hero video.mp4';

const Hero = () => {
    return (
        <div className="pt-[80px] relative overflow-hidden">
            
            {/* Very subtle lavender gradient circle, decorative */}
            <div 
                className="absolute pointer-events-none z-0"
                style={{
                    width: '1400px',
                    height: '1400px',
                    top: '-400px',
                    right: '-350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(192,38,211,0.08) 0%, rgba(192,38,211,0.04) 40%, transparent 70%)',
                }}
            ></div>

            {/* Top Area: Heading on left, Button on right */}
            <section className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center px-[20px] lg:px-[60px] pt-[32px] lg:pt-[52px] pb-[40px] gap-[30px]">
                
                {/* Left Side: Heading & Text */}
                <div className="flex flex-col gap-[14px] flex-1">
                    <h1 className="font-sans font-bold text-[22px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] m-0 max-w-[800px]">
                        Your Visa Journey Starts With One Decision , <br />
                        <span className="text-primary font-medium">Choosing the Right Guide</span>
                    </h1>
                    <p className="text-[15px] leading-[1.65] text-[#767676] max-w-[600px] m-0 mt-[4px]">
                        Every year, thousands of Indian students and professionals dream of studying, working, or settling abroad, but visa rejections crush that dream more often than visa officers do. We've walked 5000+ people through that exact journey, turning confusion into approval letters.
                    </p>
                </div>
                
                {/* Right Side: Interactive Eligibility Checker Widget */}
                <div className="flex-none w-full lg:w-auto mt-[20px] lg:mt-0 z-20">
                    <EligibilityChecker />
                </div>

            </section>

            {/* Video Area with Stats Overlay */}
            <div className="w-full relative mb-[30px]">
                
                {/* Video Container (full width edge-to-edge, no rounding) */}
                <div className="relative w-full overflow-hidden bg-[#161616]">
                    
                    {/* Subtle dark overlay so white text reads perfectly */}
                    <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

                    <video 
                        className="w-full block aspect-[1/1] lg:aspect-[3.2/1] object-cover opacity-95 relative z-0" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Stats Overlay directly on video, white text, no bg container */}
                    <div className="absolute bottom-0 left-0 w-full px-[10px] py-[20px] lg:px-[60px] lg:py-[40px] flex flex-row justify-between items-center z-20">
                        
                        <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                            <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">5000+</span>
                            <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Success<br className="block lg:hidden" />Stories</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                            <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">95%</span>
                            <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Approval<br className="block lg:hidden" />Rate</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 text-center border-r border-white/20">
                            <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">20+</span>
                            <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Countries</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 text-center">
                            <span className="block font-sans font-light text-[14px] lg:text-[56px] text-white leading-none mb-[2px] lg:mb-[8px] tracking-tight">15+</span>
                            <span className="block text-[7px] lg:text-[13px] text-white/90 font-medium uppercase tracking-widest lg:tracking-[0.5px]">Years<br className="block lg:hidden" />Exp</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
