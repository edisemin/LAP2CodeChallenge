const express = require("express");
const cors = require("cors");

const postRouter = require("./routers/post");

const api = express();

// Add middleware

api.use(cors());
api.use(express.json());

// Setup routes

api.use("/posts", postRouter);
api.use("/", (req, res) => {
  res.status(200).send("Welcome to our Telegraph API");
});

module.exports = api;
