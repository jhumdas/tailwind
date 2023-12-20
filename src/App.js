
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "../src/Layout/Header";
import Footer from "../src/Layout/Footer";
import Home from "../src/View/Home/Index";

function App() {
  return (
 <React.Fragment>
  <Router>
    <Header/>
    <Routes>
     
      <Route path="/" element={<Home/>}/>

    </Routes>
    <Footer/>
  </Router>
 </React.Fragment>
  );
}

export default App;
