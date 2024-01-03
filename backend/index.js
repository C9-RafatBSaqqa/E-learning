require('dotenv').config()
const express = require("express");
const cors = require("cors");
require('./models/db')
const app = express();
app.use(express.json())
// Routers
const userRouter = require('./routes/user')
app.use('/user',userRouter)
const roleRouter = require('./routes/role')
app.use('/role',roleRouter)




const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
