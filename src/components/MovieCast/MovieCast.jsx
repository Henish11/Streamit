import React from 'react'
import { useSelector } from 'react-redux'
import './MovieCast.css'
import { v4 as uuidv4 } from 'uuid'

const  MovieCast = ({castDetails}) => {

  const ImgbaseUrl = useSelector((store)=>store.home.url)

  return (
    <div className='smallContainer'>
      <h3 className='mainTitle'>Top Cast</h3>
      <div className="castWrap">
      {
        castDetails?.cast?.map((castinfo)=>{
          return(
            <div className='castCard' key={uuidv4()}>
              { castinfo?.profile_path ? <img src={ImgbaseUrl + castinfo?.profile_path} alt="Cast" /> : <div className="dummyImg"> No Image</div> } 
              <h3>{castinfo?.name || castinfo?.original_name}</h3>
              <p>{castinfo?.character}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default MovieCast