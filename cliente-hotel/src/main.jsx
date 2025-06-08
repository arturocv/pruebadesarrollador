import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HotelesProvider } from './context/HotelesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HotelesProvider>
      <App />
    </HotelesProvider>
  </StrictMode>,
)
