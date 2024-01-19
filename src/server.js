import express from "express";
import morgan from "morgan";

import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";
import globalRouter from "./routers/globalRouter";

const PORT = 4000;
const app = express();
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log("😃CONNECTING😃"));
