import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Tailwind styles
import Hero from './components/Hero.jsx' // Assuming you have a Hero component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
)
