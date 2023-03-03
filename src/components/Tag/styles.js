import styled from 'styled-components'


export const Container = styled.section`
  display: flex;
  align-items: center;

  background-color : ${({theme, isNew}) => isNew? 'transparent' : theme.COLORS.BACKGROUND_200};
  color : ${({theme}) => theme.COLORS.GRAY_300};

  border: ${({theme, isNew}) => isNew? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

    >div {
      border: none; 
      background: none; 
    }

    .button-delete {
      color:  RED;
      cursor:pointer;
    }
    .button-add {
      color:  ${({theme}) => theme.COLORS.SALMON};
      cursor:pointer;

    }
    > input {
      height: 56px;
      width: 100%;

      padding: 12px;
      color:  ${({theme}) => theme.COLORS.GRAY_300};
      background: transparent; 

      border: none; 

      &::placeholder{
        color : ${({theme}) => theme.COLORS.GRAY_300};
      }

    }

`