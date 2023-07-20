import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, API_KEY } from '../../utils/config'
import './MovieDetails.css'
import DetailsBanner from '../../components/DetailsBanner/DetailsBanner'
import MovieCast from '../../components/MovieCast/MovieCast'

const MovieDetails = () => {

   const { id, params } = useParams()
   const [movieDetails, SetMovieDetails] = useState([])
   const [video,setVideo] = useState([])


   // Details
   const getMovieDetails = async () => {
      await axios.get(`${BASE_URL}/${params}/${id}?api_key=${API_KEY}`)
         .then((respone) => {
            console.log(respone.data);
            SetMovieDetails(respone.data)
         })
         .catch((err) => {
            console.log(err);
         })
   }
   useEffect(() => {
      getMovieDetails()
      getVideo()
   }, [])

   // Videos
   const getVideo = () =>{
      axios.get(`${BASE_URL}/${params}/${id}/videos?api_key=${API_KEY}`)
            .then((respone)=>{
               setVideo(respone?.data?.results)
            })
            .catch((err)=>{
                console.log(err);
            })
   }

   console.log(video);

   return (
     <>
       <DetailsBanner movieDetails={movieDetails} video={video} />
       <MovieCast id={id} params={params}/>
     </>
   )
}

export default MovieDetails