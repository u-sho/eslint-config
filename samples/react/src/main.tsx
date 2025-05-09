import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

ReactDOM.createRoot(document.getElementById('react') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)