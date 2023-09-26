import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-0 z-50 relative md:-mt-52">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Top rated"} movies={topRatedMovies} />
      </div>
    </div>
  )
}

export default SecContainer;
