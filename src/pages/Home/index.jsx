import {Container, NewMovie} from './styles'
import {Header} from '../../components/Header'
import {Movie} from '../../components/Movie'
import { FiPlus} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {api} from '../../services/api'

export function Home({title, ...rest}) {

  const [dataSearch, setDataSearch] = useState('');

  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  function handleDetail(id) {
    navigate(`/details/${id}`)



  }
  function childToParent(search) {
    setDataSearch(search)

  }
  



  useEffect(()=>{
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${dataSearch}`)
      setMovies(response.data)

      
    }
    fetchMovies()
  }, [dataSearch]) 


  return(
    <Container >
      <Header childToParent={childToParent} />
      <main>
        <header>
          <h1>Meus Filmes</h1>
          <NewMovie to= '/newmovie'>
         
          
            <FiPlus/> 
            Adicionar filme
            </NewMovie >
        </header>

        <div className = 'content'>

      {

        movies.map(movie => (
          <Movie 
          key = {String(movie.id)}
          data ={movie}
          onClick = {()=> handleDetail(movie.id)}>
          
          </Movie>
        ))
      }


  
     
     
        </div>
      </main>
    </Container>
  )
};