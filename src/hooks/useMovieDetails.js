/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { options } from "../utils/constant";

export default function useMovieDetails(movieId) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );

    const json = await data.json();
    setMovies(json);
  };

  return movies;
}
