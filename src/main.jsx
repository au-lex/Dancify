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
import Classdetail from './Pages/Classdetail.jsx';
import Eventdetail from './Pages/Eventdetail.jsx';




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
    path: "/Adetail/:Adetails",
    element: <Classdetail />
  },



  {
    path: "/Edetail/:Edetails",
    element: <Eventdetail />
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
