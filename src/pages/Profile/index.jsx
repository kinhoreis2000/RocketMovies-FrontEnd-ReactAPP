import {Container, Avatar, Form} from './styles'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {useState} from 'react'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import avatar_placeholder from '../../assets/avatar_placeholder.svg'
import {api} from '../../services/api'

export function Profile() {
  
  const {user, updateUser} = useAuth()


  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar?  `${api.defaults.baseURL}/files/${user.avatar}` : avatar_placeholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)


  function handleChangeAvatar(event) {
  const file = event.target.files[0]
  setAvatarFile(file)
  const imagePreview = URL.createObjectURL(file)
  setAvatar(imagePreview)
}


  async function handleUpdateUser(e) {
    e.preventDefault()
    const user = {
      name, 
      email, 
      password: passwordNew,
      old_password: passwordOld
    }
    await updateUser({user, avatarFile}) 
  }
  return(
    <Container >
        <header><FiArrowLeft/><Link to = '/'>Voltar</Link></header>
        
      <Form>
        <Avatar>
          <img
          src ={avatar}
          alt='Foto do usuário'/>

          <label htmlFor='avatar'>
            <FiCamera/>

            <input 
            id='avatar'
            type='file'
            onChange = {handleChangeAvatar}/>
          </label>

          
        </Avatar>
      <Input
      placeholder='nome'
      type='text'
      icon={FiUser}
      value ={name}
      onChange = {(e)=> setName(e.target.value)}/>
      <Input
      placeholder='e-mail'
      type='text'
      icon={FiMail}
      value ={email}
      onChange = {(e)=> setEmail(e.target.value)}/>
      <Input
      placeholder='senha atual'
      type='password'
      icon={FiLock}
      onChange = {(e)=> setPasswordOld(e.target.value)}/>
      <Input
      placeholder='Nova senha '
      type='password'
      icon={FiLock}
      onChange = {(e)=> setPasswordNew(e.target.value)}/>
      <Button onClick = {handleUpdateUser}title='Salvar'></Button>
      </Form>

    </Container>
  )
};