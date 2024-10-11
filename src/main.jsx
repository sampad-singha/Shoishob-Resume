import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from "./pages/Experience.jsx";
import Research from "./pages/Research.jsx";

const router = createBrowserRouter([
    {
       path: '/',
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,  // Work later
    },
    {
        path: '/research',
        element: <Research/>,
    },
    {
        path: '/experience',
        element: <Experience/>,

    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
