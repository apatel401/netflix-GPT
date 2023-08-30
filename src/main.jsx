import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './components/Body.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <Body />
    </Provider>
  </React.StrictMode>,
)
