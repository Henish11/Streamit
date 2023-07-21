import React, { useEffect, useState } from 'react'
import { requests } from '../../utils/config'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MovieList.css'
import { ListShimmer } from '../../Shimmer/Shimmer'

const MovieList = () => {

  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(2)

  const getMovieList = async () => {
    await axios.get( requests.fetchActionMovies + `&page=${page}`)
      .then((response) => {
        setMovieList( prev => [...prev, ...response?.data?.results])
        console.log(response?.data);
      })
  }
  useEffect(() => {
    getMovieList()
  }, [page])

  const scrollHandle = () => {
   if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight - 100) {
       setPage(page => page + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle)
    return () => {
      return window.removeEventListener('scroll', scrollHandle)
    }
  }, [])

  return (
    <div className='mainContainer withSpace'>
      <div className="mainTitle">All Movies</div>
      {
        movieList.length === 0 ? <ListShimmer /> : (
            <div className="listsWrap">
              {
                movieList.map((movie) => {
                  return <MovieCard ele={movie} key={uuidv4()} />
                }).slice(0, -2)
              }
            </div>
        )
      }

    </div>
  )
}

export default MovieList