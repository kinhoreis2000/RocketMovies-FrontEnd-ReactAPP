import {Container} from './styles'

export function ButtonTxt({ placeholder,value, ...rest}) {
  return(
    <Container placeholder = {placeholder}>
        {value}
    </Container >


  )

}