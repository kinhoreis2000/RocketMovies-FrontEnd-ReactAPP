import styled from 'styled-components'


export const Container = styled.div`
  width: 100;
  height: 100vh;
  
  main {
    padding: 5rem 12.3rem ;
    margin: 0 auto;

    
  }
  
 a:nth-child(1) {
    margin-top: 2rem;

    margin-left: 12rem;
  color: ${({theme})=> theme.COLORS.SALMON};

  }
  
  .tagArea {
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    section {
      margin-bottom: 0;
    }
  }

  .buttons{
    display: flex; 
    justify-content: space-between;

    button:nth-child(1) {
     background-color: ${({theme})=> theme.COLORS.BACKGROUND_400};
     color: ${({theme})=> theme.COLORS.SALMON};
        
    }
    gap: 2rem;
     button{
       width: 100%;
    border: none;

      }

  }

`
