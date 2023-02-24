import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import {Routes} from './Routes'
import {AuthContextProvider} from './hooks/auth'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
