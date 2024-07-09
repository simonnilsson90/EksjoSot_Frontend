// Accordion.js
import React, { useState, useRef } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border border-gray-300  mb-2">
        <button
          onClick={toggleAccordion}
          className="flex justify-between items-center w-full px-4 py-2 text-left bg-sot  focus:outline-none"
        >
          <span className="font-medium ">{title}</span>
          <span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            )}
          </span>
        </button>
        <div
          ref={contentRef}
          style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
          className={`overflow-hidden transition-max-height duration-700 ease-in-out`}
        >
          <div className="px-4 py-2 bg-white">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;