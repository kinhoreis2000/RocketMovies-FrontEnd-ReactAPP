import {Container, Avatar, Form} from './styles'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Header} from '../../components/Header'
import {Tag} from '../../components/Tag'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'

export function Profile() {
  return(
    <Container >
        <header><FiArrowLeft/><Link to = '/'>Voltar</Link></header>
        
      <Form>
        <Avatar>
          <img
          src ='https://github.com/kinhoreis2000.png'
          alt='Foto do usuário'/>
          <label htmlFor='avatar'>
            <FiCamera/>

            <input 
            id='avatar'
            type='file'/>
          </label>

          
        </Avatar>
      <Input
      placeholder='nome'
      type='text'
      icon={FiUser}/>
      <Input
      placeholder='e-mail'
      type='text'
      icon={FiMail}/>
      <Input
      placeholder='senha atual'
      type='password'
      icon={FiLock}/>
      <Input
      placeholder='Nova senha '
      type='password'
      icon={FiLock}/>
      <Button title='Salvar'></Button>
      </Form>

    </Container>
  )
};