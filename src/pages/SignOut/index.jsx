import {Container, Background, Form} from './styles'
import { FiLock,FiMail,FiUser, FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'


export function SignOut() {
  return(
    <Container >
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>

        <Input placeholder='nome' type='text' icon={FiUser}/>
        <Input placeholder='email' type='text' icon={FiMail}/>
        <Input placeholder='senha' type='password' icon={FiLock}/>

        <br/>
        <Button title ='Cadastrar'></Button>
        
        <a href='/signIn'> <FiArrowLeft/> Voltar para o menu anterior</a>
      </Form>
      <Background>
      </Background>
    </Container>
  )
};