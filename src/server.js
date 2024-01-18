import express from "express";
const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  console.log("someone come");
  return res.send(`<a href="#">Hi Five</a>`);
});

app.use((req, res) => {
  res.status(404).send("<h1>어디 감히 이상한 URL로 접속하고 그러냐!!!</h1>");
});

app.listen(PORT, () => {});
