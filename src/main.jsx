import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
       path: '/',
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,  // Work later
    },
    {
        path: '/research',
        element: <h1>Research</h1>,
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
