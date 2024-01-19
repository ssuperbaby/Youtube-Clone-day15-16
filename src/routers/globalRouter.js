import express from "express";
import {
  Home,
  trending,
  NEW,
  join,
  login,
} from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", Home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", NEW);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
