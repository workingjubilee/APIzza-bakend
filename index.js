const express = require("express")
const morgan = require("morgan");
const cors = require("cors");
const server = express();

server.use(morgan("combined"));
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.status(200).json({ message: "it's working" });
});

server.post("/", (req, res) => {
  body = req.body;
  if (body && Object.keys(body).length > 0) {
    res.status(200).json({ message: "message received! you sent...", contained: body });
  } else {
    res.status(400).json({ message: "i ain't got no body!" });
  }
});

server.listen(port, () => {
  console.log(`running on ${port}`);
});
