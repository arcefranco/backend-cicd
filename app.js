const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.json([
    {
      name: "franco",
    },
    {
      name: "juan",
    },
    {
      name: "maría",
    },
    {
      name: "pedro",
    },
  ]);
});

app.get("/otra", (req, res) => {
  res.json([
    {
      name: "sol",
    },
    {
      name: "adrian",
    },
    {
      name: "tomás",
    },
    {
      name: "jose",
    },
  ]);
});

app.listen(3001);
