import {Container} from './styles'

import {Header} from '../../components/Header'

import {MovieData} from '../../components/Movie/MovieData.jsx'
import {useState, useEffect} from 'react'
import {api} from '../../services/api'
import {useParams} from 'react-router-dom'
export function Details({...rest}) {

  const [data, setData] = useState(null)
  const params = useParams()

  function childToParent(search) {

  }



  useEffect(()=> {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)

    }
    fetchNote()
  }, [])

  return(
    <Container >
        <Header childToParent={childToParent} />
    {       
        data &&
              <main>
                


          <MovieData 
          key = {data.movie[0].id} 
          data={
                  {title:data.movie[0].title,
                   
                  rate:data.movie[0].rating,
                  updated_at:data.movie[0].updated_at,
                  tags: data.movieTags,
                  description:data.movie[0].description
                  }
                }>
          
          </MovieData>




              </main>


      } 
    </Container>
  )
};