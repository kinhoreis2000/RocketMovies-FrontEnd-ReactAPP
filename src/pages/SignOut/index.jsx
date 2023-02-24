import {Container, Background, Form} from './styles'
import { FiLock,FiMail,FiUser, FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import {api} from '../../services/api'
export function SignOut() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp(e) {
    e.preventDefault()

    if(!name || !email || !password) {
      return alert('preencha todos os campos')
    }

    api.post('/users', {name, email, password})
    .then(()=> alert('Usuário cadastrado com sucesso'))
    .catch((error) =>  
    {
      if(error.response){
        alert(error.response.data.message)}
        else {
          'não foi possível cadastrar'
        }
      } 
    
    )

  }


  return(
    <Container >
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>

        <Input placeholder='nome' type='text' icon={FiUser} onChange= {e => setName(e.target.value)}/>
        <Input placeholder='email' type='text' icon={FiMail} onChange= {e => setEmail(e.target.value)}/>
        <Input placeholder='senha' type='password' icon={FiLock} onChange= {e => setPassword(e.target.value)}/>

        <br/>
        <Button className = 'register'title ='Cadastrar'  onClick={handleSignUp}></Button>
        
        <Link to='/'> <FiArrowLeft/> Voltar para o menu anterior</Link>

      </Form>
      <Background>
      </Background>
    </Container>
  )
};