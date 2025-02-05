import { useState } from "react";

const faqData = [
  {
    question: "What is Trip2Halong?",
    answer:
      "Trip2Halong is an innovative digital platform dedicated to transforming travel experiences in Halong, Vietnam...",
  },
  {
    question: "Why should I book through Trip2Halong instead of other platforms?",
    answer:
      "Trip2Halong offers exclusive deals, seamless booking experience, and top-tier customer support...",
  },
  {
    question: "What types of cruises are available on Trip2Halong?",
    answer: "We offer luxury, budget, and adventure cruises tailored to your needs...",
  },
  {
    question: "What types of accommodations can I find on Trip2Halong?",
    answer: "You can find hotels, resorts, and homestays ranging from budget to luxury...",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers...",
  },
  {
    question: "How can I contact Trip2Halong for support?",
    answer: "You can reach us via email, phone, or live chat on our website...",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-4 mx-auto bg-gray-100 rounded-lg shadow">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex items-center justify-between w-full px-4 py-3 font-semibold text-left"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}