import * as React from 'react'

import Box from '@mui/material/Box'
import {useTheme} from '@mui/material/styles'

function SidePhoto() {
  const theme = useTheme()

  return <Box sx={{backgroundColor: theme.palette.blue.light, width: '50%'}} />
}

export default SidePhoto
