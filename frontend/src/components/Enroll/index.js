import "./style.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import YouTube from "react-youtube";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Popup from "reactjs-popup";
const Enroll = () => {
  const opts = {
    height: "390",
    width: "640",
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
        console.log(result.data.result);
        setCourseEnroll(result.data.result);
        // setCourseInfo(result.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="enroll">
      <Button color="error" onClick={() => Navigate(-1)} className="enrollbtn">
        Go Back
      </Button>
      <div className="video-section">
        {courseEnroll.map((result, ind) => {
          return (
            <div key={ind}>
              {result.order.includes(1) ? (
                <div>
                  <YouTube className="primary" videoId={result.url} />
                </div>
              ) : (
                <Container>
                  {courseEnroll.map((res, ind) => {
                    return (
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            video {ind}
                          </Typography>
                          <Typography variant="h5" component="div"></Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            npm
                          </Typography>
                          <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Popup
                            trigger={<Button> View</Button>}
                            position="right top"
                          >
                            <YouTube className="primary" videoId={result.url} />
                          </Popup>
                      
                        </CardActions>
                      </Card>
                    );
                  })}
                </Container>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Enroll;
