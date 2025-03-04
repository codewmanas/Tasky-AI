/**
 * @copyright 2025 Tasky AI
 *  @license Apache-2.0
 * @description Main entry point for the Tasky AI application
 */



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import './index.css'
import router from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
