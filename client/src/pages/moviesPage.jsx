import React from "react";
import Footer from "../components/Footer/Footer";
import MoviesCard from "../components/movies/MoviesCard";
import Header from "../components/Header/Header";

const moviesPage = () => {
  return (
    <div>
      <Header />
      <MoviesCard />
      <Footer />
    </div>
  );
};

export default moviesPage;
