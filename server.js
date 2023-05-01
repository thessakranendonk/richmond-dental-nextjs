import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();

app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
