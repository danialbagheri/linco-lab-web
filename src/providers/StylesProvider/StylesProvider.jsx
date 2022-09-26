import * as React from 'react'

import PropTypes from 'prop-types'

import * as Styles from '@mui/material/styles'
import * as MUI from '@mui/material'

function StylesProvider(props) {
  const theme = Styles.createTheme({
    palette: {
      blue: {
        light: '#f0f9ff',
        main: '#2599fb',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            height: '100%',
          },
          html: {
            height: '100%',
          },
        },
      },
    },
  })

  return (
    <Styles.ThemeProvider theme={theme}>
      <MUI.CssBaseline />
      {props.children}
    </Styles.ThemeProvider>
  )
}

export default StylesProvider

Styles.ThemeProvider.propTypes = {
  children: PropTypes.element,
}
