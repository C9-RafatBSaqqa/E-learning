import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

export const UserContext = createContext();
function App() {
 
  const [token, setToken] = useState(localStorage.getItem('token'));
console.log(token,"app");
  
  return (
    <UserContext.Provider value={{token,setToken}}>
       <Navbar />
       <Home/>
       <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      
       </Routes>
    <div className="App">
    
      
      <h1>App component</h1>
    </div>
   
    </UserContext.Provider>
  );
}

export default App;
