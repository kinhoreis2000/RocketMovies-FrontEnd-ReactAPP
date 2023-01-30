import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  svg{
    flex-direction: row;
    color: ${({theme}) => theme.COLORS.SALMON};

  }
  
  .show {


  }
  .hide {
    display: none;

  }
`
