const Joke = require("../models/joke.model");

module.exports = {
  //*=========== CREATE ===========*//
  createJoke: (req, res) => {
    Joke.create(req.body)
      .then((newJoke) => res.json(newJoke))
      .catch((err) => res.status(400).json(err));
  },

  //*=========== READ - ALL ===========*//
  getAllJokes: (req, res) => {
    Joke.find()
      .then((allJokes) => res.json(allJokes))
      .catch((err) => res.status(400).json(err));
  },

  //*=========== READ - ONE - byID ===========*//
  getOneJokeID: (req, res) => {
    Joke.findById(req.params.id)
      .then((oneJoke) => res.json(oneJoke))
      .catch((err) => res.json(err));
  },

  //*=========== READ - ONE - RANDOM ===========*//
  getRandomJoke: (req, res) => {
    Joke.countDocuments()
      .then((count) => {
        const randomIndex = Math.floor(Math.random() * count);
        return Joke.findOne().skip(randomIndex);
      })
      .then((randomJoke) => res.json(randomJoke))
      .catch((err) => res.status(400).json(err));
  },

  //*=========== UPDATE - ONE byID ===========*//
  updateJoke: (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedJoke) => res.json(updatedJoke))
      .catch((err) => res.json(err));
  },

  //*=========== DELETE - ONE - byID ===========*//
  deleteJoke: (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
