import styled from 'styled-components'


export const Container = styled.div`
  width: 100;
  height: 100vh;

  main {
    padding: 5rem 12.3rem ;
    margin: 0 auto;

  }
  a {
  color: ${({theme})=> theme.COLORS.SALMON};

  }
  


`
export const Form = styled.form `
  button:nth-child(1) {
    border:none;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
    color: ${({theme})=> theme.COLORS.SALMON};
  }
  
  div {
    display:flex;
    justify-content: space-around;
    margin-top: 3rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 2.5rem;
  }
  >span {
    margin-top:3rem;
    margin-bottom:3rem;
    display: flex;
    flex-direction: row;
    gap: 5rem;
  
}
  >label {
      padding: 1rem;  
      border-radius: 2rem;
      display: flex;
      flex-direction: row;
      gap: 5rem;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
    
  }
  

`; 
