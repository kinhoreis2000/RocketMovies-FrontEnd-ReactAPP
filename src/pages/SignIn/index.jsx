import {Container, Background, Form} from './styles'
import { FiLock,FiMail} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'


export function SignIn() {
  return(
    <Container >
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>

        <Input placeholder='email' type='text' icon={FiMail}/>
        <Input placeholder='senha' type='password' icon={FiLock}/>

        <br/>
        <Button title ='Entrar'></Button>

        <a href='/register'>Criar Conta</a>
      </Form>
      <Background>
      </Background>
    </Container>
  )
};