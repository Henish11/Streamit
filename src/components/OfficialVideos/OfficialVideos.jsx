import React from 'react'
import { ReactComponent as PlayIcon } from '../../assets/icons/playicon.svg'
import './OfficialVideos.css'

const OfficialVideos = ({ videos }) => {
  console.log(videos);
  return (
    <div className='smallContainer'>
      <h3>Official Videos</h3>
      <div className="videoWrap">
        {videos.map((video) => (
          <div className="videoBox">
            <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt="Thumbnail" />
            <PlayIcon />
            <p>{video?.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfficialVideos