const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.get("/", (req, res) => {
  res.json([
    {
      name: `${process.env.NAME}`,
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

app.listen(3001, () => {
  console.log(`VARIABLE DE ENTORNO`, process.env.NAME);
});
