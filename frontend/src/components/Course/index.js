import "./style.css";
import { UserContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [courseEnroll, setCourseEnroll] = useState();
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/video/getCourseVideos/${res}`)
      .then((result) => {
        setCourseEnroll(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const user = useContext(UserContext);

  const category = localStorage.getItem("category");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/getAllCourseByCategory/${category}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        user.setCourse(res.data.result);
        //  user.Navigate('/course')
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="course">
      {user.course.map((res, ind) => {
        console.log(res);
        return (
          <div className="single-course">
            <div className="img-div">
              <img width={"50%"} src={res.image} />
            </div>
            <div className="course-title">
              <h1>{res.title}</h1>
              <p>{res.description}</p>
            </div>
            <button onClick={() => {
             localStorage.setItem('enroll',res._id)
            }}>Enroll</button>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
