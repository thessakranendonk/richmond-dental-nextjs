import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from the backend!" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
