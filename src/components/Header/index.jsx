import {Container, UserProfile} from './styles'
import {Input} from '../Input'
import { FiSearch} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import avatar_placeholder from '../../assets/avatar_placeholder.svg'
import {api} from '../../services/api'
import {useState} from 'react'
export function Header({childToParent}) {
  const [search, setSearch] = useState('')
  const {logOut, user} = useAuth()
  const avatarIMG = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatar_placeholder

  function LogOut() {
    logOut()
  }

  childToParent(search)


  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder = 'Pesquisar pelo título' type = 'text' icon={FiSearch}
      onChange = {(e)=> { 
        setSearch(e.target.value)
        } }
      />

      <UserProfile>
        <label>
        <Link to= '/profile'> <h2>{user.name}</h2></Link>
          <Link className = 'logout' onClick = {LogOut}>sair</Link>
        </label>
        <Link to= '/profile'><img src={avatarIMG}/> </Link>
      </UserProfile>
        
    </Container>
  )

}