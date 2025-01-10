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
import CreateAccountPage from './pages/CreateAccountPage'
import MainComponent from './components/toan/MainComponent'
import SignInPage from './pages/SignInPage'
import SignInEmailandPassword from './pages/SignInEmailandPassword'
import FaQPage from './pages/FaQPage'
import AllNew from './pages/AllNew';
// import Duc from './components/Duc/Duc'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in-with-email-password" element={<SignInEmailandPassword />} />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaQPage />} />

        <Route path="/" element={<AllNew />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
    // <div className='flex flex-col '>

    //   <Kien/>
    //   <Huy/>
    //   <Quan/>
    //   <Toanbo/>
    //   <Quan/>
    //   <Toanbo/>
    //   {/* <Duc/> */}

    //   <VuLong/>

    // </div>
  )
}

export default App