import * as React from 'react'
import Box from '@mui/material/Box'
import {AppBar, HomeDrawer} from './components'
import {styled} from '@mui/material/styles'
import {AppContext} from '../../providers'

function MainContainer(props) {
  const [appState] = React.useContext(AppContext)

  const Main = styled('main', {shouldForwardProp: prop => prop !== 'open'})(
    ({theme}) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: `-${appState.drawerWidth}px`,
      marginTop: 64,
      ...props.style,
    }),
  )

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar />
      <HomeDrawer />
      <Main>{props.children}</Main>
    </Box>
  )
}

export default MainContainer
