import React from 'react'
import Kien from './components/header/Kien'
import Huy from './components/yourTripHome/CreateAccount/CreateAccount'
import Quan from './components/bestTripHome/Quan'
import VuLong from './components/footer/VuLong'
import Toanbo from './components/trendingHome/TrendingHome'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import ResetPage from './pages/ResetPage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignInEnterCode from './pages/SignInEnterCodePage'
import CreateAccountPage from './pages/CreateAccountPage'
import MainComponent from './components/booking/MainComponent'
import SignInPage from './pages/SignInPage'
import SignInEmailandPassword from './pages/SignInEmailandPassword'
import FaQPage from './pages/FaQPage'
import AllNew from './pages/AllNew';
import New from './pages/New';
import AdminPage from './pages/admin/AdminPage'
import PropertyPage from './pages/admin/PropertyPage'
import ActivityPage from './pages/admin/ActivityPage'
import BookingsPage from './pages/admin/BookingsPage'
import RequestPage from './pages/admin/RequestPage'
import Longg from './components/booking3/Booking3All';
import ToanUpdate from './pages/ToanUpdate';
import All from './components/listYourProperty/All';
import PricingActivity from 'pages/admin/PricingActivity';

import SidebarAdmin from './components/admin/SidebarAdmin'
import Activity2 from './pages/admin/Activity2'
import ProFilePage from './pages/ProFilePage'
import BrandPage from 'pages/BrandPage'
// import Duc from './components/Duc/Duc'


const App = () => {
  function ProtectedRoute({ children }) {
    const token = localStorage.getItem("authToken");
    return token ? children : <Navigate to="/sign-in" />;
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in-enter-code/:email" element={<SignInEnterCode />} />
        <Route path="/sign-in-with-email-password" element={<SignInEmailandPassword />} />

        {/* <Route path="/profile" element={<ProFilePage />} /> */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProFilePage />
            </ProtectedRoute>
          }
        />

        <Route path="/brand" element={<BrandPage />} />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaQPage />} />
        <Route path="/news" element={<AllNew />} />
        <Route path="/booking-payment" element={<Longg />} />
        <Route path="/booking-process" element={<ToanUpdate />} />
        <Route path="/listYourProperty" element={<All />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/admin/dashboard" element={<AdminPage />} />
        <Route path="/admin/property" element={<PropertyPage />} />
        <Route path="/admin/activity" element={<ActivityPage />} />
        <Route path="/admin/bookings" element={<BookingsPage />} />
        <Route path="/admin/request" element={<RequestPage />} />
        <Route path="/activity/activity2" element={<Activity2 />} />
        <Route path="/admin/activity/pricing" element={<PricingActivity />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App