import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
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
import CreateCourse from "./components/CreateCourse";
import img from "./img/about.jpg";
export const UserContext = createContext();
function App() {
  const Navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [instructor, setInstructor] = useState(false);

  return (
    <UserContext.Provider value={{ Navigate, token, setToken, setInstructor }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/enroll" element={<Enroll />} />
          {instructor && <Route path="/instructor" element={<Instructor />} />}
          <Route path="/courseActions" element={<CourseActions />} />
          <Route path="/UpdateCourse" element={<UpdateCourse />} />
          <Route path="/CreateCourse" element={<CreateCourse />} />

          <Route path={"*"} element={<Error />} />
        </Routes>
        <div className="app-AboutUs">
          <div className="text-AboutUs">
            <h1 className="about-section">About Us</h1>
            <p className="app-parag">
              Welcome To Academia Academia is a Professional course Platform.
              Here we will provide you only interesting content, which you will
              like very much. We're dedicated to providing you the best of
              course, with a focus on dependability and Online course. Please
              give your support and love. Thanks For Visiting Our Site Have a
              nice day!
            </p>
            <h1 className="app-prov">Provied</h1>
            <h5>
              We're working to turn our passion for course into a booming.
            </h5>
            <h5>
              We hope you enjoy our courseas much as we enjoy offering them to
              you.
            </h5>
            <h5>
              I will keep posting more important posts on my Website for all of
              you.
            </h5>
            {/*  .   */}
          </div>
          <div className="img-AboutUs">
            <img className="app-img" src={img} alt="" />
          </div>
        </div>
        <h1 className="how-section">How it work</h1>
        <div className="How-it-work">
          <div className="Item1">
            <h2 className="logo">1</h2>
            <h4 className="title">title</h4>
            <p className="description">description</p>
          </div>
          <div className="Item2">
            <h2 className="logo">2</h2>
            <h4 className="title">title</h4>
            <p className="description">description</p>
          </div>
          <div className="Item3">
            <h2 className="logo">3</h2>
            <h4 className="title">title</h4>
            <p className="description">description</p>
          </div>
        </div>
        <div className="app-ContactUs">
          <h1 className="ContactUs-section">Contact Us</h1>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
