import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import './DetailsBanner.css'
import Modal from '../Modal/Modal'
import { ReactComponent as PlayIcon } from '../../assets/icons/playicon.svg'

const DetailsBanner = ({movieDetails,video}) => {

    const ImagebaseUrl = useSelector((store => store.home.url))
    const [openModal,setOpenModal] = useState(false)
    


    

    return (
        <>
            <div className='detailsBanner'>
                <div className="backdrop-img">
                    <span>
                        <img src={`${ImagebaseUrl}original${movieDetails?.backdrop_path}`} alt={movieDetails?.title} />
                    </span>
                </div>
                <div className="opacity-layer"></div>
                <div className="smallContainer">
                    <div className="movieDetailsWrap">
                        <div className="left-block">
                            <img src={`${ImagebaseUrl}original${movieDetails?.poster_path}`} alt={movieDetails?.original_title} />
                        </div>
                        <div className="right-block">
                            <h1 className="title">{movieDetails?.title || movieDetails?.original_name} ({(movieDetails?.release_date) || (movieDetails?.last_air_date)})</h1>
                            <h2 className="sub-title">{movieDetails?.tagline}</h2>
                            <div className="genres">
                                {
                                    movieDetails?.genres?.map((genre) => {
                                        return <span key={uuidv4()}>{(genre?.name)}</span>
                                    })
                                }
                            </div>
                            <div className="rating video-player">
                                <CircularProgress rating={(movieDetails.vote_average)} />
                                <div className='play-icon' onClick={()=>{setOpenModal(true)}}>
                                    <PlayIcon />
                                    <h4>Watch Trailer</h4>
                                </div>
                                
                                {openModal && 
                                 <Modal 
                                   video={video}
                                   setOpenModal={setOpenModal}
                                 /> 
                                }
                                
                            </div>
                            <div className="overview">
                                <h4 style={{ marginBottom: '10px', fontSize: '20px' }}>Overview</h4>
                                <p>{movieDetails?.overview}</p>
                            </div>
                            <ul className="info-list">
                                <li key={uuidv4()}>
                                    <span key={uuidv4()}>Status: {movieDetails?.status} </span>
                                    <span key={uuidv4()}>Release Date: {movieDetails?.release_date || movieDetails?.last_air_date}</span>
                                    <span key={uuidv4()}> {movieDetails?.runtime && `Runtime: ${Math.floor(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}min`} </span>
                                </li>

                                <li key={uuidv4()}>
                                    <span key={uuidv4()}>Director: {movieDetails?.status} </span>
                                    <span key={uuidv4()}>Release Date: {movieDetails?.release_date}</span>
                                    <span key={uuidv4()}>Runtime: {`${Math.floor(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}min`} </span>
                                </li>

                                <li key={uuidv4()}>
                                    <span key={uuidv4()}>Status: {movieDetails?.status} </span>
                                    <span key={uuidv4()}>Release Date: {movieDetails?.release_date || movieDetails?.last_air_date}</span>
                                    <span key={uuidv4()}> {movieDetails?.runtime && `Runtime: ${Math.floor(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}min`} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsBanner