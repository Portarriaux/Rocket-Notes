import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { MyContent } from './myContent'

import theme from './styles/theme'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContent.Provider value={{ email: 'jhonatancaetano14@hotmail.com'}}>
      <Routes />
      </MyContent.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
