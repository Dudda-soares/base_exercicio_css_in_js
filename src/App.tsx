import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container } from './styles'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles'
import Colors from './themes/colors'

function App() {
  return (
    <>
      <ThemeProvider theme={Colors}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
