const express = require("express");
const logger = require("morgan");
const routes = require('./controllers');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5002;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

//http:/localhost:5002
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});