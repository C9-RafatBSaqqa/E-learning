import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  const userContext = createContext();
  return (
    <userContext.Provider>
       <Navbar />
       <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
       
    <div className="App">
      
      <h1>Hello, World!</h1>
    </div>
    {/* <Login/> */}
    </userContext.Provider>
  );
}

export default App;
