import {Container} from './styles'
import { BsStar, BsStarFill } from 'react-icons/bs'

export function Star({data,className, ...rest}) {
    if(className == 'show') {
  return(

    <Container>
      
      <span>
        <BsStar className = 'show'/>
        <BsStarFill className = 'hide'/>
      </span>


    </Container>
  )
}
else {
  return (

    <Container>
      
      <span>
        <BsStar className = 'hide'/>
        <BsStarFill className = 'show'/>
      </span>


    </Container>

  )
}
}