// Accordion.js
import React, { useState, useRef } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className=" ">
        <button
          onClick={toggleAccordion}
          className="flex justify-between items-center w-full  py-2 text-left lg:bg-sot bg-white  focus:outline-none border-gray-600 border-2 lg:border-sotlg:border-2"
        >
          <span className="font-medium px-2 ">{title}</span>
          <span className=' pr-4'>
            {isOpen ? (
              <svg
                className="w-6 h-6 pr-4"
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
          <div className=" py-2 lg:bg-white lg:text-black md:bg-white md:text-black">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;