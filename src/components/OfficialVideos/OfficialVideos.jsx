import React from 'react'
import { ReactComponent as PlayIcon } from '../../assets/icons/playicon.svg'
import './OfficialVideos.css'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const OfficialVideos = ({ videos }) => {

  return videos.length >= 0 && (
    <div className='smallContainer'>
      <h3 className='mainTitle'>Official Videos</h3>
      <div className="videoWrap">
            {videos.map((video) => {
              return video.key && (<>
                <Link to={`https://www.youtube.com/watch?v=${video.key}`} className="videoBox" target='_blank' key={uuidv4()}>
                  <div className="thumbBox">
                    <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt="Thumbnail" />
                    <div className="play-icon">
                      <PlayIcon />
                    </div>
                  </div>
                  <p>{video?.name}</p>
                </Link>
              </>
              )
            })}
          </div>
    </div>
  )
}

export default OfficialVideos