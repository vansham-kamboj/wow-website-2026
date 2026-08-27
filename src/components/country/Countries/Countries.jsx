import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import countriesBg from '@/assets/images/countries/countries section bg.png';

import countriesList from '@/data/countries.json';

const Countries = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Fade effect interval
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % countriesList.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            className="relative w-full min-h-[100vh] flex flex-col justify-center py-[40px] overflow-hidden"
            style={{ 
                backgroundImage: `url("${countriesBg}")`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            
            {/* Lavender/Purple faded overlay */}
            <div className="absolute inset-0 bg-[#f8f5fa]/90 z-0"></div>

            {/* Top Bar: Heading and Button */}
            <div className="flex justify-between items-end mb-[40px] px-[20px] min-[820px]:px-[60px] max-w-[1200px] mx-auto w-full relative z-10">
                <h2 className="font-sans font-bold text-[36px] min-[820px]:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px]">
                    Top Destinations <br/>
                    <span className="text-[#9333ea] font-medium">for Studies</span>
                </h2>
                
                <Button variant="custom" className="flex items-center gap-2 bg-[#f4d160] hover:bg-[#eac44e] text-[#161616] px-[24px] py-[12px] rounded-[8px] font-quicksand font-bold text-[14px] transition-colors shadow-sm h-auto">
                    View All Countries
                    <span className="flex items-center justify-center w-[24px] h-[24px] rounded-full border border-[#161616] text-[12px]">
                        →
                    </span>
                </Button>
            </div>

            {/* Revolving Circle Area */}
            <div className="relative w-full max-w-[800px] mx-auto h-[320px] min-[820px]:h-[460px] flex items-center justify-center z-10">
                
                {/* Thin dashed circular orbit */}
                <div className="absolute w-[300px] h-[300px] min-[820px]:w-[420px] min-[820px]:h-[420px] rounded-full border-[1.5px] border-[#9333ea]/15"></div>

                {/* Revolving Container */}
                <style dangerouslySetInnerHTML={{__html: `
                    :root {
                        --orbit-radius: 150px;
                    }
                    @media (min-width: 820px) {
                        :root {
                            --orbit-radius: 210px;
                        }
                    }
                    @keyframes orbit {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes counter-orbit {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(-360deg); }
                    }
                    .orbit-container {
                        animation: orbit 40s linear infinite;
                    }
                    .orbit-item {
                        animation: counter-orbit 40s linear infinite;
                    }
                `}} />

                <div className="absolute w-[300px] h-[300px] min-[820px]:w-[420px] min-[820px]:h-[420px] rounded-full orbit-container pointer-events-none z-30">
                    {countriesList.map((country, idx) => {
                        const angle = (idx * (360 / countriesList.length));
                        return (
                            <div 
                                key={country.id}
                                className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center"
                                style={{
                                    transform: `rotate(${angle}deg) translate(var(--orbit-radius)) rotate(-${angle}deg)`,
                                    marginTop: '-30px',
                                    marginLeft: '-30px'
                                }}
                            >
                                <div className="orbit-item flex flex-col items-center gap-2 pointer-events-auto">
                                    <div className="w-[40px] h-[40px] min-[820px]:w-[54px] min-[820px]:h-[54px] rounded-full overflow-hidden shadow-md border-[2px] border-white bg-white">
                                        <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="font-sans font-bold text-[11px] min-[820px]:text-[13px] text-[#9333ea] bg-[#f8f5fa]/95 px-[8px] py-[2px] rounded-[6px] whitespace-nowrap text-center shadow-sm relative z-40">
                                        {country.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Central Fading Images */}
                <div className="relative w-[190px] h-[190px] min-[820px]:w-[280px] min-[820px]:h-[280px] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(88,51,94,0.2)] border-[6px] border-white z-10">
                    {countriesList.map((country, idx) => (
                        <img 
                            key={country.id}
                            src={country.image} 
                            alt={country.name} 
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Countries;
