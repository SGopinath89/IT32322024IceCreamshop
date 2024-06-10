import React from 'react';  
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import {Switch, Route } from 'react-router-dom';
// import Home from './Component/Home';
// import Navigation from './Component/Navigation';
// import Footer from './Component/Footer';
// import LoginPage from './Component/LoginPage';
//import MenuPage from './Component/MenuPage';
//import ContactPage from './Component/ContactPage';
import AboutUsPage from './Component/AboutUsPage';

function App() {
  return (
    <>
      {/* <Home></Home>
      <MenuPage></MenuPage> 
      <ContactPage></ContactPage> */}
      <AboutUsPage></AboutUsPage>
    


      {/* <Switch>
        <Route path="/" Component={Home} />
      </Switch> */}
    </>
    
  );
}

export default App;
