import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
  color: ${({theme}) => theme.COLORS.GRAY_200};

  padding:12px;



  &:placeholder {
    text-align:start;
    
    color: ${({theme}) => theme.COLORS.BACKGROUND_100};
}

`