import { ThemeProvider } from 'styled-components'
import { GlobaStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobaStyle />
    </ThemeProvider>
  )
}
