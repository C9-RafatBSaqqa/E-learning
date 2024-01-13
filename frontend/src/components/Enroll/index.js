import './style.css';
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
    <div className="enroll">
      <div className="video-section">
      {courseEnroll.map((result, ind) => {
        return (
          <div key={ind}>
           <iframe width="853" height="480" src={result.url} title="Nightcore (lyrics) alone [Alan Walker]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {result.order}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Enroll;
