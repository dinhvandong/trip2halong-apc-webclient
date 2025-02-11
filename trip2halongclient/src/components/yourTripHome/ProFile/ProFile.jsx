import React, { useEffect, useState } from 'react'
import { GiChessQueen } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import avatar from "../../../assets/avatar.png";
import { useNavigate } from "react-router-dom";


const ProFile = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [CountryValue, setCountryValue] = useState('');
    const [file, setFile] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [userRole, setUserRole] = useState([]);
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        retype: false,
    });
    const [showPasswordNew, setShowPasswordNew] = useState({
        current: false,
        new: false,
        retype: false,
    });
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'Vietnam',
        code: '+84',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
    });

    useEffect(() => {
        // lay du lieu nguoi dung
        const token = localStorage.getItem("authToken");
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const role = JSON.parse(localStorage.getItem("userRole"));
        console.log("User Info từ localStorage:", userInfo);
        console.log("User Role từ localStorage:", role);

        if (!token) {
            navigate("/login");
        } else {
            setUserData(userInfo);
            setUserRole(role);
            
        }
        // Fetch danh sách quốc gia từ REST Countries API
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                // Sắp xếp theo thứ tự bảng chữ cái A-Z
                const sortedCountries = data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );
                setCountries(sortedCountries);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching countries:", error));
    }, [], [navigate]);


    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };
    // Xử lý thay đổi baner
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };
    const togglePasswordNewVisibility = (field) => {
        setShowPasswordNew((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userRole");
        navigate("/home");
    };
    return (
        <div className='my-20 grid grid-cols-4 gap-4 md:max-w-[90%] w-full m-auto '>
            <div className='col-span-1  shadow-md bg-white rounded-lg h-[290px]'>
                <div className='flex my-3 px-5'>
                    <img className='w-[60px] h-[60px] rounded-full' src={userData.avatar} alt='anh' />
                    <div className='ml-3 '>
                        <h3 className='font-bold text-xl text-[#454849]'>Chunie Nguyen</h3>
                        <p className='text-xs font-medium p-1 text-center text-white bg-[#7a8588] rounded-xl'>Trip2Halong Account</p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col items-start px-2 my-3'>
                    <button className='font-medium text-base hover:text-white hover:bg-[#167DC8] w-full h-10 text-left pl-3 transition duration-300 rounded-lg'>Edit Profile</button>
                    <button className='font-medium text-base hover:text-white hover:bg-[#167DC8] w-full h-10 text-left pl-3 transition duration-300 rounded-lg'>View All Trips</button>
                    <button className='flex items-center font-medium text-base hover:text-white hover:bg-[#167DC8] w-full h-10 text-left pl-3 transition duration-300 rounded-lg'><GiChessQueen className='text-lg mr-3' /> Upgrade to Business Profile</button>
                </div>
                <hr />
                <div className='flex flex-col items-start px-2 my-2'>
                    <button  onClick={handleLogout} className='font-medium text-base hover:text-white hover:bg-[#167DC8] w-full h-10 text-left pl-3 transition duration-300 rounded-lg'>
                        Log Out
                    </button>
                </div>
            </div>
            <div className='col-span-3'>
                <h1 className='text-2xl font-bold text-[#454849] my-3'>Edit Profile</h1>
                <div>
                    <div className='shadow-md bg-white px-5 mt-5 py-5 rounded-lg'>
                        <h3 className='font-semibold text-lg '>Personal information</h3>
                        <p className='text-[#ADB1B2] text-sm'>please provide your personal information as per your passport or ID Card</p>
                        <p className='text-[#ADB1B2] text-sm'>"Please use English charater only"</p>
                        <hr />
                        <div className='flex  mt-3'>
                            <div className='flex-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Nationlity<span className='text-red-500'>*</span></h5>
                                <select

                                    id='nationality'
                                    name="nationality"
                                    className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold '>
                                    <option value="" disabled>
                                        -- Select your nationality --
                                    </option>
                                    {countries.map((country) => (
                                        <option value={country.name.common} key={country.cca3}>{country.name.common}</option>

                                    ))}
                                </select>
                            </div>
                            <div className='flex-1 px-3'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Title<span className='text-red-500'>*</span></h5>
                                <select

                                    id='nationality'
                                    name="titleValue"
                                    className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold'>
                                    <option value="" disabled>
                                        -- Select your title --
                                    </option>
                                    <option value='Mr'>Mr</option>
                                    <option value='Ms'>Ms</option>
                                </select>
                            </div>
                            <div className='flex-1 '>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Full Name<span className='text-red-500'>*</span></h5>
                                <input
                                    type="text"
                                    name="fullName"
                                    className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold' />
                            </div>
                        </div>
                        <div className='flex mt-2'>
                            <div className='flex-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900 mt-1'>Phone Number<span className='text-red-500'>*</span></h5>

                                <div className="flex items-center">
                                    {/* Dropdown */}
                                    <div className="relative">
                                        <button
                                            onClick={toggleDropdown}
                                            className="py-2 px-3 shadow-inner font-semibold text-sm w-24 bg-gray-100 flex items-center "
                                        >
                                            <img
                                                className="w-5 h-4 mr-1"
                                                src={selectedCountry.flag}
                                                alt={selectedCountry.name}
                                            />
                                            <span className='flex'>{selectedCountry.code} <FaAngleDown className='ml-1 pt-1 text-lg' /></span>

                                        </button>

                                        {isDropdownOpen && (
                                            <div className="absolute mt-1 bg-white shadow-lg rounded w-40">
                                                {countries.map((country) => (
                                                    <div
                                                        key={country.code}
                                                        className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"

                                                    >
                                                        <img
                                                            className="w-5 h-5 mr-2"
                                                            src={country.flags.png}
                                                            alt={country.name.common}
                                                        />
                                                        <span>{" "}
                                                            {country.idd.root
                                                                ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
                                                                : "N/A"}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Input */}
                                    <input

                                        name="phoneNumber"
                                        
                                        className="shadow-inner w-full text-sm py-2 px-1 pl-2 "
                                        placeholder="012 345 6789"
                                    />
                                </div>

                            </div>
                            <div className='flex-1 px-3 '>
                                <h5 className='text-[13px] font-semibold mb-2 mt-1'>Email<span className='text-red-500'>*</span></h5>
                                <input
                                    name="email"
                                        value= {userData.email}
                                    className='shadow-inner  w-full text-sm py-2 px-1 pl-2' placeholder='huy12520@gmail.com' />
                            </div>

                        </div>

                    </div>
                    <div className='shadow-md bg-white px-5 my-5 py-3 rounded-lg'>
                        <h3 className='font-semibold text-lg '>Business information</h3>
                        <p className='text-[#ADB1B2]  text-sm'>please provide your business information as per your business registered licence.</p>
                        <p className='text-[#ADB1B2] text-sm pb-4 '>"Please use English charater only"</p>
                        <hr />
                        <div className='flex  mt-3 px-2'>
                            <div className='flex-1 pr-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Country<span className='text-red-500'>*</span></h5>
                                <select
                                    value={CountryValue}
                                    id='CountryValue'
                                    name="CountryValue"
                                    className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold '>
                                    <option value="" disabled>
                                        -- Select your Country --
                                    </option>
                                    {countries.map((country) => (
                                        <option value={country.name.common} key={country.cca3}>{country.name.common}</option>

                                    ))}
                                </select>
                            </div>

                            <div className='flex-1 pl-1'>
                                <h5 className='font-semibold text-lg '>Business Name<span className='text-red-500'>*</span></h5>
                                <input
                                    type="text"
                                    name="bsnName"

                                    placeholder="Enter your Business's name"
                                    className=' w-full text-[13px] py-2 px-1 pl-2 border-gray-300  rounded-md shadow-sm ' />
                            </div>
                        </div>
                        <div className='flex  mt-3'>

                            <div className=' px-3'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Busoness owner<span className='text-red-500'>*</span></h5>
                                <select
                                    //   value={titleBoValue}
                                    //   id='titleBoValue'
                                    //   name="titleBoValue"
                                    //   onChange={handleSelectChangeTitleBo}
                                    className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold'>
                                    <option value='Mr'>Mr</option>
                                    <option value='Ms'>Ms</option>
                                </select>
                            </div>
                            <div className='flex-1 '>

                                <input
                                    type="text"
                                    name="bsnOwner"

                                    placeholder='Jont Smith'
                                    className='mt-7 w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm ' />
                            </div>
                        </div>
                        <div className='flex mt-2 px-2'>
                            <div className='flex-1 px-3 '>
                                <h5 className='text-[13px] font-semibold mb-2 mt-1'>Title<span className='text-red-500'>*</span></h5>
                                <input
                                    type="text"
                                    name="bsnTitle"

                                    className='shadow-inner  w-full text-sm py-2 px-1 pl-2' placeholder='Founder' />
                            </div>
                            <div className='flex-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900 mt-1'>Phone Number<span className='text-red-500'>*</span></h5>

                                <div className="flex items-center">
                                    {/* Dropdown */}
                                    <div className="relative">
                                        <button
                                            onClick={toggleDropdown}
                                            className="py-2 px-3 shadow-inner font-semibold text-sm w-24 bg-gray-100 flex items-center "
                                        >
                                            <img
                                                className="w-5 h-4 mr-1"
                                                src={selectedCountry.flag}
                                                alt={selectedCountry.name}
                                            />
                                            <span className='flex'>{selectedCountry.code} <FaAngleDown className='ml-1 pt-1 text-lg' /></span>

                                        </button>

                                        {isDropdownOpen && (
                                            <div className="absolute mt-1 bg-white shadow-lg rounded w-40">
                                                {countries.map((country) => (
                                                    <div
                                                        key={country.code}
                                                        className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                                                        onClick={() => handleCountrySelect(country)}
                                                    >
                                                        <img
                                                            className="w-5 h-5 mr-2"
                                                            src={country.flag}
                                                            alt={country.name}
                                                        />
                                                        <span>{country.name} ({country.code})</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Input */}
                                    <input
                                        type="text"
                                        name="bsnPhone"

                                        className="shadow-inner text-black w-full text-sm py-2 px-1 pl-2 "
                                        placeholder="012 345 6789"
                                    />
                                </div>

                            </div>


                        </div>

                        <div className='flex-1 mt-2 px-3'>
                            <h5 className='text-[13px] font-semibold mb-2 mt-1'>Business License<span className='text-red-500'>*</span></h5>
                            <div className="flex shadow-inner items-center justify-between  rounded-md bg-white mt-2 py-2 px-3 inset-shadow-2xs">
                                <div className="flex justify-between items-center space-x-3 ">
                                    {file ? (
                                        <>


                                            <div className="ml-3">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt="Selected file"
                                                    className="w-7 h-7 object-cover rounded-full"
                                                />
                                            </div>
                                            {/* Tên file */}
                                            <span className="font-medium text-sm">{file.name}</span>

                                        </>
                                    ) : (
                                        <span className="text-gray-400 font-medium text-sm">
                                            No file selected
                                        </span>
                                    )}

                                </div>

                                <label
                                    htmlFor="file-input"
                                    className="text-gray-700 font-medium text-sm cursor-pointer underline"
                                >
                                    Change
                                </label>

                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/png, image/jpeg, pdf"
                                    className="hidden "
                                    onChange={handleFileChange}
                                />
                            </div>

                            {/* Ghi chú */}
                            <div className="ml-3 flex flex-row-reverse my-2 text-gray-800 text-xs">
                                <p className=''>Upload <span className='font-semibold'>JPG, PNG, PDF</span> only</p>

                            </div>
                        </div>
                    </div>
                    <div className='grid justify-items-end'>
                        <button className=' px-8 py-3  mr-1 bg-[#167DC8] rounded-lg text-white font-medium text-lg hover:bg-[#104672] transition duration-300 '>Update Information</button>
                    </div>
                </div>
                <h1 className='text-2xl font-bold text-[#454849] my-3'>Password & Security</h1>
                <div className='shadow-md bg-white px-7 pb-6 pt-5  rounded-xl mt-6' >
                    <div className='flex-1 ml-3 pb-5'>
                        <h3 className='font-semibold text-lg '>Change Your Password</h3>
                        <p className='text-[#ADB1B2] text-sm'>*Please use English character only</p>
                    </div>
                    <hr />
                    <div className='flex-1 mt-3 mt-2'>
                        <div className=''>
                            <h5 className='ml-3 font-medium text-[13px]'>Your Current Password<span className='text-red-500'>*</span></h5>
                            <div className="flex items-center  rounded-md mt-2">
                                <input
                                    className="w-full py-2 px-3 shadow-sm font-medium   focus:outline-none rounded-l-md"
                                    type={showPassword.current ? "text" : "password"}

                                />
                                <button
                                    className="px-3 py-3 text-gray-500 bg-white  hover:text-gray-700 rounded-r-md focus:outline-none"
                                    onClick={() => togglePasswordVisibility("current")}
                                >
                                    {showPassword.current ? <FaRegEye /> : <FaRegEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <h5 className='ml-3 font-medium text-[13px]'>Your New Password<span className='text-red-500'>*</span></h5>
                            <div className="flex items-center rounded-md mt-2">
                                <input
                                    className="w-full py-2 px-3 font-medium shadow-sm rounded-l-md focus:outline-none "
                                    type={showPasswordNew.current ? "text" : "password"}

                                />
                                <button
                                    className="px-3 py-3 text-gray-500 bg-white  hover:text-gray-700 rounded-r-md focus:outline-none"
                                    onClick={() => togglePasswordNewVisibility("current")}
                                >
                                    {showPasswordNew.current ? <FaRegEye /> : <FaRegEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <h5 className='ml-3 font-medium text-[13px]'>Re-type New Password<span className='text-red-500'>*</span></h5>
                            <div className="flex items-center rounded-md mt-2">
                                <input
                                    className="w-full py-2 px-3 font-medium shadow-sm rounded-l-md focus:outline-none "
                                    type={showPasswordNew.current ? "text" : "password"}

                                />
                                <button
                                    className="px-3 py-3 text-gray-500 bg-white  hover:text-gray-700 rounded-r-md focus:outline-none"
                                    onClick={() => togglePasswordNewVisibility("current")}
                                >
                                    {showPasswordNew.current ? <FaRegEye /> : <FaRegEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className='grid justify-items-end'>
                            <button className=' mt-5 px-8 py-3 rounded-lg mr-1 bg-[#167DC8] text-white font-medium text-lg hover:bg-[#104672] transition duration-300 '>Change Password</button>
                        </div>

                    </div>
                </div>
                <div className='flex justify-between shadow-md bg-white px-7 mt-5 py-5 rounded-lg items-center '>
                    <div className='items-center'>
                        <h1 className='text-xl font-bold text-[#454849]'>Delete Account</h1>
                        <p className='text-[#ADB1B2]'>Once your account is deleted, you will not be able to restore your account or data</p>
                    </div>
                    <button className='mt-5 px-7 py-3 rounded-lg mr-1 bg-red-500 text-white font-medium text-lg hover:bg-red-800 transition duration-300 flex items-center'><CgDanger className='text-lg mr-3' /> Delete Account</button>
                </div>
            </div>
        </div>
    )
}

export default ProFile