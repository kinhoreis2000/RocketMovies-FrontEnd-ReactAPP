import {Container} from './styles'
import { FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Header} from '../../components/Header'
import {Tag} from '../../components/Tag'
import {Button} from '../../components/Button'
import {Link,useNavigate} from 'react-router-dom'
import {useState } from 'react'
import {api} from '../../services/api'

export function NewMovie({...rest}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')
  const [tags_name, setTags_name] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

function childToParent(search) {

}

  function handleAddTag() {
    setTags_name(prevState => [...prevState, newTag])
    setNewTag('')
  }
  function handleRemoveTag(deleted) {
    setTags_name(prevState => prevState.filter(tag => tag !== deleted))

  }

  async function handleNewMovie() {


    try {
     
        await api.post('/movies', {
          title,
          description,
          tags_name,
          rating
        })
        

        alert('Filme criada com sucesso')
        navigate(-1)
      } catch (error){
        console.error(error)
      }

  }

  
  return(
    <Container >
    <Header childToParent={childToParent} />
    <main>
      <header>
        <Link to ='/'><FiArrowLeft/>Voltar</Link>
        <br></br>
        <h1>Novo Filme</h1>
      </header>

      
        <span>
          <Input 
          placeholder='Título'
          onChange = {(e)=> setTitle(e.target.value)}/>
          
          
          <Input 
          placeholder='Sua nota (0 à 5)'
          onChange = {(e)=> setRating(e.target.value)}/>
        </span>
        <TextArea 
        placeholder='Observações'
        onChange = {(e)=> setDescription(e.target.value)}/>
        <h2>Marcadores</h2>
        <span className = 'tagArea'>
        {
        tags_name.map((link,index)=> (<Tag 
          key = {String(index)} 
          value = {link}
          onClick = {()=> {handleRemoveTag(link)}}
          ></Tag> ))

        }


        <Tag 
          placeholder='Nova tag'
          isNew
          onChange = {e => setNewTag(e.target.value)}
          value = {newTag}
          onClick = {handleAddTag}
         ></Tag>
        </span>
        <div className ='buttons'>
        <Button title='Excluir filme'> </Button>
        <Button
        title='Salvar alterações'
        onClick ={handleNewMovie}
        > </Button>
        </div>


    </main>
    </Container>
  )
};