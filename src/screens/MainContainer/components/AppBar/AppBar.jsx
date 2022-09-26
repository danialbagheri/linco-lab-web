import * as React from 'react'

import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MuiAppBar from '@mui/material/AppBar'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

import {AppContext} from 'providers'

function AppBar() {
  const [, setAppState] = React.useContext(AppContext)

  const handleDrawerOpen = () => {
    setAppState(prev => ({...prev, drawerOpen: true}))
  }

  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <div
          style={{
            flexGrow: 1,
            textAlign: 'center',
          }}
        >
          XD
        </div>
        <PersonRoundedIcon />
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
