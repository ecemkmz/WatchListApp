const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  _id: String,
  id: String,
  primaryImage: {
    id: String,
    width: Number,
    height: Number,
    url: String,
    caption: {
      plainText: String,
    },
  },
  titleType: {
    text: String,
    id: String,
    isSeries: Boolean,
    isEpisode: Boolean,
  },
  titleText: {
    text: String,
  },
  originalTitleText: {
    text: String,
  },
  releaseYear: {
    year: Number,
    endYear: Number,
  },
  releaseDate: {
    day: Number,
    month: Number,
    year: Number,
  },
});

const Movie = mongoose.model("movies", MovieSchema);
module.exports = Movie;
