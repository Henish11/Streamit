import React, { useState,useEffect } from 'react'
import { BASE_URL,requests } from '../../utils/config'
import axios from 'axios'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './HeroBanner.css'


const HeroBanner = ({data}) => {

  const[bannerImage,setBannerImage] =  useState('');
  const[bannerInfo,setBannerInfo] = useState('')

  const imgbaseUrl = useSelector((store)=>store.home.url)

  const getBannerData = ()=>{
        axios.get(`${BASE_URL}${requests.fetchTrending}`)
           .then((respone)=>{
              console.log(respone?.data);
              const backInfo = respone?.data?.results[Math.floor(Math.random() * 20)]
              setBannerImage(`${imgbaseUrl}original${backInfo?.backdrop_path}`)
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
            {data ? <img src={bannerImage} alt="banner" /> : null}
         </span>
       </div>
       <div className="opacity-layer"></div>
       <div className="banner-content">
         <div className="mainContainer">
            <h1>{bannerInfo?.name || bannerInfo?.title}</h1>
            <p>{bannerInfo?.overview}</p>
            <button className='play-btn'>Play</button> <button className='info-btn'>More Info</button>
         </div>
       </div>
    </div>
  )
}

export default HeroBanner