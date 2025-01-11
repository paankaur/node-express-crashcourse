import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1 style="color: rebeccapurple; text-align: center; margin-top: 300px;">Helilio<br>worlddddd!</h1>'
  );
});

let posts = [
    {id: 1, title: "Post one"},
    {id: 2, title: "Post two"},
    {id: 3, title: "Post three"},
];

app.get("/api/posts", (req, res) => {
    res.json(posts);
});

app.listen(8000, () => console.log("Server is running on port 8000"));
