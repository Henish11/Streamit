import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({rating}) => {
  return (
    <div className='circleRating'>
        <CircularProgressbar 
              value={Math.round(rating*10)/10} 
              maxValue={10} 
              text={Math.round(rating*10)/10}
              styles={buildStyles({
                backgroundColor: '#3e98c7',
                pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textColor: '#fff',
                trailColor: 'transparent',
              })}
              /> 
    </div>
    
  )
}

export default CircularProgress