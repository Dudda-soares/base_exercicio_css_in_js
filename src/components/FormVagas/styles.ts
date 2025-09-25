import { ChangeEvent, FormEvent, ReactNode } from 'react'
import styled from 'styled-components'

interface FormularioProps {
  children: ReactNode
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  type?: 'submit'
}
interface InputProps {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Formulario = styled.form<FormularioProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.colors.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button<FormularioProps>`
  background-color: ${({ theme }) => theme.colors.corPrincipal};
  border: 1px solid ${({ theme }) => theme.colors.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const Input = styled.input<InputProps>`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.colors.corPrincipal};
`
