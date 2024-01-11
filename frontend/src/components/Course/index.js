import "./style.css";
import { UserContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

const Course = () => {
  const { Navigate, token } = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const category = localStorage.getItem("category");
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

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
              <p>${res.price}</p>
              <p>
                {res.authorizationUser.map((auth, ind) => {
                  return (
                    <div key={ind}>
                      {auth.includes(userId) ? (
                        <button
                          className="btn"
                          onClick={() => {
                            Navigate("/enroll");
                            localStorage.setItem("enroll", res._id);
                          }}
                        >
                          Start
                        </button>
                      ) : (
                        <button className="subsc-btn btn">Subscribe Now</button>
                      )}
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
