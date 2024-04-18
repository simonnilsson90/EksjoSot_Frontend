import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "24px" }}
      onClick={onClick}
    />
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "24px" }}
      onClick={onClick}
    />
  );
};
