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
      <div className="cardShimmer-wrap">
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