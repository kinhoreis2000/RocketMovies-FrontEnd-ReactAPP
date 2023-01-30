import {Container, UserProfile} from './styles'
import {Input} from '../Input'
import { FiSearch} from 'react-icons/fi'


export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder = 'Pesquisar pelo título' type = 'text' icon={FiSearch}/>

      <UserProfile to = '/profile'>
        <label>
          <h2>Luiz Henrique</h2>
          <a href='/'>sair</a>
        </label>
        <img src='https://github.com/kinhoreis2000.png'/> 
      </UserProfile>
        
    </Container>
  )

}