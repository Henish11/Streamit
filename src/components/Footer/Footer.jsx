import React, { useEffect, useState } from 'react'
import './Footer.css'
import mainLogo from '../../assets/icons/logo.png'
import { useNavigate } from 'react-router-dom'
import {LiaAngleUpSolid} from 'react-icons/lia'

const Footer = () => {

  const navigate = useNavigate()
  const [hide,setHide] = useState(false)

  const handleHide = () =>{
    if(window.scrollY >= 500){
      setHide(true)
    }else{
      setHide(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleHide)
    return(()=>{
      window.removeEventListener('scroll',handleHide)
    })
  },[])


  return (
    <div className='footer'>
      <div className="mainContainer">
        <div className="leftBlock">
          <img src={mainLogo} alt="logo" onClick={() => { navigate('/') }} />
        </div>
        <div className="rightBlock">
          <p>© 2023 Streamit By HenisH</p>
        </div>
      </div>

      {
        ( <div 
        className={hide ? "backToTop" : "backToTop active"}
        onClick={(()=>window.scroll(0,0))}>
          <LiaAngleUpSolid/>
        </div>)
      }


    </div>
  )
}

export default Footer