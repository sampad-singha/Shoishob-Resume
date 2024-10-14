import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Experience from "./pages/Experience.jsx";
import Researches from "./pages/Researches.jsx";
import PdfView from "./pages/PdfView.jsx";

const router = createBrowserRouter([
    {
       path: '/',
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,  // Work later
    },
    {
        path: '/research',
        element: <Researches/>,
    },
    {
        path: '/research/:id',
        element: <PdfView/>,
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
