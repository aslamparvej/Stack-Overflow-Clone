import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/auth" element={<Auth />}/>
        </Routes>
      </Router>
    </div>
     
  );
}

export default App;
