import React, { useState, useEffect } from 'react';

const testimonials = [
    { text: "WOW Global changed my entire perspective. They guided me every step of the way. I couldn't have done this without their support.", name: "Amelia R.", since: "Student since 2023", country: "🇬🇧 United Kingdom" },
    { text: "The counselors actually know your name. It feels like a true partnership rather than a typical consultancy. Their care makes all the difference.", name: "Rohan K.", since: "Student since 2022", country: "🇨🇦 Canada" },
    { text: "I came in confused about my options. Six months later, I was studying in Germany. The team made it feel effortless.", name: "Priya M.", since: "Student since 2024", country: "🇩🇪 Germany" },
    { text: "Personalized attention, zero judgment. Exactly the kind of guidance I was looking for. They tailored everything to my goals.", name: "Daniel F.", since: "Student since 2023", country: "🇦🇺 Australia" },
    { text: "This is the best decision I've made for my career. From start to finish, complete professionalism and care.", name: "Sara L.", since: "Student since 2021", country: "🇺🇸 United States" },
    { text: "From application to visa, everything was seamless. Highly recommend WOW Global to anyone looking to study abroad.", name: "Marcus T.", since: "Student since 2024", country: "🇳🇿 New Zealand" }
];

const StudentReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-[80px] lg:py-[120px] px-[20px] lg:px-[60px] bg-white">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[50px] lg:gap-[80px] items-start">
                
                {/* Left Side, Heading (40%) */}
                <div className="w-full lg:w-[40%] lg:sticky lg:top-[120px]">
                    <h2 className="font-sans font-bold text-[36px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[30px]">
                        What Our Students Say<br />
                        <span className="text-primary font-medium">real stories from our community!</span>
                    </h2>
                    
                    {/* Navigation dots */}
                    <div className="flex items-center gap-[16px] mt-[10px]">
                        {/* Dots */}
                        <div className="flex gap-[8px]">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === activeIndex
                                            ? 'w-[32px] h-[8px] bg-primary'
                                            : 'w-[8px] h-[8px] bg-[#e8dced] hover:bg-primary/40'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side, Stacked Cards (60%) */}
                <div className="w-full lg:w-[60%] relative h-[440px] md:h-[400px] lg:h-[360px] mt-[20px] lg:mt-0">
                    {testimonials.map((t, index) => {
                        let diff = index - activeIndex;
                        if (diff < 0) diff += testimonials.length;

                        const isVisible = diff < 3;
                        const isMobile = window.innerWidth < 1024;
                        const translateY = isMobile ? diff * 24 : diff * 16;
                        const scale = 1 - diff * 0.05;
                        const opacity = diff === 0 ? 1 : diff === 1 ? 0.7 : diff === 2 ? 0.4 : 0;
                        const zIndex = 10 - diff;

                        return (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-full transition-all duration-600"
                                style={{
                                    transform: `translateY(${translateY}px) scale(${scale})`,
                                    opacity: isVisible ? opacity : 0,
                                    zIndex,
                                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    pointerEvents: diff === 0 ? 'auto' : 'none',
                                }}
                            >
                                <div className="bg-white rounded-[20px] p-[30px] lg:p-[48px] shadow-[0_8px_40px_rgba(147,51,234,0.08)] border border-[#f0eaf2]">
                                    
                                    {/* Quote mark */}
                                    <div className="font-serif text-[48px] lg:text-[64px] leading-[1] text-primary/15 mb-[5px] lg:mb-[10px]">
                                        &ldquo;
                                    </div>

                                    <p className="text-[15px] lg:text-[19px] leading-[1.6] lg:leading-[1.7] text-[#2a2a2a] font-medium mb-[20px] lg:mb-[32px]">
                                        {t.text}
                                    </p>

                                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[10px] lg:gap-0">
                                        <div>
                                            <div className="font-bold text-[15px] lg:text-[16px] text-[#161616]">{t.name}</div>
                                            <div className="text-[12px] lg:text-[13px] text-[#767676] mt-[2px]">{t.since}</div>
                                        </div>
                                        <div className="text-[12px] lg:text-[14px] font-medium text-primary bg-[#f8f5fa] px-[12px] lg:px-[16px] py-[4px] lg:py-[6px] rounded-[6px]">
                                            {t.country}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Navigation Buttons for Mobile and Desktop */}
                    <div className="absolute -bottom-[40px] lg:top-1/2 left-0 right-0 lg:-translate-y-1/2 z-20 flex justify-between px-[10px] lg:px-0 lg:w-[calc(100%+40px)] lg:left-[-20px] pointer-events-none">
                        
                        <button 
                            onClick={handlePrev}
                            className="pointer-events-auto flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-[8px] border border-[#e8dced] bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md"
                        >
                            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] fill-none stroke-current stroke-[2]"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>

                        <button 
                            onClick={handleNext}
                            className="pointer-events-auto flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-[8px] border border-[#e8dced] bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md"
                        >
                            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] fill-none stroke-current stroke-[2]"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StudentReviews;
