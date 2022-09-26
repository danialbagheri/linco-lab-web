import * as React from 'react'

import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'

import {MainContainer} from 'screens'

function Home() {
  const theme = useTheme()
  return (
    <MainContainer style={{padding: 0}}>
      <Box sx={{padding: 1, backgroundColor: theme.palette.blue.main}}>
        mamad
      </Box>
    </MainContainer>
  )
}

export default Home
