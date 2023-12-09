import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Classes from './Pages/Classes.jsx';
import Event from './Pages/Event.jsx';




const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/class",
    element: <Classes />
  },
  {
    path: "/event",
    element: <Event />
  },
  {
    path: "/class",
    element: <Classes />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
