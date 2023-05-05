const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "You need a joke here."],
      minLength: [10, "Your joke needs 10 or more characters to be funny"],
    },
    punchline: {
      type: String,
      required: [true, "Waiting for the punchline..."],
      minLength: [3, "Your punchline needs 3 or more characters to be funny"],
    },
  },
  { timestamps: true }
);
const Show = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
