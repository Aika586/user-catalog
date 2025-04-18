import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './pages/Router/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router/>
  </StrictMode>,
)
