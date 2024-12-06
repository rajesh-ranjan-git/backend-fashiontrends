import express from "express";
import "dotenv/config";

const server = express();
const PORT = process.env.PORT || 8000;

server.get("/", (req, res) => {
  return res.json({ message: `Hello! Server is up and running at ${PORT}.` });
});

server.listen(PORT, () =>
  console.log(`Hello! Server is up and running at ${PORT}.`)
);
