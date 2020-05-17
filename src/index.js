import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import configureStore from './services/store/configureStore'
import { Provider } from 'react-redux'
import { setRDPDefaultProps } from '@aic/react-remote-data-provider'
import { axiosLocal } from './services/axiosInstances'

const store = configureStore()
console.log(store.getState())
setRDPDefaultProps({
  axiosInstance: axiosLocal
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
