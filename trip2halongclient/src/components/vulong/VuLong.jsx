import React from 'react'
import logo from './assets/logotriphalong.jpg';

import HaiLong from './HaiLong'

const VuLong = () => {
  return (
    
    <div className="flex flex-col items-center w-full h-auto">
      <HaiLong/>
    <footer className="w-full">
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
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex items-start gap-8 mb-12">
            <img src={logo} alt="Trip2 Halong Logo" className="w-[343px] h-[158px]"/>
            <p className="max-w-lg pt-2 text-gray-300">
              Figma ipsum component variant main layer. Flatten strikethrough effect community effect select slice. Style panel team list flows flows outline paneli. Plugin horizontal draft rotate overflow auto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-400 hover:text-white">ABOUT US</a></li>
                <li><a href="#" className="text-blue-400 hover:text-white">FAQs</a></li>
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
  </div>

    

  )
}

export default VuLong