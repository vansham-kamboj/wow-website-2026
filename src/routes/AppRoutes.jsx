import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminRoute from '@/components/admin/AdminRoute';

// Pages
const Home = lazy(() => import('@/pages/Home'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Contact = lazy(() => import('@/pages/Contact'));

// Admin Pages
const Login = lazy(() => import('@/pages/admin/Login'));
const Leads = lazy(() => import('@/pages/admin/Leads'));
const Testimonials = lazy(() => import('@/pages/admin/Testimonials'));

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

const PublicLayout = ({ children }) => (
    <div className="relative z-0 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<div className="flex h-[50vh] w-full items-center justify-center text-primary font-bold">Loading...</div>}>
            <Routes>
                {/* Admin Routes (No public Header/Footer) */}
                <Route path="/admin/login" element={<Login />} />
                
                <Route path="/admin" element={<AdminRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route path="leads" element={<Leads />} />
                        <Route path="testimonials" element={<Testimonials />} />
                        <Route index element={<Leads />} /> {/* Default /admin redirects to leads implicitly or renders it */}
                    </Route>
                </Route>

                {/* Public Routes */}
                <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                <Route path="/about-us" element={<PublicLayout><AboutUs /></PublicLayout>} />
                <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

                    {/* Services Routes */}
                    <Route path="/services" element={<PublicLayout><ServicesLanding /></PublicLayout>} />
                    <Route path="/services/free-counselling" element={<PublicLayout><FreeCounselling /></PublicLayout>} />
                    <Route path="/services/application-process" element={<PublicLayout><ApplicationProcess /></PublicLayout>} />
                    <Route path="/services/financial-aid" element={<PublicLayout><FinancialAid /></PublicLayout>} />
                    <Route path="/services/visa-assessment" element={<PublicLayout><VisaAssessment /></PublicLayout>} />
                    <Route path="/services/interview-preparation" element={<PublicLayout><InterviewPreparation /></PublicLayout>} />
                    <Route path="/services/air-ticket" element={<PublicLayout><AirTicket /></PublicLayout>} />
                    <Route path="/services/post-visa-services" element={<PublicLayout><PostVisaServices /></PublicLayout>} />

                    {/* Coaching Routes */}
                    <Route path="/coaching" element={<PublicLayout><CoachingLanding /></PublicLayout>} />
                    <Route path="/coaching/ielts" element={<PublicLayout><IELTS /></PublicLayout>} />
                    <Route path="/coaching/gre" element={<PublicLayout><GRE /></PublicLayout>} />
                    <Route path="/coaching/pte" element={<PublicLayout><PTE /></PublicLayout>} />
                    <Route path="/coaching/duolingo" element={<PublicLayout><Duolingo /></PublicLayout>} />
                    <Route path="/coaching/sat" element={<PublicLayout><SAT /></PublicLayout>} />
                    <Route path="/coaching/toefl-ibt" element={<PublicLayout><TOEFL /></PublicLayout>} />

                    {/* Study In Routes */}
                    <Route path="/study-in" element={<PublicLayout><CountryLanding /></PublicLayout>} />
                    <Route path="/study-in/usa" element={<PublicLayout><USA /></PublicLayout>} />
                    <Route path="/study-in/canada" element={<PublicLayout><Canada /></PublicLayout>} />
                    <Route path="/study-in/uk" element={<PublicLayout><UK /></PublicLayout>} />
                    <Route path="/study-in/australia" element={<PublicLayout><Australia /></PublicLayout>} />
                    <Route path="/study-in/new-zealand" element={<PublicLayout><NewZealand /></PublicLayout>} />
                    <Route path="/study-in/germany" element={<PublicLayout><Germany /></PublicLayout>} />

                    {/* Blogs Routes */}
                    <Route path="/blogs" element={<PublicLayout><BlogList /></PublicLayout>} />
                    <Route path="/blogs/:slug" element={<PublicLayout><BlogDetail /></PublicLayout>} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
