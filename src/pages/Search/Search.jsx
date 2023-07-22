import React, { useEffect, useState } from 'react'
import './Search.css'
import axios from 'axios'
import { SEARCH_URL } from '../../utils/config'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useParams } from 'react-router-dom'
import { ReactComponent as ResultNotFound } from '../../assets/icons/ResultNotFound.svg'

const Search = () => {

    const { query } = useParams()

    const [searchData, setSearchData] = useState([])
    // const [offset,setOffset] = useState(1)

    const getSearchData = async () => {
        await axios.get(SEARCH_URL + `&query=${query}`)
            .then((response) => {
                console.log(response?.data);
                setSearchData(response?.data?.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    console.log(searchData);
    useEffect(() => {
        getSearchData()
    }, [query])


    // const handleScroll=()=>{
    //      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
    //         setOffset((prev) => prev + 1)
    //      }
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll',handleScroll)
    //     return(()=>{
    //         window.removeEventListener('scroll',handleScroll)
    //     })
    // },[offset])


    return (
        <>
            <div className="mainContainer withSpace">
                {
                    searchData.length !== 0 ? (
                        <>
                            <h3 className='mainTitle'>{`Search results of '${query}'`}</h3>
                            <div className="listsWrap searchList">
                                {
                                    searchData.map((data) => {
                                        return <MovieCard ele={data} />
                                    })
                                }
                            </div>
                        </>
                            ) : (
                        <div className='notFound'>
                            <ResultNotFound />
                            <h3 className='mainTitle'>Sorry, we couldn't find any results for your search.</h3>
                            <h3 className='mainTitle'>Please make sure your search term is spelled correctly and try again.</h3>

                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Search