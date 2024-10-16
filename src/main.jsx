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
import Presentation from "./pages/Presentation.jsx";

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
        errorElement: <NotFoundPage404/>,
    },
    {
        path: '/experience',
        element: <Experience/>,

    },
    {
        path: '/presentation',
        element: <Presentation/>,
    },
    {
        path: '/presentation/:id',
        element: <PptView/>,
        errorElement: <NotFoundPage404/>,
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
