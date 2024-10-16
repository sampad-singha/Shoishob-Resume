import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Experience from "./pages/Experience.jsx";
import Researches from "./pages/Researches.jsx";
import PdfView from "./pages/PdfView.jsx";
import PptView from "./pages/PptView.jsx";
import NotFoundPage404 from "./components/NotFoundPage404.jsx";

const router = createBrowserRouter([
    {
       path: '/',
        element: <App />,
        errorElement: <NotFoundPage404/>,  // Work later
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

    },
    {
        path: '/research/presentation/:id',
        element: <PptView/>,
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
