import React, { useEffect, useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { FaAngleDown } from "react-icons/fa";
import { signupSeller, signupUser } from '../../../apis/login_api';

const CreateAccount = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [selectedCountry, setSelectedCountry] = useState(null);
    const [isChecked1, setIsChecked1] = useState(false); // Trạng thái checkbox 1
    const [isChecked2, setIsChecked2] = useState(false); // Trạng thái checkbox 2
    const [nationalityValue, setnationalityValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [CountryValue, setCountryValue] = useState('');
    // const [titleBoValue, setTitleBoValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        title: titleValue,
        nationality: nationalityValue,
        fullName: '',
        phoneNumber: '',
        bsnCountry: CountryValue,
        bsnName: '',
        bsnOwner: '',
        bsnTitle: '',
        bsnPhone: '',
        bsnLicense: '',
        role: 'user'
    });
    // Hàm xử lý khi thay đổi giá trị
    const handleSelectChange = (e) => {
        const value = e.target.value;
        setnationalityValue(value); // Cập nhật giá trị vào state
        console.log('Giá trị đã chọn:', value); // Log giá trị vào console
    };
    // Hàm xử lý khi thay đổi giá trị
    const handleSelectChange2 = (e) => {
        const value = e.target.value;
        setTitleValue(value); // Cập nhật giá trị vào state
        console.log('Giá trị đã chọn:', value); // Log giá trị vào console
    };
      // Hàm xử lý khi thay đổi giá trị
      const handleSelectChangeCounty = (e) => {
        const value = e.target.value;
        setCountryValue(value); // Cập nhật giá trị vào state
        console.log('Giá trị đã chọn:', value); // Log giá trị vào console
    };
    // Hàm xử lý khi thay đổi giá trị
    // const handleSelectChangeTitleBo = (e) => {
    //     const value = e.target.value;
    //     setTitleBoValue(value); // Cập nhật giá trị vào state
    //     console.log('Giá trị đã chọn:', value); // Log giá trị vào console
    // };

    // Hàm xử lý khi checkbox 1 thay đổi
    const handleCheckbox1Change = (e) => {
        setIsChecked1(e.target.checked);
    };

    // Hàm xử lý khi checkbox 2 thay đổi
    const handleCheckbox2Change = (e) => {
        setIsChecked2(e.target.checked);
    };






    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [showBusinessInfo, setShowBusinessInfo] = useState(false);
    const toggleBusinessInfo = () => {
        setShowBusinessInfo(!showBusinessInfo);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'Vietnam',
        code: '+84',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
    });

    useEffect(() => {
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
    }, []);


    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    // const countries = [
    //     {
    //         name: 'Vietnam',
    //         code: '+84',
    //         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
    //     },
    //     {
    //         name: 'USA',
    //         code: '+1',
    //         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
    //     },
    // ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            nationality: nationalityValue,
            title: titleValue,
            bsnCountry: CountryValue,
            //bsnTitle: titleBoValue,
        }));
    };
    const handleRoleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            role: e.target.checked ? 'seller' : 'user',

        }));
    };



    const handleSubmit = async () => {

        try {
            if (formData.role === 'seller') {
                setFormData((prev) => ({
                    ...prev,
                    title: titleValue,
                    nationality: nationalityValue,
                    bsnCountry: CountryValue,
                    //bsnTitle: titleBoValue,
                }));
                const response = await signupSeller(formData);
                alert('Đăng ký người bán thành công: ' + JSON.stringify(response));
            } else {

                setFormData((prev) => ({
                    ...prev,
                    title: titleValue,
                    nationality: nationalityValue
                }));
                const response = await signupUser(formData);
                alert('Đăng ký người dùng thành công: ' + JSON.stringify(response));
            }
        } catch (error) {
            console.log(error);
            alert('Lỗi đăng ký: ' + error.message);
        }
    };


    return (
        <div className='mt-16 mb-8'>
            <div className='md:max-w-[800px] w-full m-auto pt-5'>
                <h1 className='text-center text-lg font-semibold text-neutral-900'>Create an account</h1>
                <p className='text-center text-sm text-slate-700'>Create your trip2 account to access your services</p>
                <div className='shadow-md bg-white px-5 mt-5'>
                    <h3 className='font-semibold text-neutral-900'>Personal information</h3>
                    <p className='text-slate-700 text-sm'>please provide your personal information as per your passport or ID Card</p>
                    <p className='text-slate-700 text-sm pb-4 '>"Please use English charater only"</p>
                    <hr />
                    <div className='flex  mt-3'>
                        <div className='flex-1'>
                            <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Nationlity<span className='text-red-500'>*</span></h5>
                            <select
                                value={nationalityValue}
                                id='nationality'
                                name="nationality"
                                onChange={handleSelectChange} className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold '>
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
                              value={titleValue}
                              id='nationality'
                              name="titleValue"
                              onChange={handleSelectChange2}className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold'>
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
                                value={formData.fullName} onChange={handleChange} className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold' />
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
                                    value={formData.phoneNumber} onChange={handleChange}
                                    className="shadow-inner w-full text-sm py-2 px-1 pl-2 "
                                    placeholder="012 345 6789"
                                />
                            </div>

                        </div>
                        <div className='flex-1 px-3 '>
                            <h5 className='text-[13px] font-semibold mb-2 mt-1'>Email<span className='text-red-500'>*</span></h5>
                            <input
                                name="email"
                                value={formData.email} onChange={handleChange}
                                className='shadow-inner  w-full text-sm py-2 px-1 pl-2' placeholder='huy12520@gmail.com' />
                        </div>

                    </div>
                    <div className=''>
                        <h5 className='text-[13px] text-neutral-900 font-semibold mt-4 mb-3 ml-3'>
                            Password
                            <span className='text-red-500'>*</span>
                        </h5>
                        <div className='flex border rounded-md items-center'>
                            <p className='w-[150px] text-sm pl-3 font-semibold'>Your Password</p>
                            <input
                                name="password"
                                value={formData.password} onChange={handleChange}
                                className='shadow-inner w-full text-sm py-2 px-1 pl-2'
                                type={showPassword ? 'text' : 'password'}
                            />
                            <button
                                type="button"
                                className='px-2 text-sm text-gray-500'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>
                    <div className='pb-10'>
                        <h5 className='text-[13px] text-neutral-800 font-semibold mt-4 mb-3 ml-3'>
                            Re-type Password
                            <span className='text-red-500'>*</span>
                        </h5>
                        <div className='flex border rounded-md items-center'>
                            <input
                                className='shadow-inner w-full text-sm py-2 px-1 pl-3'
                                type={showPassword ? 'text' : 'password'}
                            />
                            <button
                                type="button"
                                className='px-2 text-sm text-gray-500'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:max-w-[800px] w-full m-auto pt-5'>


                <label className="inline-flex items-center w-full">
                    <input
                        type="checkbox"
                        value="seller"
                        checked={formData.role === 'seller'}
                        onChange={handleRoleChange}
                        // onChange={toggleBusinessInfo}
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        Do you want to <span className='font-semibold'>create a business account?</span>
                    </span>
                </label>
                {formData.role === 'seller' && (
                    <div className='shadow-md bg-white px-5 my-5 '>
                        <h3 className='font-semibold text-neutral-900'>Business information</h3>
                        <p className='text-slate-700 text-sm'>please provide your business information as per your business registered licence.</p>
                        <p className='text-slate-700 text-sm pb-4 '>"Please use English charater only"</p>
                        <hr />
                        <div className='flex  mt-3 px-2'>
                            <div className='flex-1'>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Country<span className='text-red-500'>*</span></h5>
                                <select
                                value={CountryValue}
                                id='CountryValue'
                                name="CountryValue"
                                onChange={handleSelectChangeCounty} className=' w-full text-sm py-2 px-1 pl-2 border-gray-300 rounded-md shadow-sm font-semibold '>
                                <option value="" disabled>
                                    -- Select your Country --
                                </option>
                                {countries.map((country) => (
                                    <option value={country.name.common} key={country.cca3}>{country.name.common}</option>

                                ))}
                            </select>
                            </div>

                            <div className='flex-1 '>
                                <h5 className='text-[13px] font-semibold mb-2 text-neutral-900'>Business Name<span className='text-red-500'>*</span></h5>
                                <input
                                 type="text"
                                 name="bsnName"
                                 value={formData.bsnName} onChange={handleChange} 
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
                                value={formData.bsnOwner} onChange={handleChange} 
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
                                 value={formData.bsnTitle} onChange={handleChange} 
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
                                     value={formData.bsnPhone} onChange={handleChange} 
                                        className="shadow-inner text-black w-full text-sm py-2 px-1 pl-2 "
                                        placeholder="012 345 6789"
                                    />
                                </div>

                            </div>


                        </div>

                        <div className=' pb-4 '>
                            <label className="block text-sm font-medium text-gray-700 my-2 px-3">
                                Business License <span className="text-red-500">*</span>
                            </label>
                            <div className="border-dashed border rounded-md mt-1 p-3">
                                <input
                                
                                name="bsnLicense"
                                value={formData.bsnLicense} onChange={handleChange} 
                                 type="file" className="text-sm text-gray-600 pt-10 " />

                            </div>
                            <p className="mt-2 text-xs text-black">
                                Upload <span className='font-medium'>JPG, PNG, PDF</span> only
                            </p>
                        </div>
                    </div>)}
                <label className="inline-flex items-center w-full">
                    <input
                        type='checkbox'
                        checked={isChecked1} // Liên kết trạng thái checkbox 1
                        onChange={handleCheckbox1Change} // Cập nhật trạng thái khi thay đổi
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        I hereby  read and accepted the terms & Conditions of Ambassador Cruise App
                    </span>
                </label>
                <label className="inline-flex items-center w-full">
                    <input
                        type='checkbox'
                        checked={isChecked2} // Liên kết trạng thái checkbox 2
                        onChange={handleCheckbox2Change} // Cập nhật trạng thái khi thay đổi
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        I agree to receice information about promotions and marketing e-mails from Ambassador Cruise and partners
                    </span>
                </label>
                <div className='flex flex-col items-center mt-3'>
                    <button
                        onClick={handleSubmit}
                        checked="submit"
                        d disabled={!(isChecked1 && isChecked2)} // Vô hiệu hóa nút nếu 1 trong 2 checkbox chưa được chọn
                        className={`w-[450px] py-2 px-4 text-center font-semibold text-white ${isChecked1 && isChecked2
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-gray-300 cursor-not-allowed'
                            }`}
                    >
                        Submit
                    </button>
                </div>


            </div>

        </div>
    );
};

export default CreateAccount;