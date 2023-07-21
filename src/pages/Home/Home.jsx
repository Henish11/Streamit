import React from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Trending from '../../components/SliderBlock/Trending'
import NetflixOriginals from '../../components/SliderBlock/NetflixOriginals'
import TopRated from '../../components/SliderBlock/TopRated'
import ActionMovies from '../../components/SliderBlock/ActionMovies'
import ComedyMovies from '../../components/SliderBlock/ComedyMovies'
import HorrorMovies from '../../components/SliderBlock/HorrorMovies'
import RomanceMovies from '../../components/SliderBlock/RomanceMovies'
import UpcomingMovies from '../../components/SliderBlock/UpcomingMovies'

const Home = ({data}) => {
  return (
    <>
      <HeroBanner data={data}/>
      <Trending/>
      <NetflixOriginals/>
      <UpcomingMovies/>
      <TopRated/>
      <ActionMovies/>
      <ComedyMovies/>
      <HorrorMovies/>
      <RomanceMovies/>
    </>
  )
}

export default Home
