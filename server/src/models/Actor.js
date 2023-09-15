const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema({
  nconst: String,
  primaryName: String,
  deathYear: String,
  birthYear: String,
  primaryProfession: String,
  knownForTitles: String,
});

const Actor = mongoose.model("actors", ActorSchema);
module.exports = Actor;
