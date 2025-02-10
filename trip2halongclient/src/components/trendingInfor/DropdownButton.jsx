import React, { useState }  from 'react'
import { CgChevronDown } from "react-icons/cg";

const DropdownButton = ({ options, defaultValue, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng
  const [selectedOption, setSelectedOption] = useState(defaultValue); // Giá trị được chọn

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Đổi trạng thái mở/đóng
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Cập nhật giá trị được chọn
    setIsOpen(false); // Đóng dropdown
    onSelect(option); // Gửi giá trị lên component cha (nếu cần)
  };
  return (
    <div className="relative inline-block text-left">
    {/* Nút chính */}
    <button
      onClick={toggleDropdown}
      className="flex items-center justify-between w-full px-4 py-2 font-sans bg-white border border-[#F2F4F4] rounded-md hover:border-blue-500 focus:outline-none"
    >
      <span>{selectedOption}</span>
      <CgChevronDown className="ml-2" />
    </button>

    {/* Dropdown menu */}
    {isOpen && (
      <div className="absolute left-0 z-10 w-32 mt-2 bg-white border border-[#F2F4F4] rounded-md shadow-lg">
        <ul className="py-1">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default DropdownButton
