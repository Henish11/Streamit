import React from 'react'
import './Errors.css'
import { useNavigate } from 'react-router-dom'


const Errors = () => {
  const navigate = useNavigate()
  return (
    <div className="mainContainer errorWrap">
       <h1>404</h1>
       <h2>Oopss! Page Not Found</h2>
       <h3>The requested page does not exist.</h3>
       <button onClick={()=>{navigate('/')}}>Back To Home</button>
    </div>
  )
}

export default Errors