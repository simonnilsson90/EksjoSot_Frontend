import React from 'react';
import Slider from "react-slick";
import CardsComponent from "./CardsComponent";
import data from '../../../data/dataArray';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'; 
import { useTheme } from '@mui/material';

export default function SimpleSlider() {
  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`} 
        style={{ ...style, fontSize: '20px' }}
        onClick={onClick}
      >&#9654;</div>
    );
  }
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, fontSize: '20px' }}
        onClick={onClick}
      >&#9664;</div>
    );
  }
  
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: "ease-in",
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Filtered data
  const imageData = data.filter(item => item.type === 'Images');
  const audioData = data.filter(item => item.type === 'Audio');
  const videoData = data.filter(item => item.type === 'Video');
  const otherData = data.filter(item => item.type === 'Other');

  return (
    <div className="content-sliders">
      {/* Image Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {imageData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Audio Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {audioData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Video Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {videoData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Other Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {otherData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
