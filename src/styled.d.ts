import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      corPrincipal: string
      corSecundaria: string
    }
  }
}
