import styled from 'styled-components'

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
export const NewMovie = styled.button`
  margin-top:2.4rem;
  width: 20.7rem;
  height: 4.8rem;
  border: none;
  background-color: ${({theme})=> theme.COLORS.SALMON};
  border-radius: 1rem;

  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
