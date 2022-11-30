const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is working....");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port :http://localhost:${PORT}`)
);
