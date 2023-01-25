import styled from 'styled-components'

export const Container = styled.div`
  position: header;
  width: 100%;
  padding: 2.4rem 12.3rem;
  gap: 6.4rem;
  height: 11.6rem;


  background-color: ${({theme})=> theme.COLORS.BACKGROUND_300};
  border-bottom: 1px solid #3E3B47;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  >h1 {
    color: ${({theme})=> theme.COLORS.SALMON};
    font-weight: 700;
    font-size: 2.4rem;
  }

  >span {
    display: flex;
    a {
      text-decoration:none;
      color: ${({theme})=> theme.COLORS.BACKGROUND_100};

    }
    img {
      margin-left:2rem;
      width: 6.4rem;
      height: 6.4rem;

      border-radius: 50%;
    }
    h2 {
      width:10rem;
      font-weight: 700;
      font-size: 1.4rem;
      color:  ${({theme})=> theme.COLORS.GREY_200}
    }
  
    label {
      text-align: end;
      color:  ${({theme})=> theme.COLORS.GREY_200};

    }

 
  }
`