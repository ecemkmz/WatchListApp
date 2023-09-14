import React from "react";
import MoviesCard from "../components/movies/MoviesCard";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LatestMovies from "../components/movies/LatestMovies";

const moviesPage = () => {
  return (
    <div>
      <Header />
      <MoviesCard />
      <LatestMovies />
      <Footer />
    </div>
  );
};

export default moviesPage;
