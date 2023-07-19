import React, { useEffect,useState } from 'react'
import './Header.css'
import {ReactComponent as SiteLogo} from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {

  const [active,setActive] = useState(false)

  const handleScroll = () => {
      if (window.scrollY >= 80) {
        setActive(true);
      }
      else {
        setActive(false);
      }
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
       window.removeEventListener('scroll', handleScroll)
    }
  },[])
  


  return (
    <div className={active ? 'header active' : 'header'}>
      <nav className='mainContainer'>
        <div className="left-block">
          <span className="logo">
           <Link to='/'><SiteLogo/></Link>
          </span>
          <ul className='navbar'>
            <li>Movies</li>
            <li>TV</li>
          </ul>
        </div>
        <div className="right-block">
             <span>Search</span>
        </div>
      </nav>
    </div>
    
  )
}

export default Header