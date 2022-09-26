import * as React from 'react'

import Box from '@mui/material/Box'

import {LoginFields, SidePhoto} from './components'
import {MainContainer} from '../MainContainer'

const Login = () => {
  return (
    <MainContainer>
      <Box sx={{height: 'calc(100vh -  110px)'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
          }}
        >
          <SidePhoto />
          <LoginFields />
        </Box>
      </Box>
    </MainContainer>
  )
}

export default Login
