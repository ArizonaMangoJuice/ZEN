import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider, CSSReset  } from "@chakra-ui/core"
import { Provider } from 'react-redux'
import { theme } from '@chakra-ui/core'
import store from './store'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CSSReset/>
        <Router>
          <App />
        </Router>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
