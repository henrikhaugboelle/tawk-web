import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import App from 'components/App'

import theme from 'theme/index'
import constants from 'constants/index'

import configureApolloClient from 'shared/network/index'

const apolloClient = configureApolloClient({ constants })

window.__root_node = document.getElementById('root')

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  window.__root_node
)

if (module.hot) {
  module.hot.accept()
}
