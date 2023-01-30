import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:2.4rem

  }  


  >main {
    padding: 5rem 12.3rem ;
    margin: 0 auto;


  }

  

`
export const NewMovie = styled(Link)`
  margin-top:2.4rem;
  width: 20.7rem;
  height: 4.8rem;
  border: none;
  background-color: ${({theme})=> theme.COLORS.SALMON};
  color: ${({theme})=> theme.COLORS.BACKGROUND_500};
  border-radius: 1rem;

  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
