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
import { useMediaQuery } from '@mui/material';




export default function Carousel() {
  const matches = useMediaQuery('(min-width:600px)'); 

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000", 
         }}
        onClick={onClick}
      />
    );
  }

  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000",}}
        onClick={onClick}
      />
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
    nextArrow: matches ? <SampleNextArrow /> : <></>, 
    prevArrow: matches ? <SamplePrevArrow /> : <></>, 

    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
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
      <FaCamera size={35}/>
        <Slider {...settings} >
          {imageData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Audio Slider */}
      <div className="slider-container">
       <AiFillAudio size={35}/>
         <Slider {...settings}>
          {audioData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Video Slider */}
      <div className="slider-container">
     
      <IoIosFilm size={35}/>

        <Slider {...settings}>
          {videoData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Other Slider */}
      <div className="slider-container">
      <HiDotsHorizontal size={35}/>
        <Slider {...settings}>
          {otherData.map(item => (
            <CardsComponent key={item.id} item={item} />
          ))}
        </Slider>
      </div> 
    </div>
  );
}
