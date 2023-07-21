import React, { useEffect, useState } from 'react'
import MainSlider from '../Slider/Slider'
import axios from 'axios'
import {requests} from '../../utils/config'

const ComedyMovies = () => {

  const [streamData,setStreamData] = useState([])

  const getStreamData = () =>{
    axios.get(requests.fetchComedyMovies)
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


  return streamData.length !== 0 && (
    <div className='sliderContainer mainContainer'>
        <h3 className='sliderTitle'>Comedy Movies</h3>
        <MainSlider data={streamData}/> 
    </div>

  )
}

export default ComedyMovies