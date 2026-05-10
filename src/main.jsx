import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Aos from 'aos'
import App from './App.jsx'

Aos.init({
  duration: 700,
  easing: 'ease-out',
  once: true,
  offset: 80,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
