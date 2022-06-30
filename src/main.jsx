import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Fun from "./callBacks";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Fun/>
  </React.StrictMode>
)
