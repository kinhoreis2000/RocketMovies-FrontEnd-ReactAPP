import {Container} from './styles'

export function Button({icon : Icon, title, ...rest}) {
  return(
    <Container>
       {Icon && <Icon size={20}/>} 
        {title}
    </Container >

    
  )

}