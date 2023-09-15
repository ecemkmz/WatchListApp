const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const axios = require('axios');

const app = express();
<<<<<<< Updated upstream
const port = process.env.PORT || 5000; 
=======
const cors = require("cors");
const port = process.env.PORT || 5500;

//routes
const actorRoute = require("./src/api/routes/actors.js");
const movieRoute = require("./src/api/routes/movies.js");

>>>>>>> Stashed changes
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
const ActorSchema = new mongoose.Schema({
  nconst: String,
  primaryName: String,
  birthYear: String, 
  deathYear: String,
  primaryProfession: String,
  knownForTitles: String,
});

const Actors= mongoose.model('Actors', ActorSchema);
app.use(express.json());
const apiKey = 'e7c680bb91msh7cefc06feb84bf0p16346fjsn68ee6f3b768b';
const host = 'moviesdatabase.p.rapidapi.com';
const limitPerPage = 50;
const totalPages = 50;
for (let page = 1; page <= totalPages; page++) {

<<<<<<< Updated upstream
app.get(`/actors/${page}`, async (req, res) => {

    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/actors',
      params: {
        page: page,
        limit: limitPerPage
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': host
      }
    };

    try {
      const response = await axios.request(options);
      const actors = response.data.results;
      await Actors.insertMany(actors);
      res.json(response.data);
    } catch (error) {
      console.error('Hata:', error);
      return res.status(500).json({ error: 'Veri çekme hatası' });
    }
  


}); };
=======
app.use("/api", actorRoute);
app.use("/api", movieRoute);

>>>>>>> Stashed changes

app.listen(port, () => {
  connect();
  console.log(`Server ${port} portunda çalışıyor.`);
});