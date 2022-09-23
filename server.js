const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = require("./app");

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Data is on");
});

app.listen(port, () => {
  console.log("Server is running", port);
});
