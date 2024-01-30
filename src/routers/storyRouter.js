import express from "express";

import {
  seeStory,
  editStory,
  deleteStory,
  postEditStory,
} from "../controllers/storiesController";

const storyRouter = express.Router();

// "/stories"
storyRouter.get("/:id", seeStory);
storyRouter.route("/:id/edit").get(editStory).post(postEditStory);
storyRouter.route("/:id/delete").get(deleteStory);

export default storyRouter;
