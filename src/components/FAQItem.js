// FAQItem.js
import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-4 font-Michroma border-[#27A5EF] max-md:mx-6">
      <button
        className="flex justify-between items-left w-full py-4 px-8 text-left focus:outline-none"
        onClick={toggleFAQ}
      >
        <span className="font-medium text-white ">{question}</span>
        <span className="text-white pl-5 max-md:pl-10">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="py-2 pb-4 px-6 text-white text-left max-md:text-sm max-md:w-64 h-auto">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
