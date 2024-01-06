require('dotenv').config()
const express = require("express");
const cors = require("cors");
require('./models/db')
const app = express();
app.use(express.json());
app.use(cors());
// Routers
const userRouter = require('./routes/user')
app.use('/user',userRouter)

const roleRouter = require('./routes/role')
app.use('/role',roleRouter)

const courseRouter = require('./routes/course')
app.use('/course',courseRouter)

const categoryRouter = require('./routes/category')
app.use('/category',categoryRouter)

const videoRouter = require('./routes/video')
app.use('/video',videoRouter)

const PORT = process.env.PORT || 5000;




// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
