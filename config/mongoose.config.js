const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Something is amiss!", err));
