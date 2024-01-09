import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

const Enroll = () => {
  const { token } = useContext(UserContext);
  const enroll = localStorage.getItem("enroll");
  const [courseEnroll, setCourseEnroll] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/video/getCourseVideos/${enroll}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setCourseEnroll(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {courseEnroll.map((result, ind) => {
        return (
          <div key={ind}>
            <video width="400" controls>
              <source src={result.url} type="video/mp4"></source>
              Your browser does not support HTML video.
            </video>
            {result.url}
          </div>
        );
      })}
      <h1>Enroll component</h1>
    </div>
  );
};

export default Enroll;
