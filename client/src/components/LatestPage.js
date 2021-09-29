import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";

const LatestPage = () => {
  const [latestMovie, setLatestMovie] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const getLatestMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc`
    );
    const data = await response.json();
    setLatestMovie(data.results);
  };
  useEffect(() => {
    getLatestMovie();
  }, []);
  return (
    <>
      <div style={{ marginLeft: "5rem" }}>
        <Grid container spacing={2}>
          {latestMovie.map((movie) => {
            return <Cards key={movie.id} {...movie} />;
          })}
        </Grid>
      </div>
    </>
  );
};

export default LatestPage;
