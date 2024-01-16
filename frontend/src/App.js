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
import Footer from "./components/Footer";
import Instructor from "./components/Instructor";
import Error from "./components/Error";
import CourseActions from "./components/CourseActions";
import UpdateCourse from "./components/UpdateCourse";
export const UserContext = createContext();
function App() {
  const Navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [instructor, setInstructor] = useState(false);

  return (
    <UserContext.Provider value={{Navigate, token, setToken ,setInstructor}}>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/enroll" element={<Enroll />} />
       {instructor && <Route path="/instructor" element={<Instructor />} /> }
       <Route path="/courseActions" element={<CourseActions />} />
       <Route path="/UpdateCourse" element={<UpdateCourse />} />

        <Route path={"*"} element= {<Error/>}/>
      </Routes>

      <Footer/>
      </div>

    </UserContext.Provider>
  );
}

export default App;
