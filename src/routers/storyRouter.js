import express from "express";
import { idHome, edit, remove } from "../controller/storyController";
const videoRouter = express.Router();

videoRouter.get("/:id", idHome);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", remove);

export default videoRouter;
