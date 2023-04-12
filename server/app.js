const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "home endpoint" });
});

app.get("/api", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "mavi",
    },
    {
      id: 2,
      title: "siyah",
    },
  ]);
});

app.get("/api/error", (req, res) => {
  res.status(400).json('Skyrim!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
