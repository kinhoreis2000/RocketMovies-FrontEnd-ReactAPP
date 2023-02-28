import {Container} from './styles'
import { FiPlus,FiX } from 'react-icons/fi'

export function Tag({isNew, value, onClick, ...rest} ) {
  return(
  <Container  isNew = {isNew}>

    <input 
    type='text'
    value = {value}
    readOnly={!isNew}
    {...rest}
    />

    <div 
      onClick={onClick}
      className={isNew ? 'button-add' : 'button-delete'}>

        {isNew? <FiPlus/> : <FiX/>}

    </div>

  </Container>


  )

}