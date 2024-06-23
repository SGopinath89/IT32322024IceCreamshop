import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import MenuPage from './Component/MenuPage';
import ContactPage from './Component/ContactPage';
import AboutUsPage from './Component/AboutUsPage';
import LoginPage from './Component/LoginPage';
import LoginAdministrator from './Component/LoginAdministrator';


const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "menu",
    element: <MenuPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "about",
    element: <AboutUsPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "LoginAdministrator",
    element: <LoginAdministrator />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
