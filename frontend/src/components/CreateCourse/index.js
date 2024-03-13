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
  const [title, setTitle] = useState("");
  const [ok, setOk] = useState("");
  const [error, setError] = useState("");
  const [categortId, setcategortId] = useState("");

  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    console.log(image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "luipbyrc");
    data.append("cloud_name", "dwenerokk");
    fetch("https://api.cloudinary.com/v1_1/dwenerokk/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
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

  const createCourse = () => {
    const create = {
      title,
      description,
      price,
      category: categortId,
      owner: localStorage.getItem("userId"),
      image:url,
    };
    axios
      .post(`https://e-learning-wppf.onrender.com/course/createNewCourse`, create, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setOk(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
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
                      setcategortId(result._id);
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
                    type="number"
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
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  ></input>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      uploadImage();
                    }}
                  >
                    Upload
                  </button>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth value={categortId} disabled />
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
