import {Container, Form} from './styles'
import { FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Header} from '../../components/Header'
import {Tag} from '../../components/Tag'
import {Button} from '../../components/Button'

export function NewMovie() {
  return(
    <Container >
    <Header/>
    <main>
      <header>
        <a><FiArrowLeft/>Voltar</a>
        <h1>Novo Filme</h1>
      </header>

      <Form>
        <span>
          <Input placeholder='Título'/>
          <Input placeholder='Sua nota (0 à 5)'/>
        </span>
        <TextArea placeholder='Observações'/>
        <h2>Marcadores</h2>
        <label>
        <Tag isNew placeholder='Add a new tag'></Tag>
        <Tag value ='Node'></Tag>
        </label>
        <div>
        <Button title='Excluir filme'> </Button>
        <Button title='Salvar alterações'> </Button>
        </div>
      </Form>

    </main>
    </Container>
  )
};