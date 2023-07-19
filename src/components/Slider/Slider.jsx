import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import './Slider.css'
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom";
import CircularProgress from "../CircularProgress/CircularProgress";

const MainSlider = ({ data }) => {

  const ImagebaseUrl = useSelector((store) => store.home.url)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
  };

  return (
    <>
      <Slider {...settings}>
        {
          data.map((ele) => {
            return (
              <Link to={`/${ele?.first_air_date ? 'tv' : 'movie' }/${ele?.id}`}>
                <div className="slider-card" key={uuidv4()}>
                  <div className="image-block">
                    <img className="card-img" src={ImagebaseUrl + 'original' + ele?.poster_path} alt={ele?.title} />
                  </div>
                  <div className="content-block">
                    <CircularProgress rating={(ele?.vote_average)} />
                    <h3>{ele?.title || ele?.name}</h3>
                    <span className="date">{ele.release_date || ele?.first_air_date}</span>
                  </div>
                </div>
              </Link>
            )

          })
        }
      </Slider>
    </>
  );
}

export default MainSlider

