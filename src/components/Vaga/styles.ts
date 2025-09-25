import styled from 'styled-components'

export const LinkVaga = styled.a`
  border-color: ${({ theme }) => theme.colors.corSecundaria};
  background-color: ${({ theme }) => theme.colors.corPrincipal};
  color: ${({ theme }) => theme.colors.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Lista = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.corPrincipal};
  background-color: ${({ theme }) => theme.colors.corSecundaria};
  color: ${({ theme }) => theme.colors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.corPrincipal};
    color: ${({ theme }) => theme.colors.corSecundaria};
  }

  &:hover ${LinkVaga} {
    border-color: ${({ theme }) => theme.colors.corPrincipal};
    background-color: ${({ theme }) => theme.colors.corSecundaria};
    color: ${({ theme }) => theme.colors.corPrincipal};
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
