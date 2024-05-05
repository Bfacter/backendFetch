const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Add this line

const app = express();

app.use(cors()); // Allow all origins. For production, consider a more restrictive setup.

app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data file");
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
