import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { path: "home", videos });
};
export const upload = (req, res) => {
  res.render("upload", { path: "upload" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error) {
    console.log("I find error ❌❌", error);
    res.render("upload", { path: "upload", error: error._message });
  }
};
export const trending = (req, res) =>
  res.render("stories", { path: "trending" });
export const newStories = (req, res) =>
  res.render("stories", { path: "newStories" });
export const seeStory = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { path: "404" });
  }
  return res.render("stories", {
    path: "seeStory",
    video,
    id: `${req.params.id}`,
  });
};
export const editStory = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { path: "404" });
  }
  return res.render("editStory", {
    path: "editStory",
    video,
    id: `${req.params.id}`,
  });
};
export const postEditStory = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { path: "404" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/stories/${id}`);
};
export const deleteStory = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};
