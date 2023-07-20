import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { BASE_URL,API_KEY } from '../../utils/config'
import { useSelector } from 'react-redux'
import './MovieCast.css'

const  MovieCast = ({id,params}) => {

  const ImgbaseUrl = useSelector((store)=>store.home.url)
  const [castDetails,setCastDetails] = useState([])
  const getMovieCast = () =>{
    axios.get(`${BASE_URL}/${params}/${id}/credits?api_key=${API_KEY}`)
         .then((respone)=>{
          setCastDetails(respone?.data)
         })
         .catch((err)=>{
             console.log(err);
         })
  }
  console.log(castDetails);
  useEffect(()=>{
    getMovieCast()
  },[])
  

  return (
    <div className='smallContainer'>
      <div className="castWrap">
      {
        castDetails?.cast?.map((castinfo)=>{
          return(
            <div className='castCard'>
              <img src={ImgbaseUrl+'original'+castinfo?.profile_path} alt="" />
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