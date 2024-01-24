import express from "express";

import { seeUsers, seeUser, editProfile } from "../controllers/usersController";

const userRouter = express.Router();

// "/users"
userRouter.get("/", seeUsers);
userRouter.get("/:id", seeUser);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
