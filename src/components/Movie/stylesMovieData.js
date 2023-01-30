import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-areas:
  'header'
  'tags'
  'main';

  section {
    height: 2rem;
    width: 10rem;
  }
  header {
    
    padding: 4rem 12.3rem;
    margin: 0 ;
  }
  .user {
    display:flex;
    flex-direction: row;
    align-items: center;
    
  }
  img {
   
    margin-bottom: 2rem;
      margin-left:12rem;
      width: 4rem;
      height: 4rem;

      border-radius: 50%;
    }
  h1 {
    
    margin-right: 19px;
  }
    header{
      display: flex;

      grid-area:
      'header';

      >span {
        display:flex;
        flex-direction: row; 
        align-items :center;
        gap:5px;
        text-align:center;
      }
    }
    .tags {
      display: flex;
      margin-left: 12rem;
      gap: 5rem;
      font-weight: 400;
      input{
      font-size: 1.2rem;
      

      }
      svg {
        display: none;
      }
    }
  
    main {
      grid-area:
      'main';
    }
  


`




