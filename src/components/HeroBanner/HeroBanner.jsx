import React, { useState,useEffect } from 'react'
import {requests } from '../../utils/config'
import axios from 'axios'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './HeroBanner.css'
import { useNavigate } from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'



const HeroBanner = ({data}) => {

  const[bannerImage,setBannerImage] =  useState('');
  const[bannerInfo,setBannerInfo] = useState('')

  const imgbaseUrl = useSelector((store)=>store.home.url)
  const navigate = useNavigate()

  const getBannerData = ()=>{
        axios.get(requests.fetchTrending)
           .then((respone)=>{
              console.log(respone?.data);
              const backInfo = respone?.data?.results[Math.floor(Math.random() * 20)]
              setBannerImage(imgbaseUrl + backInfo?.backdrop_path)
              setBannerInfo(backInfo)
           })
           .catch((err)=>{
                console.log(err);
           })    
  }

   useEffect(()=>{
      getBannerData()
   },[data])
 
  return (
    <div className='hero-banner'>
       <div className="backdrop-img">
         <span>
            {bannerImage ? <img src={bannerImage} alt="banner" /> : null}
         </span>
       </div>
       <div className="opacity-layer"></div>
       <div className="mainContainer">
         <div className="banner-content ">
            <h1>{bannerInfo?.name || bannerInfo?.title}</h1>
            <p>{bannerInfo?.overview}</p>
            <button className='playBtn' onClick={()=>{navigate(`/${bannerInfo?.media_type}/${bannerInfo?.id}`)}}> <FaPlay/> Play Now</button>
         </div>
       </div>
    </div>
  )
}

export default HeroBanner