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
      'Trip2Halong is dedicated exclusively to Halong Bay tours and experiences. Our team comprises local experts who have in-depth knowledge of the area, ensuring you get the most authentic and well-curated experiences.',
  },
  {
    question: 'What types of cruises are available on Trip2Halong?',
    answer:
      'Perfect for travelers with limited time, our day cruises offer a taste of Halong Bay’s stunning scenery with visits to iconic sites like Sung Sot Cave, Titop Island, or Luon Cave. Enjoy a delicious lunch onboard while soaking in the beauty of the bay.',
  },
  {
    question: 'What types of accommodations can I find on Trip2Halong?',
    answer:
      'Experience ultimate relaxation at beachfront or island resorts that offer private villas, pools, and top-notch services. Perfect for couples or families seeking a tranquil escape.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
     "Trip2Halong offers a variety of secure payment methods to make your booking process convenient:\n" 
     +"Credit/Debit Cards:\n"+
"We accept major credit and debit cards, including Visa, Mastercard, American Express, and Discover."
     ,
  },
  {
    question: 'How can I contact Trip2Halong for support?',
    answer:
      'Trip2Halong is committed to providing excellent customer service, and we offer several ways to get in touch:',
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
