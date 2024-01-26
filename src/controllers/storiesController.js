export const home = (req, res) => {
  res.render("stories", { path: "home" });
};
export const trending = (req, res) =>
  res.render("stories", { path: "trending" });
export const newStories = (req, res) =>
  res.render("stories", { path: "newStories" });
export const seeStory = (req, res) =>
  res.render("stories", { path: "seeStory", id: `${req.params.id}` });
export const editStory = (req, res) =>
  res.render("stories", { path: "editStory", id: `${req.params.id}` });
export const deleteStory = (req, res) =>
  res.render("stories", { path: "deleteStory", id: `${req.params.id}` });
