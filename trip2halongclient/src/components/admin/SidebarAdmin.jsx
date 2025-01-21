import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router";

const SidebarAdmin = (props) => {
  const navigate = useNavigate();

  function gotoDashboard() {
    navigate("/admin/dashboard");
  }
  function gotoProperty() {
    navigate("/admin/property");
  }
  function gotoActivity() {
    navigate("/admin/activity");
  }
  function gotoBooking() {
    navigate("/admin/bookings");
  }
  function gotoRequest() {
    navigate("/admin/request");
  }

  const tab = props.menu;
  const styleMenu1 =
    tab === "tab1" ? "bg-[#167DC8] hover:bg-[#167DC8]" : "hover:bg-[#0E5385]";
  const styleMenu2 =
    tab === "tab2" ? "bg-[#167DC8] hover:bg-[#167DC8]" : "hover:bg-[#0E5385]";
  const styleMenu3 =
    tab === "tab3" ? "bg-[#167DC8] hover:bg-[#167DC8]" : "hover:bg-[#0E5385]";
  const styleMenu4 =
    tab === "tab4" ? "bg-[#167DC8] hover:bg-[#167DC8]" : "hover:bg-[#0E5385]";
  const styleMenu5 =
    tab === "tab5" ? "bg-[#167DC8] hover:bg-[#167DC8]" : "hover:bg-[#0E5385]";
  return (
    <div className="flex flex-col justify-start items-start h-full p-4 w-full">
      <div className="flex justify-center items-center p-2 w-full">
        <img className="w-[60%]" src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-start items-start space-y-2">
        <div
          onClick={gotoDashboard}
          className={`flex flex-row justify-start items-center text-white space-x-4 p-2 ${styleMenu1} rounded-md w-full px-4 cursor-pointer `}
        >
          <div>
            <IoHomeSharp />
          </div>
          <div>Dashboard</div>
        </div>
        <div
          onClick={gotoProperty}
          className={`flex flex-row justify-start items-center text-white space-x-4 p-2 ${styleMenu2} rounded-md w-full px-4 cursor-pointer `}
        >
          <div>
            <FaUserCircle />
          </div>
          <div>Your Property</div>
        </div>
        <div
          onClick={gotoActivity}
          className={`flex flex-row justify-start items-center text-white space-x-4 p-2 ${styleMenu3} rounded-md w-full px-4 cursor-pointer `}
        >
          <div>
            <IoDocumentTextOutline />
          </div>
          <div>My Activity</div>
        </div>
        <div
          onClick={gotoBooking}
          className={`flex flex-row justify-start items-center text-white space-x-4 p-2 ${styleMenu4} rounded-md w-full px-4 cursor-pointer `}
        >
          <div>
            <LuLayoutList />
          </div>
          <div>Manage Bookings</div>
        </div>
        <div
          onClick={gotoRequest}
          className={`flex flex-row justify-start items-center text-white space-x-4 p-2 ${styleMenu5} rounded-md w-full px-4 cursor-pointer `}
        >
          <div>
            <FiPhone />
          </div>
          <div>Request</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
