const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projects");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/projects", projectRoutes);

require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lh7tq.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log(error);
  });
