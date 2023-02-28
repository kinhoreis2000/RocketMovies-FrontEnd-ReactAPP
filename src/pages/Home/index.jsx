import {Container, NewMovie} from './styles'
import {Header} from '../../components/Header'
import {Movie} from '../../components/Movie'
import { FiPlus} from 'react-icons/fi'

export function Home({title, ...rest}) {
  return(
    <Container >
      <Header/>
      <main>
        <header>
          <h1>Meus Filmes</h1>
          <NewMovie to= '/newmovie'>
         
          
            <FiPlus/> 
            Adicionar filme
            </NewMovie >
        </header>

        <div className = 'content'>


        <Movie data={
            {title:'Xerisclayde', 
            rate:'2',
            tags: [
              {id:'1',name: 'Ficção Científica'},
              {id:'2',name: 'Terror'},
              {id:'3',name: 'Guerra'}
              ],
              description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nisl tincidunt eget nullam non nisi est sit amet. Urna et pharetra pharetra massa massa ultricies mi quis. Massa tempor nec feugiat nisl. Ornare lectus sit amet est placerat in egestas erat imperdiet. Id leo in vitae turpis massa sed elementum tempus. Tincidunt augue interdum velit euismod in pellentesque massa. Sem et tortor consequat id porta nibh venenatis. Mauris augue neque gravida in fermentum et. Enim nunc faucibus a pellentesque sit amet. Habitant morbi tristique senectus et netus et. Gravida in fermentum et sollicitudin. Suspendisse sed nisi lacus sed viverra. Augue ut lectus arcu bibendum. Dictum non consectetur a erat nam at lectus.'
            }
          }></Movie>
     
        <Movie data={
            {title:'Xerisclayde', 
            rate:'3',
            tags: [
              {id:'1',name: 'Ficção Científica'},
              {id:'2',name: 'Terror'},
              {id:'3',name: 'Guerra'}
              ],
              description:'Eu queria estar por Lá. carolina. Pra dançar contigo um xote. Carolina. Hum hum hum Carolina, hum hum hum carolina'
            }
          }></Movie>
     
        <Movie data={
            {title:'Xerisclayde', 
            rate:'4',
            tags: [
              {id:'1',name: 'Ficção Científica'},
              {id:'2',name: 'Terror'},
              {id:'3',name: 'Guerra'}
              ],
              description:'Eu queria estar por Lá. carolina. Pra dançar contigo um xote. Carolina. Hum hum hum Carolina, hum hum hum carolina'
            }
          }></Movie>
     
        <Movie data={
            {title:'Xerisclayde', 
            rate:'5',
            tags: [
              {id:'1',name: 'Ficção Científica'},
              {id:'2',name: 'Terror'},
              {id:'3',name: 'Guerra'}
              ],
              description:'Eu queria estar por Lá. carolina. Pra dançar contigo um xote. Carolina. Hum hum hum Carolina, hum hum hum carolina'
            }
          }></Movie>
     

        </div>
      </main>
    </Container>
  )
};