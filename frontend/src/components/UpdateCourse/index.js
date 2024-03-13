import { UserContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
const UpdateCourse = () => {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(0);
  const updateProductByid = (courseId) => {
    const update = {
      title,
      description,
      price
    }
    axios
      .put(`https://e-learning-wppf.onrender.com/course/updateCourse/${courseId}`,update, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { token, Navigate } = useContext(UserContext);
  const [category, setCategory] = useState([]);

  const courseId = localStorage.getItem("courseId");
  const [selectCourse, setSelectedCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-learning-wppf.onrender.com/category/getAllCategory")
      .then((result) => {
        setCategory(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getProductByCategory = (categoryId = "65971c6f831fe72e7fecf48d") => {
    axios
      .get(
        `https://e-learning-wppf.onrender.com/course/getAllCourseByCategory/${categoryId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setSelectedCategory(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Button
              onClick={() => {
                Navigate(-1);
              }}
              color="error"
            >
              {" "}
              back
            </Button>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              List of category
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={1}
              justifyContent="center"
            >
              {category.map((result, ind) => {
                return (
                  <Button
                    key={ind}
                    onClick={() => {
                      getProductByCategory(result._id);
                    }}
                    variant="contained"
                  >
                    {result.name}
                  </Button>
                );
              })}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {selectCourse.map((result, ind) => (
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
                      pt: "56.25%",
                    }}
                    image={result.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <TextField onChange={(e) => {
                      setTitle(e.target.value)                   
                  }} id="standard-basic" type="text" label= {result.title} variant="standard" />
                     
                  <TextField type="text"  onChange={(e) => {
                    setDescription(e.target.value)
                  }} id="standard-basic" label= {result.description} variant="standard" />
                  <TextField type="number" id="standard-basic" label= {result.price}  onChange={(e) => {
                    setPrice(e.target.value)
                  }} variant="standard" />
                  </CardContent>
                  
                  <CardActions>
                    
                    <Button onClick={() => {
                      updateProductByid(result._id)
                    }} color="success" size="small">
                      Update
                    </Button>
                    
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

export default UpdateCourse;
