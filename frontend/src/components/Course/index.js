import "./style.css";
import { UserContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

const Course = () => {
  const {Navigate,token} = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const category = localStorage.getItem("category");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/getAllCourseByCategory/${category}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourse(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="course">
      {course.map((res, ind) => {
        // console.log(res);
        return (
          <div key={ind} className="single-course">
            <div className="img-div">
              <img width={"50%"} src={res.image} />
            </div>
            <div className="course-title">
              <h1>{res.title}</h1>
              <p>{res.description}</p>
              <p>{res.price}$</p>
            </div>
            <button className="btn"
              onClick={() => {
                Navigate("/enroll");
                localStorage.setItem("enroll", res._id);
              }}
            >
              Enroll
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
