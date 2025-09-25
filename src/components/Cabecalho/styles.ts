import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.corSecundaria};
  color: ${({ theme }) => theme.colors.corPrincipal};
  text-align: center;
  padding: 24px 0;

  h1 {
    color: ${({ theme }) => theme.colors.corPrincipal};
  }
`
