const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!123123" });
});

app.get("/example-200", (req, res) => {
  res.status(200).json({ message: "example 200" });
});

app.get("/example-500", (req, res) => {
  res.status(500).json({ message: "example 500" });
});

app.get("/respond-after-1000", (req, res) => {
  setTimeout(() => {
    res.status(200).json({ message: "respond-after-1000" });
  }, 1000);
});

app.get("/respond-after-3000", (req, res) => {
  console.log("respond-after-3000 start");

  setTimeout(() => {
    console.log("respond-after-3000 timeout");

    res.status(200).json({ message: "respond-after-3000" });
  }, 3000);

  console.log("respond-after-3000 end");
});

app.get("/respond-after-5000", (req, res) => {
  setTimeout(() => {
    res.status(200).json({ message: "respond-after-5000" });
  }, 5000);
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
  res.status(400).json("Skyrim!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
