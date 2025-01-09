import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import icons

const faqData = [
  {
    question: 'What is Trip2Halong? ',
    answer: "Trip2Halong is an innovative digital platform dedicated to transforming travel experiences in Halong, Vietnam. Designed to meet the growing demand for seamless and efficient trip planning, Trip2Halong allows customers to conveniently make online reservations for cruises, hotels, and local attractions in one of Vietnam's most iconic destinations.",
  },
  {
    question: 'Why should I book through Trip2Halong instead of other platforms?',
    answer:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
  },
  {
    question: 'What types of cruises are available on Trip2Halong?',
    answer:
      'You can install Tailwind CSS in your React project using npm or yarn, configure it, and use its utility classes directly in your JSX.',
  },
  {
    question: 'What types of accommodations can I find on Trip2Halong?',
    answer:
      'State is a local data storage for a component that can change over time. Props are inputs passed to a component to control its behavior or appearance.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'State is a local data storage for a component that can change over time. Props are inputs passed to a component to control its behavior or appearance.',
  },
  {
    question: 'How can I contact Trip2Halong for support?',
    answer:
      'State is a local data storage for a component that can change over time. Props are inputs passed to a component to control its behavior or appearance.',
  },
];

const FaQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex w-full mt-48 flex-col items-center px-4 py-10 bg-gray-100">
      <h1 className="text-3xl  w-11/12 lg:w-3/4 text-start font-bold text-gray-800">Frequently Asked Questions</h1>

      <ul className="list-disc mt-5 w-11/12 ml-10 lg:w-3/4 text-start space-y-2">
        <li>About Trip2Halong</li>
        <li>Privacy Policy</li>
        <li>Partnership</li>

      </ul>
      <h1 className="text-3xl mt-5 font-bold  w-11/12 lg:w-3/4 text-start text-gray-800">About Trip2Halong</h1>


      <div className=" w-11/12 lg:w-3/4  space-y-0 mt-5">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg shadow">
            <button
              className="flex justify-between w-full p-4 text-left text-gray-800 focus:outline-none hover:bg-gray-50"
              onClick={() => handleToggle(index)}
            >
              <span className="font-medium">{item.question}</span>
              <span className="text-gray-500">
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {expandedIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaQ;
