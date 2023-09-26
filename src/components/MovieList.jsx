/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-6 px-8">
      <h1 className="md:text-3xl text-xl text-white">{title}</h1>
      <div className="pt-4 flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
