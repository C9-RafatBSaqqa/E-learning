import { UserContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

const CreateCourse = () => {
  const { token, Navigate } = useContext(UserContext);
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState(" ");
  const [image, setImage] = useState();
  const [ok, setOk] = useState();
  const [error, setError] = useState();

  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(0);
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

  const createCourse = () => {
    const create = {
      title,
      description,
      price,
      category: localStorage.getItem("categoryId"),
      owner: localStorage.getItem("userId"),
      image
    };
    axios
      .post(`http://localhost:5000/course/createNewCourse`, create, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setOk(result.data.message)
      })
      .catch((err) => {
        setError(err.response.data.error.message)
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
              Create new Course
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              First, you must choose which category you want to add the course
              to.
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
                      // getProductByCategory(result._id);
                      localStorage.setItem("categoryId", result._id);
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
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Create
            </Typography>
            <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Title"
                    required
                    fullWidth
                    label="Title"
                    autoFocus
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Price"
                    name="Price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Description"
                    name="Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Image Path"
                    name="Image Path"
                    onChange={((e) => {
                      setImage(e.target.value)
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={localStorage.getItem("categoryId")}
                    disabled
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  createCourse();
                }}
              >
                Create
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
           
                <Button color="success">{ok}</Button>

         
                <Button color="error">{error}</Button>
                
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default CreateCourse;
