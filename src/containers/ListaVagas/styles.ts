import { ReactNode } from 'react'
import styled from 'styled-components'

type ListaVagasProps = {
  children: ReactNode
}

const ListasVagas = styled.ul<ListaVagasProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default ListasVagas
