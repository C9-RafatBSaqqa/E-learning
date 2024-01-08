import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Course from "./components/Course";
import Enroll from "./components/Enroll";
export const UserContext = createContext();
function App() {
  const Navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [course, setCourse] = useState([]);
  const [courseId, setCourseId] = useState();

  return (
    <UserContext.Provider value={{Navigate, token, setToken ,setCourse, course,courseId,setCourseId}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/enroll" element={<Enroll />} />

      </Routes>
      {/* <div className="App">
        <h1>App component</h1>
      </div> */}

    </UserContext.Provider>
  );
}

export default App;
