import {Container, UserProfile} from './styles'
import {Input} from '../Input'
import { FiSearch} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import avatar_placeholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const {logOut, user} = useAuth()

  function LogOut() {
    logOut()
  }
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder = 'Pesquisar pelo título' type = 'text' icon={FiSearch}/>

      <UserProfile>
        <label>
        <Link to= '/profile'> <h2>{user.name}</h2></Link>
          <Link className = 'logout' onClick = {LogOut}>sair</Link>
        </label>
        <Link to= '/profile'><img src={`https://github.com/kinhoreis2000.png`}/> </Link>
      </UserProfile>
        
    </Container>
  )

}