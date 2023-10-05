export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const POPULAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const POSTER_PATH = "https://image.tmdb.org/t/p/";

export const POSTER_SM = "w342";
export const POSTER_MD = "w500";
export const POSTER_LG = "w780";
export const BACKDROP_MD = "w780";
export const BACKDROP_LG = "w1280";

export const SEARCH_MOVIE_API =
  "https://api.themoviedb.org/3/search/movie?query=";
