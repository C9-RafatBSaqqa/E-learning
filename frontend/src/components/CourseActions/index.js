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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const CourseActions = () => {
  const { token } = useContext(UserContext);
  const [category, setCategory] = useState([]);

  const [selectCourse, setSelectedCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/getAllCategory")
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
        `http://localhost:5000/course/getAllCourseByCategory/${categoryId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.result);
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
          {/* End hero unit */}
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {result.title}
                    </Typography>
                    <Typography>{result.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button  color="error" size="small">Delete</Button>
                    <Button  color="secondary" size="small">Edit</Button>
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

export default CourseActions;
