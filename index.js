const server = require("express")();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

server.use(morgan("combined"));
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.status(200).json({ message: "it's working" });
});

server.listen(port, () => {
  console.log(`running on ${port}`);
});
