import {AppProvider, StylesProvider} from './providers'
import Router from './Router'

function App() {
  return (
    <StylesProvider>
      <AppProvider>
        <Router />
      </AppProvider>
    </StylesProvider>
  )
}

export default App
