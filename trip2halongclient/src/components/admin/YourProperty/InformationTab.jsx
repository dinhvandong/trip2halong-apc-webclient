import React, { useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";

const InformationTab = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentYear = new Date().getFullYear(); // Năm hiện tại
  const [birthYears, setBirthYears] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Vietnam',
    code: '+84',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
  });

  const [file, setFile] = useState(null);
  const [logo, setLogo] = useState(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Hàm tạo danh sách năm sinh
  const generateBirthYears = (startYear, endYear) => {
    const years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  };

  // Khởi tạo danh sách năm sinh từ năm 1900 đến năm hiện tại
  React.useEffect(() => {
    const years = generateBirthYears(1800, currentYear);
    setBirthYears(years);
  }, [currentYear]);

  // Xử lý thay đổi baner
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Xử lý thay đổi logo
  const handleLogoChange = (event) => {
    const selectedLogo = event.target.files[0];
    if (selectedLogo) {
      setLogo(selectedLogo);
    }
  };
  useEffect(() => {
    // Fetch danh sách quốc gia từ REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Sắp xếp theo thứ tự bảng chữ cái A-Z
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        // Xử lý dữ liệu, chỉ lấy các quốc gia có mã điện thoại
        const formattedCountries = sortedCountries
          .filter((country) => country.idd?.root)
          .map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
            dialCode:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
          }));
        setCountries(sortedCountries);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  const handleChange = (event) => {
    const selectedDialCode = event.target.value;
    const country = countries.find((c) => c.dialCode === selectedDialCode);
    setSelectedCountry(country || null);
  };


  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  return (
    <div className='mx-4 '>
      <div className='bg-[#F9F9F9] flex flex-row px-7 pb-6 pt-7 rounded-xl' >
        <div className='flex-1'>
          <h3 className='font-semibold text-lg'>information</h3>
          <p className='text-[#ADB1B2]'>*Please use English character only</p>
        </div>
        <div className='flex-1'>
          <div className='flex-1'>
            <h5 className='ml-3 font-medium text-sm'>Property Name<span className='text-red-500'>*</span></h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md' type="text" />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Top Banner<span className='text-red-500'>*</span></h5>
            <div className="flex items-center justify-between  rounded-md bg-white mt-2 py-2 px-3 inset-shadow-2xs">
              <div className="flex items-center space-x-3">
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



              <input
                id="file-input"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden "
                onChange={handleFileChange}
              />
            </div>

            {/* Ghi chú */}
            <div className="ml-3 flex justify-between my-2 text-gray-800 text-xs">
              <p > Dimension: 1x1. File type: <span className='font-semibold'>JPG, PNG</span></p>
              <label
                htmlFor="file-input"
                className="text-blue-700 font-medium text-sm cursor-pointer underline"
              >
                Change
              </label>
            </div>
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Logo<span className='text-red-500'>*</span></h5>
            <div className="flex items-center justify-between  rounded-md bg-white mt-2 py-2 px-3 inset-shadow-2xs">
              <div className="flex items-center space-x-3">
                {logo ? (
                  <>


                    <div className="ml-3">
                      <img
                        src={URL.createObjectURL(logo)}
                        alt="Selected file"
                        className="w-7 h-7 object-cover rounded-full"
                      />
                    </div>
                    {/* Tên logo */}
                    <span className="font-medium text-sm">{logo.name}</span>

                  </>
                ) : (
                  <span className="text-gray-400 font-medium text-sm">
                    No logo selected
                  </span>
                )}
              </div>



              <input
                id="logo-input"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden "
                onChange={handleLogoChange}
              />
            </div>

            {/* Ghi chú */}
            <div className="ml-3 flex justify-between my-2 text-gray-800 text-xs">
              <p > Dimension: 1x1. File type: <span className='font-semibold'>JPG, PNG</span></p>
              <label
                htmlFor="logo-input"
                className="text-blue-700 font-medium text-sm cursor-pointer underline"
              >
                Change
              </label>
            </div>
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Short Decription<span className='text-red-500'>*</span></h5>
            <textarea
              className="w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs
             h-32 text-left
             focus:outline-none resize-none"
              placeholder="Please type no more than 150 words"
            />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Decription<span className='text-red-500'>*</span></h5>
            <textarea
              className="w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs
             h-52 text-left
             focus:outline-none resize-none"
              placeholder="Please type no more than 300 words"
            />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Address Line 1<span className='text-red-500'>*</span></h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md' type="text" />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Address Line 2<span className='text-red-500'>*</span></h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md' type="text" />
          </div>
          <div className='flex flex-row mt-2'>
            <div className='flex-1 mr-3'>
              <h5 className='ml-3 font-medium text-sm'>Nationality<span className='text-red-500'>*</span></h5>

              <select

                className=' w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md '>
                <option value="" disabled>
                  -- Select your nationality --
                </option>
                {countries.map((country) => (
                  <option value={country.name.common} key={country.cca3}>{country.name.common}</option>

                ))}
              </select>
            </div>
            <div className='flex-1 ml-3'>
              <h5 className='ml-3 font-medium text-sm'>City<span className='text-red-500'>*</span></h5>

              <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md' placeholder='John Smith' type="text" />
            </div>

          </div>
          <div className='flex flex-row mt-2'>
            
              <div className='flex-1 mr-3'>
                <h5 className='ml-3 font-medium text-sm'>Phone Number<span className='text-red-500'>*</span></h5>

                <div className="flex items-center">
                  {/* Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="py-2 px-3 rounded-l-md shadow-inner focus:outline-none font-semibold text-sm w-24 bg-gray-100 flex items-center "
                    >
                      <img
                        className="w-5 h-4 mr-1"
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                      />
                      <span className='flex'>{selectedCountry.code} <FaAngleDown className='ml-1 pt-1 text-lg' /> </span>

                    </button>

                    {/* {isDropdownOpen && (
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
                    )} */}
                  </div>

                  {/* Input */}
                  <input 

                    className="w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md"
                    placeholder="012 345 6789"
                  />
                </div>

              
            </div>
            <div className='flex-1 ml-3'>
              <h5 className='ml-3 font-medium text-sm'>Postal Code<span className='text-red-500'>*</span></h5>

              <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md' placeholder='0000000' type="text" />
            </div>

          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Website<span className='text-red-500'>*</span></h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md'
              placeholder="Link to your Website"
              type="text" />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Facebook</h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md'
              placeholder="Link to your Facebook's Page"
              type="text" />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Youtube</h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md'
              placeholder="Link to your Youtube's Page"
              type="text" />
          </div>
          <div className='flex-1 mt-2'>
            <h5 className='ml-3 font-medium text-sm'>Instagram</h5>
            <input className='w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md'
              placeholder="Link to your Instagram's Page"
              type="text" />
          </div>
          <div className='flex flex-row mt-2'>
            <div className='flex-1'>
              <h5 className='ml-3 font-medium text-sm'>Year Established<span className='text-red-500'>*</span></h5>

              <select

                className=' w-full py-2 px-3 mt-1 font-medium rounded-md inset-shadow-2xs  focus:outline-none rounded-l-md '>
                <option value="" disabled>
                  -- Select your Year Established --
                </option>
                {birthYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>

                ))}
              </select>
            </div>
          </div>
          <div className='grid justify-items-end'>
            <button className=' mt-7 px-6 py-3 rounded-full mr-1 bg-[#167DC8] text-white font-medium text-sm hover:bg-[#104672] transition duration-300 '>Save Changes</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InformationTab