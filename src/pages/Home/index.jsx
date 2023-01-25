import {Container} from './styles'
import {Header} from '../../components/Header'

export function Home({title, ...rest}) {
  return(
    <Container title = {title}>
      <Header/>
        <h1>`Hello world`</h1> 
    </Container>
  )
};