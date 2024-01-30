import express from "express";
import {
  home,
  upload,
  postUpload,
  search,
} from "../controllers/storiesController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/upload").get(upload).post(postUpload);
globalRouter.route("/search").get(search);

export default globalRouter;
