import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import logo2 from "../../assets/logo2.png";
import { IoChevronDown } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import barchartdata from "./barchartdata";
import BarChart from "./barchart";
import WaveChart from "./wavechart";
import PieChart from "./piechart";
import ProductTable from "./ProductTable";
import BookingTable from "./BookingTable";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center  bg-white rounded-md w-[80%]">
      <div className="flex flex-row justify-between items-center bg-[#F9F9F9] w-full rounded-t-md border-b-2 p-4">
        <div className="flex flex-row space-x-3 items-center cursor-pointer">
          <div>
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://m.media-amazon.com/images/M/MV5BMmU1YWU1NmMtMjAyMi00MjFiLWFmZmUtOTc1ZjI5ODkxYmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="font-bold">Thanh Thanh Pham</p>
            <p className="text-sm font-thin">PR Manager</p>
          </div>
          <div>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Dashboard</p>
        </div>
        <div className="flex flex-row border-[1px] border-[#167DC8] justify-center items-center bg-white px-2 py-1 rounded-md">
          <div>
            <input
              className="w-full focus:outline-none"
              placeholder="Search"
              type="search"
            />
          </div>
          <div className="text-[#167DC8] cursor-pointer">
            <FiSearch />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col justify-center items-center w-full space-y-3 border-b-2 py-10">
          <div className="flex justify-center items-center">
            <img className="w-[60%]" src={logo2} alt="" />
          </div>
          <div className="text-4xl">
            <span className="font-bold">Welome Back,</span>
            <span className="text-[#167DC8] font-bold"> Thanh</span>
          </div>
          <div className="">
            <span>09:00</span>
            <span> | </span>
            <span>1 Nov 2024</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <div className="">
          <p className="font-bold text-xl">Tasks</p>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="bg-[#FBEFEF] p-4 w-full rounded-md">
            <p>Pending booking</p>
            <p className="text-xl font-bold">3</p>
          </div>
          <div className="bg-[#FDF4EB] p-4 w-full rounded-md">
            <p>Pending Amendment Request</p>
            <p className="text-xl font-bold">0</p>
          </div>
          <div className="bg-[#D8FFE2] p-4 w-full rounded-md">
            <p>News Reviews</p>
            <p className="text-xl font-bold">143</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-4 space-x-4">
        <div className="flex flex-col w-full p-4 space-y-2 border-[1px] rounded-md">
          <div className="flex flex-row justify-between">
            <p className="font-bold text-xl">New Traffics</p>
            <div className="flex flex-row justify-center items-center border-[1px] rounded-full px-4 py-2">
              <select
                className="cursor-pointer w-full appearance-none rounded-md placeholder:text-black focus:outline-none text-sm font-bold"
                name="date"
                id="date"
              >
                <option value="">This week</option>
                <option value="">This month</option>
                <option value="">This year</option>
              </select>
              <div>
                <IoChevronDown />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col justify-end space-y-2">
              <p className="text-3xl font-bold">2,135</p>
              <div className="flex flex-row items-center justify-center text-red-600">
                <div>
                  <FaArrowDown />
                </div>
                <div>
                  <p>-13,24%</p>
                </div>
              </div>
            </div>
            <div>
              <BarChart data={barchartdata} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 border-[1px] rounded-md">
          <div className="flex flex-row justify-between ">
            <p className="font-bold text-xl">New Engagements</p>
            <div className="flex flex-row justify-center items-center border-[1px] py-2 px-4 rounded-full">
              <select
                className="cursor-pointer w-full appearance-none rounded-md placeholder:text-black focus:outline-none text-sm font-bold"
                name="date"
                id="date"
              >
                <option value="">This week</option>
                <option value="">This month</option>
                <option value="">This year</option>
              </select>
              <div>
                <IoChevronDown />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-end h-full">
            <div className="flex flex-col justify-end space-y-2">
              <p className="text-3xl font-bold">7,213</p>
              <div className="flex flex-row items-center justify-center text-green-600">
                <div>
                  <FaArrowUp />
                </div>
                <div>
                  <p>-+24,08%</p>
                </div>
              </div>
            </div>
            <div>
              {/* <BarChart data={barchartdata} /> */}
              <WaveChart />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-4 space-x-4">
        <div className="flex flex-col w-full p-4 border-[1px] rounded-md">
          <div className="flex flex-row justify-between ">
            <p className="font-bold text-xl">New Engagements</p>
            <div className="flex flex-row justify-center items-center border-[1px] py-2 px-4 rounded-full">
              <select
                className="cursor-pointer w-full appearance-none rounded-md placeholder:text-black focus:outline-none"
                name="date"
                id="date"
              >
                <option value="">This week</option>
                <option value="">This month</option>
                <option value="">This year</option>
              </select>
              <div>
                <IoChevronDown />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 justify-end h-full">
            <div className="flex flex-row space-x-2 justify-start items-center">
              <div className="py-2 px-4 bg-[#0A7DCB] rounded-full text-white">
                <p>1</p>
              </div>
              <div>
                <p className="text-lg ">Day Cruise on Ambassador Day Cruise</p>
              </div>
            </div>
            <div className="flex flex-row space-x-2 justify-start items-center">
              <div className="py-2 px-4 bg-[#5CB3EC] rounded-full text-white">
                <p>2</p>
              </div>
              <div>
                <p className="text-lg ">Klook PASS: Taiwan Hot Spring Pass</p>
              </div>
            </div>
            <div className="flex flex-row space-x-2 justify-start items-center">
              <div className="py-2 px-4 bg-[#87C7F1] rounded-full text-white">
                <p>3</p>
              </div>
              <div>
                <p className="text-lg ">Klook PASS: Taiwan Hot Spring Pass</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 border-[1px] rounded-md w-full space-y-6">
          <div>
            <p className="font-bold text-xl">My Activities</p>
          </div>
          <div className="">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-x-4 px-4">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-xl">Data Overview</p>
          <div className="flex flex-row justify-center items-center border-[1px] py-2 px-4 rounded-full">
            <select
              className="cursor-pointer w-full appearance-none rounded-md placeholder:text-black focus:outline-none font-bold text-sm"
              name="date"
              id="date"
            >
              <option value="">01/01/2024 - 12/01/2025</option>
              <option value="">01/01/2023 - 31/12/2023</option>
              <option value="">01/01/2022 - 31/12/2022</option>
            </select>
            <div>
              <IoChevronDown />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start p-4 space-x-4">
          <div className="flex flex-col border-[1px] w-full p-4 rounded-md space-y-2">
            <div>
              <p>Bookings</p>
            </div>
            <div>
              <p className="text-lg font-bold">5223</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p>Change</p>
              <div className="flex flex-row text-green-600 items-center">
                <div>
                  <FaArrowUp />
                </div>
                <p className="font-bold">+24,08%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-[1px] w-full p-4 rounded-md space-y-2">
            <div>
              <p>Confirmed Bookings</p>
            </div>
            <div>
              <p className="text-lg font-bold">377</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p>Change</p>
              <div className="flex flex-row text-red-600 items-center">
                <div>
                  <FaArrowDown />
                </div>
                <p className="font-bold">-13,24%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-[1px] w-full p-4 rounded-md space-y-2">
            <div>
              <p>Rejected Bookings</p>
            </div>
            <div>
              <p className="text-lg font-bold">23</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p>Change</p>
              <div className="flex flex-row text-green-600 items-center">
                <div>
                  <FaArrowDown />
                </div>
                <p className="font-bold">-13,24%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-[1px] w-full p-4 rounded-md space-y-2">
            <div>
              <p>Refunded Units</p>
            </div>
            <div>
              <p className="text-lg font-bold">377</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p>Change</p>
              <div className="flex flex-row text-red-600 items-center">
                <div>
                  <FaArrowUp />
                </div>
                <p className="font-bold">+24,08%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 space-x-4 p-4">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-xl">Your Trending Packages</p>
          <div className="flex flex-row justify-center items-center border-[1px] py-2 px-4 rounded-full">
            <select
              className="cursor-pointer w-full appearance-none rounded-md placeholder:text-black focus:outline-none font-bold text-sm"
              name="date"
              id="date"
            >
              <option value="">This week</option>
              <option value="">This month</option>
              <option value="">This year</option>
            </select>
            <div>
              <IoChevronDown />
            </div>
          </div>
        </div>
        <div>
          <ProductTable/>
        </div>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        <div>
          <p className="text-xl font-bold">Booking Request</p>
        </div>
        <div>
          <BookingTable/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
