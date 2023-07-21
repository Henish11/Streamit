import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import './DetailsBanner.css'
import Modal from '../Modal/Modal'
import { ReactComponent as PlayIcon } from '../../assets/icons/playicon.svg'
import dayjs from 'dayjs'

const DetailsBanner = ({movieDetails,video}) => {

    const ImagebaseUrl = useSelector((store => store.home.url))
    const [openModal,setOpenModal] = useState(false)
    
    // Director
    // const directorName = castDetails?.filter((member)=>{
    //         return member?.known_for_department === "Directing"
    // })
    // console.log(directorName);
    
    return (
        <>
            <div className='detailsBanner'>
                <div className="backdrop-img">
                    <span>
                      { movieDetails?.backdrop_path && <img src={ImagebaseUrl + movieDetails?.backdrop_path} alt={movieDetails?.title} />}
                    </span>
                </div>
                <div className="opacity-layer"></div>
                <div className="smallContainer">
                    <div className="movieDetailsWrap">
                        <div className="left-block">
                            {movieDetails?.poster_path ? <img src={ImagebaseUrl + movieDetails?.poster_path} alt={movieDetails?.original_title} /> : <div className='dummyImg'> No Image</div>}
                        </div>
                        <div className="right-block">
                            <h1 className="title">{movieDetails?.title || movieDetails?.original_name} ({dayjs(movieDetails?.release_date).format('YYYY') || dayjs(movieDetails?.last_air_date).format('YYYY')})</h1>
                            <h2 className="sub-title">{movieDetails?.tagline}</h2>
                            <div className="genres">
                                {
                                    movieDetails?.genres?.map((genre) => {
                                        return <span key={uuidv4()}>{(genre?.name)}</span>
                                    })
                                }
                            </div>
                            <div className="rating video-player">
                               {movieDetails.vote_average ? <CircularProgress rating={(movieDetails.vote_average)} /> : null}
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
                            <div className="infoList">
                                    <span>Status: <span>{movieDetails?.status}</span> </span>
                                    <span>Release Date: <span>{dayjs(movieDetails?.release_date).format('MMM DD, YYYY') || dayjs(movieDetails?.last_air_date).format('MMM DD, YYYY')}</span></span>
                                    <span> {movieDetails?.runtime && `Runtime: ${Math.floor(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}min`} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsBanner