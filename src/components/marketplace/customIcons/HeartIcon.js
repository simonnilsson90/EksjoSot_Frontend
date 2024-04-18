import React from 'react';

const HeartIcon = ({
  fillColor = 'none',  // Default fill color is transparent
  strokeColor = 'red',  // Default stroke color is red
  strokeWidth = '2',  // Default stroke width
  size = '24',  // Default size
  onClick
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      width={size}
      height={size}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};

export default HeartIcon;
