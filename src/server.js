import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);

export default app;
