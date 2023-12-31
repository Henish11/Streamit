import React, { useEffect,useState } from 'react'
import './Header.css'
import mainLogo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Header = () => {

  const [active,setActive] = useState(false)
  const [searchShow,setSearchShow] = useState(false)

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
           <Link to='/'><img src={mainLogo} alt="Logo" /></Link>
          </span>
          <ul className='navbar'>
            <li> <Link to='/movie'>Movies</Link>  </li>
            <li> <Link to='/tv'>TV</Link> </li>
          </ul>
        </div>
        <div className="right-block">
             <span className='searchBlock' onClick={()=>{setSearchShow(!searchShow)}}> { !searchShow ? <FiSearch /> : <AiOutlineCloseCircle />}</span>
             {searchShow && <SearchBox setSearchShow={setSearchShow} /> }   
        </div>
      </nav>
    </div>
    
  )
}

export default Header