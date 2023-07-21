import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, API_KEY } from '../../utils/config'
import DetailsBanner from '../../components/DetailsBanner/DetailsBanner'
import MovieCast from '../../components/MovieCast/MovieCast'
import SimilarMovies from '../../components/SliderBlock/SimilarMovies'
import Recommendations from '../../components/SliderBlock/Recommendations'
import OfficialVideos from '../../components/OfficialVideos/OfficialVideos'

const MovieDetails = () => {

   const { id, params } = useParams()
   const [movieDetails, SetMovieDetails] = useState([])
   const [video,setVideo] = useState([])
   const [officialVideos,setOfficialVideos] = useState([])


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
   }, [id])

   // Videos
   const getVideo = () =>{
      axios.get(`${BASE_URL}/${params}/${id}/videos?api_key=${API_KEY}`)
            .then((respons)=>{
               setVideo(respons?.data?.results)
               setOfficialVideos(respons?.data?.results)
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
       <OfficialVideos videos={officialVideos}/>
       <SimilarMovies id={id} params={params}/>
       <Recommendations id={id} params={params}/>
     </>
   )
}

export default MovieDetails