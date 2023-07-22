import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

const SearchBox = ({setSearchShow}) => {

    const navigate = useNavigate()
    const [query,setQuery] = useState('')
    return (
        <div className='searchBox'>
            <form >
                <input type="text" placeholder='Search Movies and TV Shows' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className='submitBtn' onClick={(e) => {
                    e.preventDefault()
                   if(query.length > 0){
                    setSearchShow(false)
                    navigate(`/search/${query}`)
                   } 
                }}>Search</button>
            </form>
        </div>
    )
}

export default SearchBox