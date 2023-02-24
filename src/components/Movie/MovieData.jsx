import {Container} from './stylesMovieData'
import {Tag} from '../Tag'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { FiArrowLeft } from 'react-icons/fi'
import {Star} from '../Star'

export function MovieData({data, ...rest} ) {
    const movieRate= data.rate
    function Rate(movieRate) {
    
      if (movieRate <= 4) {
        isIt5=true
      }
      if (movieRate <= 3) {
        isIt4=true
      }
      if (movieRate <= 2) {
        isIt3=true
      }
      if (movieRate <= 1) {
        isIt2=true
      }
      if (movieRate <= 0) {
        isIt1=true
      }
    }


    var isIt5 = false
    var isIt4 = false
    var isIt3 = false
    var isIt2 = false
    var isIt1 = false

    Rate(movieRate)


  return(
    <Container >
        <a><FiArrowLeft/>Voltar</a>

      <header>
      <h1>{data.title}</h1>

      <span
      >
        <Star className = {isIt1 ? 'show': 'hide' }></Star>
        <Star className = {isIt2 ? 'show': 'hide' }></Star>
        <Star className = {isIt3 ? 'show': 'hide' }></Star>
        <Star className = {isIt4 ? 'show': 'hide' }></Star>
        <Star className = {isIt5 ? 'show': 'hide' }></Star>
        
        </span>
    
     </header>
     <div class= 'user'>
        <img src="https://github.com/kinhoreis2000.png"/>
        <p> Criado por Luiz Henrique</p>
        {data.updated_at}
      </div>
    <div class='tags'>
    {data.tags.map((tag) => <Tag value = {tag.name} id = {data.key}></Tag>
 
    )}

    </div >
   
      <main>
     <p> {data.description} </p>
     </main>
    </Container >


  )

}
