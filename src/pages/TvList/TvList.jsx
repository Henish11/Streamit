import React,{useEffect, useState} from 'react'
import {requests} from '../../utils/config'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import MovieCard from '../../components/MovieCard/MovieCard'
import '../MovieList/MovieList.css'
import { ListShimmer } from '../../Shimmer/Shimmer'

const TvList = () => {

  const [tvList,setTvList] = useState([])
  const [page,setPage] = useState(2)

  const getMovieList = async () =>{
       await axios.get(requests.fetchTv+`&page=${page}`)
       .then((response)=>{
           setTvList(prev =>[...prev,...response?.data?.results])
       })
  }
  useEffect(()=>{
    getMovieList()
  },[page])

  const scrollHandle = () =>{
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight - 80){
        setPage(page =>  page + 1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollHandle)
    return()=>{
      return  window.removeEventListener('scroll',scrollHandle)
    }
  },[])

  return (
    <div className='mainContainer withSpace'>
        <div className="mainTitle">All Tv</div>
        {tvList.length === 0 ? <ListShimmer /> :<div className="listsWrap">
            {
                tvList.map((tv)=>{
                   return <MovieCard ele={tv} key={uuidv4()}/>
                }).slice(0,-2)
            }
        </div>}
    </div>
  )
}

export default TvList