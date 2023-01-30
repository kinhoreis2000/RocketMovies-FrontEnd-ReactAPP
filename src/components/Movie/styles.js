import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.SALMON_TRANSPARENT};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  padding: 2rem 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  border:none;
  text-align: start;
     .header {
      display:flex;
      flex-direction: row;
      align-items: center; 
      gap : 2rem;
      margin-bottom: 2rem; 
     }
    .stars {
      display:flex;
      flex-direction: row;
    }
    .tags {
      margin-top: 2rem;
      display:flex;
      flex-direction: row;

      


    }
  >.tags {
    
    svg {
      display: none; 
      
    }
    footer{
    display:flex;
    gap: 2rem;
    flex-direction: row;
    
  }
  }
`




