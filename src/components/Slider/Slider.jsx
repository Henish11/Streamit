import React from "react";
import Slider from "react-slick";
import './Slider.css'
import { CardShimmer } from "../../Shimmer/Shimmer";
import MovieCard from "../MovieCard/MovieCard";
import {v4 as uuidv4} from 'uuid'

const MainSlider = ({ data }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return data.length === 0 ? <CardShimmer /> : (
    <>
      <Slider {...settings}>
         {
          data.map((ele)=>{
            return  <MovieCard ele={ele} key={uuidv4()}/>
          })
         }
      </Slider>
    </>
  );
}

export default MainSlider

