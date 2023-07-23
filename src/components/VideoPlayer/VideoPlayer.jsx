import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = ({YTkey}) => {
  return (
    <ReactPlayer url={`https://www.youtube.com/watch?v=${YTkey}`} controls width='100%'
    height='100%' />
  )
}

export default VideoPlayer