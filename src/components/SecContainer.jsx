import MovieList from "./MovieList"
import {useSelector} from "react-redux"
const SecContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies)
  console.log(movies)
  return (
    <div className="bg-black">
      <div className="-mt-52 z-50 relative">
      <MovieList title={"Now playing"} movies={movies} />
    <MovieList title={"Trending"} movies={movies} />
    <MovieList title={"Popular"} movies={movies} />
    <MovieList title={"Upcoming"} movies={movies} />
    <MovieList title={"Romance"} movies={movies} />
      </div>
    </div>
  )
}

export default SecContainer