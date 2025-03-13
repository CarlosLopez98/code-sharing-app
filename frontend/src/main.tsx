import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MonacoProvider from './context/MonacoProvider.tsx'
import FileProvider from './context/FileProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MonacoProvider>
      <FileProvider>
        <App />
      </FileProvider>
    </MonacoProvider>
  </StrictMode>,
)
