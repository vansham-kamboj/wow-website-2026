import React from 'react';
import SEO from '@/components/common/SEO';

import Hero from '@/components/home/Hero/Hero';
import Features from '@/components/home/Features/Features';
import ServiceCards from '@/components/home/ServiceCards/ServiceCards';
import Countries from '@/components/country/Countries/Countries';
import StudentReviews from '@/components/home/StudentReviews/StudentReviews';
import WhyChooseUs from '@/components/home/WhyChooseUs/WhyChooseUs';
import FAQ from '@/components/home/FAQ/FAQ';

const Home = () => {
    return (
        <>
            <SEO title="Home - Wow Global Studies" description="Innovating for a better future, one step at a time." />
            <Hero />
            <Features />
            <ServiceCards />
            <Countries />
            <WhyChooseUs />
            <StudentReviews />
            <FAQ />
        </>
    );
};

export default Home;
