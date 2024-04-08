import React from 'react';
import Slider from "react-slick";
import CardsComponent from "../cards/CardsComponent";
import data from '../../../../data/dataArray';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'; 
import { useTheme } from '@mui/material';
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


export default function SimpleSlider() {
  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`} 
        style={{ ...style, fontSize: '20px' }}
        onClick={onClick}
      ><IoIosArrowForward /></div>
    );
  }
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, fontSize: '20px' }}
        onClick={onClick}
      ><IoIosArrowBack /></div>
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
    cssEase: "ease-out",
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

      {/*  Image Slider */}
      <div className="slider-container">
      <FaCamera />
        <Slider {...settings}>
          {imageData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Audio Slider */}
      <div className="slider-container">
       <AiFillAudio />
         <Slider {...settings}>
          {audioData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Video Slider */}
      <div className="slider-container">
     
      <IoIosFilm />

        <Slider {...settings}>
          {videoData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Other Slider */}
      <div className="slider-container">
      <HiDotsHorizontal />
        <Slider {...settings}>
          {otherData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div> 
    </div>
  );
}
