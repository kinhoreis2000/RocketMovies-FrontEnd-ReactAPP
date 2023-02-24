import {Container} from './styles'


export function Button({icon : Icon, title, onClick, ...rest}) {

  return(
    <Container onClick={onClick} {...rest} >
       {Icon && <Icon size={20}/>} 
        {title}
    </Container >

    
  )

}