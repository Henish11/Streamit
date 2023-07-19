import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Errors from './components/Errors/Errors'
import Home from './pages/Home/Home'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { BASE_URL,API_KEY } from './utils/config'
import { useDispatch } from 'react-redux'
import { getUrl } from './redux/homeSlice'
import MovieDetails from './pages/MovieDetails/MovieDetails'

const App = () => {
  const [data,setData] = useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
      axios.get(`${BASE_URL}/configuration?api_key=${API_KEY}`)
           .then((response)=>{
               dispatch(getUrl(response?.data?.images?.base_url))
               setData(true)
           })
           .catch((err)=>{
             console.log(err);
           })
  },[])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home data={data} />}></Route>
            <Route path='/:params/:id' element={<MovieDetails/>}></Route>
            <Route path='*' element={<Errors />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}   

export default App
