import * as React from 'react'

import {useNavigate} from 'react-router-dom'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {Button, InputAdornment, Stack} from '@mui/material'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import {useTheme} from '@mui/material/styles'

function LoginFields() {
  const navigate = useNavigate()

  const theme = useTheme()

  const loginHandler = () => {
    navigate('/home')
  }

  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={{xs: 1, sm: 2, md: 4}}
        sx={{
          height: '100%',
          justifyContent: 'center',
          width: '300px',
          maxWidth: '100%',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          sx={{
            fieldset: {borderColor: theme.palette.blue.main},
            label: {color: theme.palette.blue.main},
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonRoundedIcon sx={{color: theme.palette.blue.main}} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            fieldset: {borderColor: theme.palette.blue.main},
            label: {color: theme.palette.blue.main},
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonRoundedIcon sx={{color: theme.palette.blue.main}} />
              </InputAdornment>
            ),
          }}
        />
        <Button sx={{width: '50%'}} variant="contained" onClick={loginHandler}>
          Login
        </Button>
      </Stack>
    </Box>
  )
}

export default LoginFields
