import React from "react";
import MoviesCard from "../components/movies/MoviesCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
