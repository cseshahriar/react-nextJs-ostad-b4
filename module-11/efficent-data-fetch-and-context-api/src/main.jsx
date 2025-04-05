import React from 'react';
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import ThemeProvider  from './context/ThemeContext.jsx'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient()
import { Toaster } from 'react-hot-toast'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster position='bottom-right'/>
    </React.StrictMode>
  </QueryClientProvider>
)
