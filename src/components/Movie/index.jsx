import {Container} from './styles'
import {Tag} from '../Tag'
import {Star} from '../Star'

export function Movie({data, onClick, ...rest} ) {
    const movieRate= data.rating
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
    <Container  onClick ={onClick}>
      <span className = 'header'>
      <h1>{data.title}</h1>
      <span className='stars'
      >
        <Star className = {isIt1 ? 'show': 'hide' }></Star>
        <Star className = {isIt2 ? 'show': 'hide' }></Star>
        <Star className = {isIt3 ? 'show': 'hide' }></Star>
        <Star className = {isIt4 ? 'show': 'hide' }></Star>
        <Star className = {isIt5 ? 'show': 'hide' }></Star>
        
        </span>

        </span>
     <p> {data.description} </p>
     <div className='tags'>
      {
        data.tags &&
        <footer>
        {
          data.tags.map(tag =><Tag

            value={tag.name}
            key={tag.id}
           >

            </Tag>
        )
        }
        </footer>
        
      }
      </div>
    </Container >


  )

}