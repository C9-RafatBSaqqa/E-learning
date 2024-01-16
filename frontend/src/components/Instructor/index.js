import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { UserContext } from "../../App";
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Instructor = () => {

  const {Navigate} = useContext(UserContext)

  return (
    <div>
      <Container>
      <Box
          sx={{
            bgcolor: 'background.paper',
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
              Welcome Instructor
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              You can Edit, Update, Delete and Create new Course
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
        </Box>
        <TableContainer sx={{ m: 3 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Action name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Course
                </TableCell>
                <TableCell align="right">
                  <Button onClick={()=> {
                    Navigate('/courseActions')
                  }} variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Course
                </TableCell>
                <TableCell align="right">
                  <Button onClick={()=> {
                    Navigate('/UpdateCourse')
                  }} variant="outlined" color="info">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Course
                </TableCell>
                <TableCell align="right">
                  
                  <Button onClick={() => {
                    Navigate('/CreateCourse')
                  }} variant="outlined" color="success">
                    Create
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Instructor;
