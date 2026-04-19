import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Routes'
import FriendsContextProvider from './context/FriendsContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContextProvider>
      <RouterProvider router={router} />,
    </FriendsContextProvider>
  </StrictMode>,
)
