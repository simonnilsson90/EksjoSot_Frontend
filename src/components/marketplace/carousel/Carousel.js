import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import data from '../../../data/dataArray';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'; 
import ResponsiveIcon from '../customIcons/ResponsiveIcon';
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import CardsComponent from "../dataSetsCards/cards/mainCardsComponent/CardsComponent";
import theme from '../dataSetsCards/theme/Theme';
import { Typography } from "@mui/material";
import { PrevArrow, NextArrow } from "../customIcons/CustonArrows";


export default function carousel() {
    // Filtered data
  const imageData = data.filter(item => item.type === 'Images');
  const audioData = data.filter(item => item.type === 'Audio');
  const videoData = data.filter(item => item.type === 'Video');
  const otherData = data.filter(item => item.type === 'Other');

const typeDescription = ['Images', 'Video', 'Audio', 'Other']


  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 4},
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
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.xs,
        settings: { slidesToShow: 1 },
      }
    ],

  }

  return (

  
    <div className="content-sliders">

      {/*  Image Slider */}
      <div className="slider-container">
      <ResponsiveIcon Icon={FaCamera} style={{ marginTop: '15px', marginLeft: '20px'}} text={<Typography sx={{ fontWeight: 'bold' }}>{typeDescription[0].toUpperCase()}</Typography>}

textStyle={{fontSize: theme.typography.body1.fontSize}}/>
      
        <Slider {...settings} >
          {imageData.map((item, index) => (
            <CardsComponent key={index} item={item} />
          ))}
        </Slider>
      </div>

      {/* Audio Slider */}
      <div className="slider-container">
      <ResponsiveIcon Icon={AiFillAudio} style={{ marginTop: '15px', marginLeft: '20px'}} text={<Typography sx={{ fontWeight: 'bold' }}>{typeDescription[1].toUpperCase()}</Typography>}
textStyle={{fontSize: theme.typography.body1.fontSize}}/>
         <Slider {...settings}>
          {audioData.map((item, index) => (
            <CardsComponent key={index} item={item} />
          ))}
        </Slider>
      </div>

      {/* Video Slider */}
      <div className="slider-container">
     
      <ResponsiveIcon Icon={IoIosFilm} style={{ marginTop: '15px', marginLeft: '20px'}} text={<Typography sx={{ fontWeight: 'bold' }}>{typeDescription[2].toUpperCase()}</Typography>}
textStyle={{fontSize: theme.typography.body1.fontSize}}/>

        <Slider {...settings}>
          {videoData.map((item, index) => (
            <CardsComponent key={index} item={item} />
          ))}
        </Slider>
      </div>

      {/* Other Slider */}
      <div className="slider-container">
      <ResponsiveIcon 
      Icon={HiDotsHorizontal} 
      style={{ marginTop: '15px', marginLeft: '20px'}} text={<Typography sx={{ fontWeight: 'bold' }}>{typeDescription[3].toUpperCase()}</Typography>}

      textStyle={{fontSize: theme.typography.body1.fontSize}}/>
        <Slider {...settings}>
          {otherData.map((item, index) => (
            <CardsComponent key={index} item={item} />
          ))}
        </Slider>
      </div> 
    </div>


  );

}