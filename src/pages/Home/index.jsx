import {Container, NewMovie} from './styles'
import {Header} from '../../components/Header'
import {Movie} from '../../components/Movie'
import { FiPlus} from 'react-icons/fi'

export function Home({title, ...rest}) {
  return(
    <Container >
      <Header/>
      <main>
        <header>
          <h1>Meus Filmes</h1>
          <NewMovie to= '/'>
            <FiPlus/>
            Adicionar filme
          </NewMovie>
        </header>

        <content>

          <Movie>
            
          </Movie>
        </content>
      </main>
    </Container>
  )
};