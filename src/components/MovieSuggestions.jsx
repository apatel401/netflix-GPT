import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const { movieNames, movies } = useSelector((store) => store.gpt);
  console.log(movies);

  if (!movieNames) return null;
  return (
    <div className="p-4 mt-4 bg-black bg-opacity-70 text-white">
      {movieNames.map((movie, index) => {
        return <MovieList key={index} title={movie} movies={movies[index]} />;
      })}
    </div>
  );
};

export default MovieSuggestions;
