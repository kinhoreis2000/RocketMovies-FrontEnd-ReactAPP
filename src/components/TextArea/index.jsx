import {Container} from './styles'

export function TextArea({ placeholder,value, ...rest}) {
  return(
    <Container {...rest} >
       {value}
    </Container >


  )

}