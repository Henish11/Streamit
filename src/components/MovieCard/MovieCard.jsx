import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import CircularProgress from "../CircularProgress/CircularProgress";
import { useSelector } from 'react-redux';
import './MovieCard.css'
import dayjs from 'dayjs';
import Img from '../LazyLoadImage/Img';

const MovieCard = ({ ele }) => {

    const ImagebaseUrl = useSelector((store) => store.home.url)
    const navigate = useNavigate()
    return ele.poster_path && (
        <div className="movieCard" key={uuidv4()}
            onClick={() => {
                navigate(`/${ele?.first_air_date ? 'tv' : 'movie'}/${ele?.id}`)
                window.scroll(0, 0)
            }}
        >
            <div className="imageBlock">
               {ele?.poster_path ? <Img className='cardImg' src={ImagebaseUrl + ele?.poster_path} alt={ele?.title || ele?.name} /> : <div className='dummyImg'> No Image</div>}   
            </div>
            <div className="contentBlock">
                {ele?.vote_average ? <CircularProgress rating={(ele?.vote_average)}/> : null}
                <h3>{ele?.title || ele?.name}</h3>
                <span className="date">{  dayjs(ele.release_date).format("MMM DD, YYYY") || dayjs(ele?.first_air_date).format("MMM DD, YYYY")}</span>
            </div>
        </div>
    )
}

export default MovieCard