const express = require("express");
const axios = require("axios");

const app = express();
const port = 5500;

app.use(express.json());
const apiKey = "2cf7318c1amshb225b5248b1194ap182bebjsn49663724f345";
const host = "moviesdatabase.p.rapidapi.com";
const limitPerPage = 50;
const totalPages = 50;
for (let page = 1; page <= totalPages; page++) {
  app.get(`/get-all-movies/${page}`, async (req, res) => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/actors",
      params: {
        page: page,
        limit: limitPerPage,
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": host,
      },
    };

    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error("Hata:", error);
      return res.status(500).json({ error: "Veri çekme hatası" });
    }
  });
}

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
