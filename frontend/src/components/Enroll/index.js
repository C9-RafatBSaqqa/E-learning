import "./style.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import YouTube from 'react-youtube';

const Enroll = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const { token, Navigate } = useContext(UserContext);
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
      <button onClick={() => Navigate(-1)} className="enrollbtn">
        Go Back
      </button>
      <div className="video-section">
        {courseEnroll.map((result, ind) => {
          return (
            <div key={ind}>
              {result.order.includes(1) ? (
                <div>
                  {/* <iframe
                    className="primary"
                    width="853"
                    height="480"
                    src={result.url}
                
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    
                  ></iframe> */}
                  <YouTube  className="primary" videoId={"dkc6Ogdq74I?si=0i2Rk6D38XmYu6EU"}   />

                </div>
              ) : (
                <div key={ind}>
                  {/* <iframe
                  onClick={() => {
                    console.log("g");
                  }}
                    className="secondry"
                    width="853"
                    height="480"
                    src={result.url}
                   
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    
                  ></iframe> */}
                   <YouTube  className="secondry" videoId={result.url}   />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Enroll;
