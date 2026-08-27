import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

// Pages
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';

// Services
import ServicesLanding from '@/pages/services/ServicesLanding';
import ApplicationProcess from '@/pages/services/ApplicationProcess';
import FinancialAid from '@/pages/services/FinancialAid';
import VisaAssessment from '@/pages/services/VisaAssessment';
import InterviewPreparation from '@/pages/services/InterviewPreparation';
import AirTicket from '@/pages/services/AirTicket';
import PostVisaServices from '@/pages/services/PostVisaServices';

// Coaching
import CoachingLanding from '@/pages/coaching/CoachingLanding';
import IELTS from '@/pages/coaching/IELTS';
import GRE from '@/pages/coaching/GRE';
import PTE from '@/pages/coaching/PTE';
import Duolingo from '@/pages/coaching/Duolingo';
import SAT from '@/pages/coaching/SAT';
import TOEFL from '@/pages/coaching/TOEFL';

// Countries
import CountryLanding from '@/pages/country/CountryLanding';
import USA from '@/pages/country/USA';
import Canada from '@/pages/country/Canada';
import UK from '@/pages/country/UK';
import Australia from '@/pages/country/Australia';
import NewZealand from '@/pages/country/NewZealand';
import Germany from '@/pages/country/Germany';

// Blogs
import BlogList from '@/pages/blogs/BlogList';
import BlogDetail from '@/pages/blogs/BlogDetail';

const AppRoutes = () => {
    return (
        <div className="relative z-0 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Services Routes */}
                    <Route path="/services" element={<ServicesLanding />} />
                    <Route path="/services/application-process" element={<ApplicationProcess />} />
                    <Route path="/services/financial-aid" element={<FinancialAid />} />
                    <Route path="/services/visa-assessment" element={<VisaAssessment />} />
                    <Route path="/services/interview-preparation" element={<InterviewPreparation />} />
                    <Route path="/services/air-ticket" element={<AirTicket />} />
                    <Route path="/services/post-visa-services" element={<PostVisaServices />} />

                    {/* Coaching Routes */}
                    <Route path="/coaching" element={<CoachingLanding />} />
                    <Route path="/coaching/ielts" element={<IELTS />} />
                    <Route path="/coaching/gre" element={<GRE />} />
                    <Route path="/coaching/pte" element={<PTE />} />
                    <Route path="/coaching/duolingo" element={<Duolingo />} />
                    <Route path="/coaching/sat" element={<SAT />} />
                    <Route path="/coaching/toefl-ibt" element={<TOEFL />} />

                    {/* Study In Routes */}
                    <Route path="/study-in" element={<CountryLanding />} />
                    <Route path="/study-in/usa" element={<USA />} />
                    <Route path="/study-in/canada" element={<Canada />} />
                    <Route path="/study-in/uk" element={<UK />} />
                    <Route path="/study-in/australia" element={<Australia />} />
                    <Route path="/study-in/new-zealand" element={<NewZealand />} />
                    <Route path="/study-in/germany" element={<Germany />} />

                    {/* Blogs Routes */}
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/blogs/:slug" element={<BlogDetail />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default AppRoutes;
