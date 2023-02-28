import {Container} from './styles'
import { FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Header} from '../../components/Header'
import {Tag} from '../../components/Tag'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'


export function NewMovie() {
  return(
    <Container >
    <Header/>
    <main>
      <header>
        <Link to ='/'><FiArrowLeft/>Voltar</Link>
        <br></br>
        <h1>Novo Filme</h1>
      </header>

      
        <span>
          <Input placeholder='Título'/>
          <Input placeholder='Sua nota (0 à 5)'/>
        </span>
        <TextArea placeholder='Observações'/>
        <h2>Marcadores</h2>
        <span className = 'tagArea'>
        <Tag isNew placeholder='Add a new tag'></Tag>
        <Tag value ='Node'></Tag>
        </span>
        <div className ='buttons'>
        <Button title='Excluir filme'> </Button>
        <Button title='Salvar alterações'> </Button>
        </div>


    </main>
    </Container>
  )
};