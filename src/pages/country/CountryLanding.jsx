import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import FAQ from '@/components/home/FAQ/FAQ';

import countriesBg from '@/assets/images/countries/countries_section_bg.webp';
import countriesList from '@/data/countries.json';

const countryLandingFaqs = [
    {
        question: "Which country is easiest to get a visa for?",
        answer: "Visa ease fluctuates based on current government policies. However, countries with clear points-based systems (like Australia and Canada) or straightforward post-study work routes (like the UK) are generally highly predictable if you meet the core financial and academic requirements."
    },
    {
        question: "Which country is most affordable overall?",
        answer: "Germany is often the most affordable due to low or zero tuition fees at public universities, though you must prove living expenses in a blocked account. After Germany, New Zealand and certain regions in Canada tend to be more affordable than major hubs in the USA or UK."
    },
    {
        question: "Can I switch my target country after starting the process?",
        answer: "Yes, during the early counselling and university shortlisting phase, switching is easy. However, once you start applying for specific visas or paying application fees, switching becomes expensive and time-consuming. We help you make a firm choice early on to avoid this."
    }
];

const countryTeasers = {
    "USA": "The world's largest higher-education system, and the most competitive.",
    "Canada": "Study, work, and settle — one of the clearest PR pathways for students.",
    "UK": "One-year master's programs and centuries-old academic prestige.",
    "Australia": "Strong post-study work rights and a lifestyle students don't want to leave.",
    "New Zealand": "Smaller class sizes, easier PR pathway, and a lower cost of living.",
    "Germany": "Low or zero tuition at public universities — even for international students."
};

const CountryLanding = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Fade effect interval for the hero
    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % countriesList.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <SEO 
                title="Study Abroad Destinations - Wow Global Studies" 
                description="Explore top study abroad destinations: USA, Canada, UK, Australia, New Zealand, and Germany. Find the right country for your education and career."
            />

            {/* 1. Hero Section (Reused orbiting layout) */}
            <div 
                className="relative w-full pt-[150px] pb-[80px] lg:pt-[190px] lg:pb-[120px] flex flex-col overflow-hidden"
                style={{ 
                    backgroundImage: `url("${countriesBg}")`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Gradient overlay to fade smoothly into the white section below */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5fa]/90 via-[#f8f5fa]/90 to-white z-0"></div>

                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        
                        <h1 className="font-sans font-bold text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1.5px] mb-6">
                            Six Countries. <br className="hidden md:block"/>
                            <span className="text-primary font-medium">One Decision That Changes Everything.</span>
                        </h1>
                        
                        <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#555] mb-8 max-w-[550px] mx-auto lg:mx-0 font-medium">
                            Every country has different tuition costs, visa rules, and post-study work timelines. This page helps you narrow down where your story begins.
                        </p>
                        
                        <Link to="/contact">
                            <Button variant="custom" className="bg-primary hover:bg-primary-hover text-white px-[28px] py-[14px] rounded-[8px] font-bold text-[15px] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center h-auto">
                                Talk to a Country Expert
                            </Button>
                        </Link>
                    </div>

                    {/* Revolving Circle Visual */}
                    <div className="flex-1 w-full max-w-[500px] relative z-10 flex items-center justify-center h-[340px] md:h-[460px]">
                        
                        {/* Thin dashed circular orbit */}
                        <div className="absolute w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full border-[1.5px] border-primary/20"></div>

                        <style dangerouslySetInnerHTML={{__html: `
                            :root {
                                --orbit-radius: 170px;
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

                        <div className="absolute w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full orbit-container pointer-events-none z-30">
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
                                        <div className="orbit-item flex flex-col items-center gap-2">
                                            <Card 
                                                hoverEffect={false}
                                                className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] !rounded-full !p-0 border-[2px] border-white overflow-hidden shadow-md"
                                            >
                                                <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
                                            </Card>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Central Fading Images */}
                        <div className="relative w-[180px] h-[180px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(147,51,234,0.15)] border-[6px] border-white z-10 bg-[#faf8fb]">
                            {countriesList.map((country, idx) => (
                                <img 
                                    key={country.id}
                                    src={country.image} 
                                    alt={country.name} 
                                    loading="lazy"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Countries Grid */}
            <div className="bg-white flex-grow relative z-20">
                <div className="max-w-[1200px] mx-auto px-[20px] lg:px-[60px] pb-16 lg:pb-24 pt-8">
                    
                    <div className="text-center mb-16">
                        <h2 className="font-sans font-bold text-[32px] md:text-[42px] leading-[1.2] text-[#161616] tracking-[-1px]">
                            Where Would You Like to Go?
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countriesList.map((country) => {
                            const teaser = countryTeasers[country.name] || "";
                            
                            return (
                                <Link to={`/study-in/${country.name.toLowerCase().replace(/\s+/g, '-')}`} key={country.id} className="group flex flex-col h-full">
                                    <Card className="flex-grow border border-[#f0eaf2] bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(147,51,234,0.12)] overflow-hidden !p-0 flex flex-col">
                                        
                                        <div className="h-[200px] w-full overflow-hidden relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                            <img 
                                                src={country.image} 
                                                alt={country.name} 
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            {/* Small Flag Badge */}
                                            <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                                                <img src={country.flag} alt={`${country.name} flag`} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="font-sans font-bold text-[22px] text-[#161616] mb-3 group-hover:text-primary transition-colors">
                                                {country.name}
                                            </h3>
                                            <p className="text-[14.5px] leading-[1.6] text-[#666] mb-6 flex-grow">
                                                {teaser}
                                            </p>
                                            
                                            <div className="flex items-center text-primary font-bold text-[14px]">
                                                Explore <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                        
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* 3. FAQ */}
                <FAQ data={countryLandingFaqs} />
            </div>
        </div>
    );
};

export default CountryLanding;
