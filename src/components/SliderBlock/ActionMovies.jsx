import React, { useEffect, useState } from 'react'
import MainSlider from '../Slider/Slider'
import axios from 'axios'
import { BASE_URL, requests } from '../../utils/config'

const ActionMovies = () => {

  const [streamData,setStreamData] = useState([])

  const getStreamData = () =>{
    axios.get(`${BASE_URL}${requests.fetchActionMovies}`)
         .then((respone)=>{
            console.log(respone?.data?.results);
            setStreamData(respone?.data?.results)
         })
         .catch((err)=>{
             console.log(err);
         })
  }
  useEffect(()=>{
    getStreamData()
  },[])


  return (
    <div className='sliderContainer'>
        <h3 className='sliderTitle'>Action Movies</h3>
        <MainSlider data={streamData}/> 
    </div>

  )
}

export default ActionMovies