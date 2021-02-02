const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const aboutRoutes = require("./routes/about");
const projectRoutes = require("./routes/projects");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/about", aboutRoutes);
app.use("/projects", projectRoutes);

app.use((_, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lh7tq.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
