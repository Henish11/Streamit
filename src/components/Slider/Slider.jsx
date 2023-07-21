import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import './Slider.css'
import { v4 as uuidv4 } from "uuid"
import CircularProgress from "../CircularProgress/CircularProgress";
import { CardShimmer } from "../../Shimmer/Shimmer";
import { useNavigate } from "react-router-dom";

const MainSlider = ({ data }) => {

  const ImagebaseUrl = useSelector((store) => store.home.url)
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return data.length === 0 ? <CardShimmer /> : (
    <>
      <Slider {...settings}>
        {
          data.map((ele) => {
            return (
              <div className="slider-card" key={uuidv4()} 
              onClick={()=>{
                navigate(`/${ele?.first_air_date ? 'tv' : 'movie'}/${ele?.id}`)
                window.scroll(0,0)
              }}
              >
                <div className="image-block">
                  <img className="card-img" src={ImagebaseUrl + ele?.poster_path} alt={ele?.title} />
                </div>
                <div className="content-block">
                  <CircularProgress rating={(ele?.vote_average)} />
                  <h3>{ele?.title || ele?.name}</h3>
                  <span className="date">{ele.release_date || ele?.first_air_date}</span>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </>
  );
}

export default MainSlider

