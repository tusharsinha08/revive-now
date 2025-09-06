import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/routes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <div className='max-w-[100rem] mx-auto '>
      <RouterProvider router={router} />
    </div>
   </StrictMode> 
)
