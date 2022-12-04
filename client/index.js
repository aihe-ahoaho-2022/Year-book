import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store'

import theme from './styles/matine'

import { MantineProvider } from '@mantine/core'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain='https://ahoaho-2022-yearbook.au.auth0.com'
      clientId='ejjnrnB211FvXerZ844pprjYV20QGqy4'
      redirectUri={window.location.origin}
      audience='https://yearbook/api'
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </MantineProvider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
