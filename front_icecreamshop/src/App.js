import React from 'react';  
// import './App.css';
import {Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    


      {/* <Switch>
        <Route path="/" Component={Home} />
      </Switch> */}
    </>
    
  );
}

export default App;
