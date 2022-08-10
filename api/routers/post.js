const express = require("express");

const postController = require("../controllers/post");

const postRouter = express.Router();

postRouter.get("/", postController.index);
postRouter.post("/", postController.create);

module.exports = postRouter;
