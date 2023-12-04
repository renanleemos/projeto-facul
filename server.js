import express from "express";
import dotenv from "dotenv";

// Load variables
dotenv.config();

//  start server
const app = express();

app.use(express.static("projeto-facul"));
app.use(express.json());


// home route
app.get("/", (req, res) => {
  res.sendFile('index.html', {root: 'projeto-facul'});
});

app.listen(3000, () => {
  console.log("listening on port 3000;");
});
