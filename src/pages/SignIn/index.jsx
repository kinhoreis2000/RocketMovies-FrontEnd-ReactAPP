import {Container, Background, Form} from './styles'
import { FiLock,FiMail} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'




export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const context1 = useAuth()
  const {signIn} = context1 

  function handleSignIn(e) {
    e.preventDefault()
    signIn({email, password})
  }


  return(
    <Container >
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>

        <Input placeholder='email' type='text' icon={FiMail} onChange = {(e)=>setEmail( e.target.value) }/>
        <Input placeholder='senha' type='password' icon={FiLock} onChange = {(e)=>setPassword( e.target.value) } />

        <br/>
        <Button title ='Entrar' onClick ={handleSignIn}></Button>

        <Link to='/register'>Criar Conta</Link>
      </Form>
      <Background>
      </Background>
    </Container>
  )
};