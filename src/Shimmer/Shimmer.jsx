import './Shimmer.css'
import {v4 as uuidv4} from 'uuid'

export const CardShimmer = () => {
  return (
    <>
      <div className="cardShimmer-wrap">
        {
          Array(6).fill(0).map(() => {
            return(<div className="shimmer-cards" key={uuidv4()}>
              <div className="shimmer-card"> 
                <div className="shimmer-card-effect"></div>
                <div className="img"></div>
                <div className="title">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>)
          })
        }
      </div>
    </>
  )
}

export const ListShimmer = () => {
  return (
    <>
      <div className="cardShimmer-wrap listShimmer">
        {
          Array(18).fill(0).map(() => {
            return(<div className="shimmer-cards" key={uuidv4()}>
              <div className="shimmer-card"> 
                <div className="shimmer-card-effect"></div>
                <div className="img"></div>
                <div className="title">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>)
          })
        }
      </div>
    </>
  )
}

export const MovieDetailsShimmer = () =>{
  return (
      <div className="movieDetailsWrap shimmer">
        <div className="left-block">
            <div className="imageShimmer" style={{position:'relative'}}>
            <div className="shimmer-card-effect"></div>
            </div>
        </div>
        <div className="righ-block">
            <div className="line1">
            </div>
            <div className="line2">
            </div>
            <div className="line3">
            </div>
            <div className="line4">
            </div>
            <div className="line5"></div>
            <div className="line6"></div>
            <div className="line7"></div>
            <div className="line8"></div>
        </div>
      </div>
  )
}

export const CastShimmer = () =>{
  return (
    <>
      <div className="cardShimmer-wrap castShimmer">
        {
          Array(5).fill(0).map(() => {
            return(<div className="shimmer-cards" key={uuidv4()}>
              <div className="shimmer-card"> 
                <div className="shimmer-card-effect"></div>
                <div className="img"></div>
                <div className="title">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>)
          })
        }
      </div>
    </>
  )
}

export const MoviesCardShimmer = () =>{
   return(
    <div className="shimmer-card"> 
                <div className="shimmer-card-effect"></div>
                <div className="img"></div>
                <div className="title">
                  <span></span>
                  <span></span>
                </div>
    </div>
   )
}