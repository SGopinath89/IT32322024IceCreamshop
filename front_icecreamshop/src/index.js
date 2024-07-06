import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Index from "./App";
import MenuPage from './Component/MenuPage';
import ContactPage from './Component/ContactPage';
import AboutUsPage from './Component/AboutUsPage';
import LoginPage from './Component/LoginPage';
import LoginAdministrator from './Component/LoginAdministrator';
import Cart from './Component/Cart';
import SignInPage from './Component/SignInPage';
import {BrowserRouter, Routes, Navigate, Route ,createBrowserRouter} from 'react-router-dom';
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
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "SignIn",
    element: <SignInPage />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/LoginAdministrator" element={<LoginAdministrator />} />
          <Route path="*" element={<Navigate to="/index" replace />} />
        </Routes>
      </BrowserRouter>
);


reportWebVitals();
