import express from "express";
import { Home, idHome, editProfile } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/edit-profile", editProfile);
userRouter.get("/", Home);
userRouter.get("/:id", idHome);

export default userRouter;
