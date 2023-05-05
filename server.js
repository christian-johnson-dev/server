const express = require("express");
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
require("./config/mongoose.config.js");

app.listen(port, () => {
  console.log("Listening at http:localhost:$(port)");
});
