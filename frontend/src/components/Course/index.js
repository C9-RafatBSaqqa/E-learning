// import "./style.css";
import { UserContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const Course = () => {
  const { Navigate, token } = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const category = localStorage.getItem("category");
  const userId = localStorage.getItem("userId")
  const [filter, setFilter] = useState(course);

 
  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = course.filter((course) => course.title.includes(value));
    setFilter(filtered);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/getAllCourseByCategory/${category}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourse(res.data.result);
        setFilter(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Courses
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                onChange={handleFilter}
                id="outlined-basic"
                label="Search"
                variant="outlined"
              />
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filter.map((res, ind) => (
              <Grid item key={ind} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      // width: "300",
                      pt: "56.25%",
                    }}
                    image={res.image}
                    // maxWidth={}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {res.title}
                    </Typography>
                    <Typography>{res.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {res.authorizationUser.includes(userId) ? (
                      <Button
                        onClick={() => {
                          Navigate("/enroll");
                          localStorage.setItem("enroll", res._id);
                        }}
                        size="small"
                      >
                        view
                      </Button>
                    ) : (
                      <>
                        <Typography gutterBottom variant="h5" component="h2">
                          ${res.price}
                        </Typography>
                        <Button size="small">Subscribe Now</Button>
                      </>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Course;
