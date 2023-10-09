import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider';
import ServiceDetails from './Pages/Service/ServiceDetails';
import PrivetRouter from './Root/PrivetRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:  () => fetch ("/wedding.json")
      },
      {
        path: '/service',
        element: <Service></Service>,
        loader:  () => fetch ("/wedding.json")
      },
      {
        path: '/about-us',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/service-details/:id',
        element: <PrivetRouter><ServiceDetails></ServiceDetails></PrivetRouter>,
        loader:  () => fetch ("/wedding.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
