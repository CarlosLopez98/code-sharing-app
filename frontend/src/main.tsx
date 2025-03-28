import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MonacoProvider from './context/MonacoProvider.tsx'
import FileProvider from './context/FileProvider.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MonacoProvider>
      <FileProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </FileProvider>
    </MonacoProvider>
  </StrictMode>,
)
