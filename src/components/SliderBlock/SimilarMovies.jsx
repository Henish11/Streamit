import React, { useEffect, useState } from 'react'
import MainSlider from '../Slider/Slider'
import axios from 'axios'
import { BASE_URL,API_KEY } from '../../utils/config'

const SimilarMovies = ({id,params}) => {

  const [streamData,setStreamData] = useState([])

  const getStreamData = () =>{
    axios.get(`${BASE_URL}/${params}/${id}/similar?api_key=${API_KEY}`)
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
  },[id])


  return streamData.length !== 0 && (
    <div className='sliderContainer mainContainer'>
        <h3 className='sliderTitle'>Similar Movies</h3>
        <MainSlider data={streamData}/> 
    </div>

  )
}

export default SimilarMovies