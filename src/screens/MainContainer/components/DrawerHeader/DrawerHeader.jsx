import * as React from 'react'
import {styled, useTheme} from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import {AppContext} from 'providers'

function DrawerHeader() {
  const [, setAppState] = React.useContext(AppContext)

  const theme = useTheme()

  const handleDrawerClose = () => {
    setAppState(prev => ({...prev, drawerOpen: false}))
  }
  const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))

  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  )
}

export default DrawerHeader
