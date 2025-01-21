import React from 'react'
import Kien from './components/kien/Kien'
import Huy from './components/huy/CreateAccount/CreateAccount'
import Quan from './components/quan/Quan'
import VuLong from './components/vulong/VuLong'
import Toanbo from './components/Toanbobo/Toanbo'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import ResetPage from './pages/ResetPage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignInEnterCode from './pages/SignInEnterCodePage'
import CreateAccountPage from './pages/CreateAccountPage'
import MainComponent from './components/toan/MainComponent'
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
// import Duc from './components/Duc/Duc'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in-enter-code/:email" element={<SignInEnterCode />} />
        <Route path="/sign-in-with-email-password" element={<SignInEmailandPassword />} />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaQPage />} />
        <Route path="/news" element={<AllNew/>}/>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />

        <Route path="/admin/dashboard" element={<AdminPage />} />
        <Route path="/admin/property" element={<PropertyPage />} />
        <Route path="/admin/activity" element={<ActivityPage />} />
        <Route path="/admin/bookings" element={<BookingsPage/>} />
        <Route path="/admin/request" element={<RequestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App