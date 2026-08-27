import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import heroVideo from '@/assets/videos/hero video.mp4';

const Hero = () => {
    return (
        <div className="pt-[80px] relative overflow-hidden">
            
            {/* Very subtle lavender gradient circle — decorative */}
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
            <section className="relative z-10 flex flex-col min-[820px]:flex-row justify-between items-start min-[820px]:items-center px-[20px] min-[820px]:px-[60px] pt-[32px] min-[820px]:pt-[52px] pb-[40px] gap-[30px]">
                
                {/* Left Side: Heading & Text */}
                <div className="flex flex-col gap-[14px] flex-1">
                    <h1 className="font-sans font-bold text-[36px] min-[820px]:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] m-0 max-w-[800px]">
                        Your Visa Journey Starts With One Decision —<br />
                        <span className="text-[#c026d3] font-medium">Choosing the Right Guide</span>
                    </h1>
                    <p className="text-[15px] leading-[1.65] text-[#767676] max-w-[600px] m-0 mt-[4px]">
                        Every year, thousands of Indian students and professionals dream of studying, working, or settling abroad — but visa rejections crush that dream more often than visa officers do. We've walked 5000+ people through that exact journey, turning confusion into approval letters.
                    </p>
                </div>
                
                {/* Right Side: Button — transparent style */}
                <div className="flex-none">
                    <button className={buttonVariants({
                        variant: "custom",
                        className: "bg-transparent border-2 !border-[#c026d3] text-[#c026d3] hover:bg-[#c026d3] hover:text-white px-[32px] py-[18px] rounded-[8px] font-quicksand font-bold text-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-auto"
                    })}>
                        Start Your Visa Story — Free Consultation
                    </button>
                </div>

            </section>

            {/* Video Area with Stats Overlay */}
            <div className="w-full relative mb-[30px]">
                
                {/* Video Container (full width edge-to-edge, no rounding) */}
                <div className="relative w-full overflow-hidden bg-[#161616]">
                    
                    {/* Subtle dark overlay so white text reads perfectly */}
                    <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

                    <video 
                        className="w-full block aspect-[1/1] min-[820px]:aspect-[3.2/1] object-cover opacity-95 relative z-0" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Stats Overlay directly on video, white text, no bg container */}
                    <div className="absolute bottom-0 left-0 w-full p-[30px] min-[820px]:px-[60px] min-[820px]:py-[40px] flex flex-col min-[820px]:flex-row justify-between items-center gap-[30px] min-[820px]:gap-[20px] z-20">
                        
                        <div className="flex flex-col items-center flex-1 text-center w-full min-[820px]:w-auto border-b min-[820px]:border-b-0 min-[820px]:border-r border-white/20 pb-[20px] min-[820px]:pb-0">
                            <span className="block font-sans font-light text-[42px] min-[820px]:text-[56px] text-white leading-none mb-[8px] tracking-[-1px]">5000+</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Success Stories</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 text-center w-full min-[820px]:w-auto border-b min-[820px]:border-b-0 min-[820px]:border-r border-white/20 pb-[20px] min-[820px]:pb-0">
                            <span className="block font-sans font-light text-[42px] min-[820px]:text-[56px] text-white leading-none mb-[8px] tracking-[-1px]">95%</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Approval Rate</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 text-center w-full min-[820px]:w-auto border-b min-[820px]:border-b-0 min-[820px]:border-r border-white/20 pb-[20px] min-[820px]:pb-0">
                            <span className="block font-sans font-light text-[42px] min-[820px]:text-[56px] text-white leading-none mb-[8px] tracking-[-1px]">20+</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Countries, One Journey</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 text-center w-full min-[820px]:w-auto">
                            <span className="block font-sans font-light text-[42px] min-[820px]:text-[56px] text-white leading-none mb-[8px] tracking-[-1px]">15+</span>
                            <span className="block text-[13px] text-white/90 font-medium uppercase tracking-[0.5px]">Years of Guiding Dreams</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
