import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-[#f8f5fa] pt-[56px] px-[20px] min-[820px]:px-[40px] pb-[64px]">
            <h2 className="font-sans font-bold text-[26px] min-[820px]:text-[32px] leading-[1.28] text-[#161616] mb-[32px] min-[820px]:mb-[52px]">
                Trusted by a<br />Growing Community
            </h2>
            <div className="grid grid-cols-2 min-[820px]:grid-cols-4 gap-y-[32px] min-[820px]:gap-y-0">
                
                <div className="py-[18px] px-0 min-[820px]:px-[28px] min-[820px]:border-l min-[820px]:border-[#e8dced]">
                    <span className="block text-[12px] text-[#8f8f8f] mb-[38px]">Sessions completed</span>
                    <span className="block font-sans font-semibold text-[36px] min-[820px]:text-[46px] text-primary tracking-[-1px]">12K+</span>
                </div>
                
                <div className="py-[18px] px-[28px] border-l border-[#e8dced]">
                    <span className="block text-[12px] text-[#8f8f8f] mb-[38px]">Average member rating</span>
                    <span className="block font-sans font-semibold text-[36px] min-[820px]:text-[46px] text-primary tracking-[-1px]">4.9</span>
                </div>
                
                <div className="py-[18px] px-0 min-[820px]:px-[28px] border-l-0 min-[820px]:border-l border-[#e8dced]">
                    <span className="block text-[12px] text-[#8f8f8f] mb-[38px] uppercase tracking-[0.6px]">Client Retention Rate</span>
                    <span className="block font-sans font-semibold text-[36px] min-[820px]:text-[46px] text-primary tracking-[-1px]">85%</span>
                </div>
                
                <div className="py-[18px] px-[28px] border-l border-[#e8dced]">
                    <span className="block text-[12px] text-[#8f8f8f] mb-[38px] uppercase tracking-[0.6px]">Years Running</span>
                    <span className="block font-sans font-semibold text-[36px] min-[820px]:text-[46px] text-primary tracking-[-1px]">6 years</span>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
