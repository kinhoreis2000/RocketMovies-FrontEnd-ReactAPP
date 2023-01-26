import styled from 'styled-components'
import backgroundImg from '../../assets/cinema-scaled.jpg'


export const Container = styled.div`
  width: 100;
  height: 100vh;
  display: flex;
  


`
export const Form = styled.form `

  padding: 0 136px;

  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction:column;

  >h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.SALMON};
  }
  >h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  >p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }

  >a {
    margin-top: 124px;

    color: ${({theme}) => theme.COLORS.SALMON};
    display: flex;
    align-self: center;    
  }
`; 

export const Background = styled.div `
     flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 50%;
    
    `
