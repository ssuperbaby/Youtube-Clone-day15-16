export const join = (req, res) => res.render("users", { path: "join" });
export const login = (req, res) => res.render("users", { path: "login" });
export const seeUsers = (req, res) =>
  res.render("users", { path: "seeUsers", id: `${req.params.id}` });
export const seeUser = (req, res) => res.render("users", { path: "seeUser" });
export const editProfile = (req, res) =>
  res.render("users", { path: "editProfile" });
