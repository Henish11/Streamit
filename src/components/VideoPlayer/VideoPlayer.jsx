import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = ({YTkey}) => {
  return (
    <ReactPlayer url={`https://www.youtube.com/watch?v=${YTkey}`} controls />
  )
}

export default VideoPlayer