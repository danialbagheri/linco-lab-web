import * as React from 'react'

const AppContext = React.createContext()

function AppProvider(props) {
  const initialState = {
    drawerOpen: false,
    drawerWidth: 240,
  }

  const [appState, setAppState] = React.useState(initialState)

  const contextValue = [appState, setAppState]

  return <AppContext.Provider value={contextValue} {...props} />
}

export {AppProvider, AppContext}
