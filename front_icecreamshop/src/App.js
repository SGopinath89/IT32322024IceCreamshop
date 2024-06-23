import React from 'react';  
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import {BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './Component/Home';
// import Navigation from './Component/Navigation';
// import Footer from './Component/Footer';
// import LoginPage from './Component/LoginPage';
// import MenuPage from './Component/MenuPage';
// import ContactPage from './Component/ContactPage';
// import AboutUsPage from './Component/AboutUsPage';
// import AdminHomePage from './Component/AdminHomePage';
// import SignInPage from './Component'

function App() {
  return (
    <>
    {/* <SignInPage></SignInPage> */}
      <Home></Home>
      {/* <MenuPage></MenuPage> 
      <ContactPage></ContactPage> 
      <AboutUsPage></AboutUsPage> */}

        {/* <AdminHomePage></AdminHomePage> */}
      
      {/* <div>
      <BrowserRouter>
        <Router>
          <Route index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Router>
      </BrowserRouter>
      </div> */}
      
    </>
    
  );
}

export default App;
