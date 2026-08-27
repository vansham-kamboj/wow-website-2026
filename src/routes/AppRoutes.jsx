import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

// Pages
const Home = lazy(() => import('@/pages/Home'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Contact = lazy(() => import('@/pages/Contact'));

// Services
const ServicesLanding = lazy(() => import('@/pages/services/ServicesLanding'));
const FreeCounselling = lazy(() => import('@/pages/services/FreeCounselling'));
const ApplicationProcess = lazy(() => import('@/pages/services/ApplicationProcess'));
const FinancialAid = lazy(() => import('@/pages/services/FinancialAid'));
const VisaAssessment = lazy(() => import('@/pages/services/VisaAssessment'));
const InterviewPreparation = lazy(() => import('@/pages/services/InterviewPreparation'));
const AirTicket = lazy(() => import('@/pages/services/AirTicket'));
const PostVisaServices = lazy(() => import('@/pages/services/PostVisaServices'));

// Coaching
const CoachingLanding = lazy(() => import('@/pages/coaching/CoachingLanding'));
const IELTS = lazy(() => import('@/pages/coaching/IELTS'));
const GRE = lazy(() => import('@/pages/coaching/GRE'));
const PTE = lazy(() => import('@/pages/coaching/PTE'));
const Duolingo = lazy(() => import('@/pages/coaching/Duolingo'));
const SAT = lazy(() => import('@/pages/coaching/SAT'));
const TOEFL = lazy(() => import('@/pages/coaching/TOEFL'));

// Countries
const CountryLanding = lazy(() => import('@/pages/country/CountryLanding'));
const USA = lazy(() => import('@/pages/country/USA'));
const Canada = lazy(() => import('@/pages/country/Canada'));
const UK = lazy(() => import('@/pages/country/UK'));
const Australia = lazy(() => import('@/pages/country/Australia'));
const NewZealand = lazy(() => import('@/pages/country/NewZealand'));
const Germany = lazy(() => import('@/pages/country/Germany'));

// Blogs
const BlogList = lazy(() => import('@/pages/blogs/BlogList'));
const BlogDetail = lazy(() => import('@/pages/blogs/BlogDetail'));

const AppRoutes = () => {
    return (
        <div className="relative z-0 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                                <Suspense fallback={<div className="flex h-[50vh] w-full items-center justify-center text-primary font-bold">Loading...</div>}>
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Services Routes */}
                    <Route path="/services" element={<ServicesLanding />} />
                    <Route path="/services/free-counselling" element={<FreeCounselling />} />
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
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default AppRoutes;
