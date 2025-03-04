import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stor from './Stor.jsx'
import { Provider } from "react-redux"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Stor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
