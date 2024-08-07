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
          className="flex justify-between items-center w-full  py-2 text-left 
            focus:outline-none   lg:border-white md:border-white lg:border-2 md:border-2 "
        >
          <span className="font-medium px-2 text-white  ">{title}</span>
          <span className=' pr-4 text-white'>
            {isOpen ? (
              <div className='  '>

          
              <svg
                className="w-7 h-7  "
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
              </div>
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
          <div className=" px-2  lg:bg-white lg:text-black md:bg-white md:text-black">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;