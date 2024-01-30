import express from "express";
import { home, upload, postUpload } from "../controllers/storiesController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/upload").get(upload).post(postUpload);

export default globalRouter;
