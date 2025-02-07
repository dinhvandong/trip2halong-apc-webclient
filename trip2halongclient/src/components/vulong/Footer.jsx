import React from 'react'
import logo from './assets/logotriphalong.jpg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  const gotoAboutPage = ()=>{
    navigate('/about')
  }


  const gotoFaQPage = ()=>{
    navigate('/faq')
  }


  return (
    <footer className="w-full ">
    <div className="w-full px-4 py-4 bg-[#FFB700]">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 mx-auto sm:flex-row">
        <h2 className="text-2xl font-bold text-white whitespace-nowrap">Let's Stay In Touch</h2>
        <div className="flex w-full max-w-2xl"> 
          <input
            type="email"
            placeholder="Enter Your Email to Subscribe"
            className="flex-1 w-full px-4 py-2 focus:outline-none"
          />
          <button className="px-6 py-2 font-semibold text-white transition-colors border border-white bg-[#FFB700] whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    <div className="py-12 text-white bg-[#0E4772]">
        <div className="max-w-6xl mx-auto">
          <div className="flex w-full ">
            <div className='w-[40%]'>
            <img src={logo} alt="Trip2 Halong Logo" className="w-[343px] h-[158px]"/>

            </div>
            <div className='w-[60%]'>
            <p className="text-justify text-gray-300">
            Figma ipsum component variant main layer. Flatten strikethrough effect community effect select slice. Style pencil team list flows flows outline pencil. Plugin horizontal draft rotate overflow auto ipsum community frame. Community undo reesizing create connection draft. Component ellipse figjam auto style hand project object outline. Polygon inspect style vector figjam move. Component ellipse figjam auto style hand project object outline. Polygon inspect            </p>
          </div>
            </div>
            <div className='w-full h-[1px] bg-white mt-3 mb-2'></div>
           

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <ul className="space-y-2">
                <li><a onClick={gotoAboutPage} href="#" className="text-blue-400 hover:text-white">ABOUT US</a></li>
                <li><a onClick={gotoFaQPage} href="#" className="text-blue-400 hover:text-white">FAQs</a></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-400 hover:text-white">DESTINATIONS</a></li>
                <li><a href="#" className="text-blue-400 hover:text-white">TRIPS</a></li>
                <li><a href="#" className="text-blue-400 hover:text-white">NEWS</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-400">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Videos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Podcasts</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-400">Grow Your Business</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Partner with Trip2Halong</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Advertisement</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer