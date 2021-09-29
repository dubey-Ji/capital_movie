import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";

const PopularPage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [popularMovies, setPopularMovies] = useState([]);
  const getPopularMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`
    );
    const data = await response.json();
    setPopularMovies(data.results);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <>
      <div style={{ marginLeft: "5rem" }}>
        <Grid container spacing={2}>
          {popularMovies.map((movie) => {
            return <Cards key={movie.id} {...movie} />;
          })}
        </Grid>
      </div>
    </>
  );
};

export default PopularPage;
