import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Routes'
import FriendsContextProvider from './context/FriendsContext'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContextProvider>
      <RouterProvider router={router} />,
    </FriendsContextProvider>
    <ToastContainer/>
  </StrictMode>,
)
