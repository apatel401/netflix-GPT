import MovieList from "./MovieList"
import {useSelector} from "react-redux"
const SecContainer = () => {
  const {nowPlayingMovies, popularMovies,topRatedMovies,upcomingMovies} = useSelector((state) => state.movies)
  // console.log(nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies)
  return (
    <div className="bg-black">
      <div className="-mt-52 z-50 relative">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
    <MovieList title={"Popular"} movies={popularMovies} />
    <MovieList title={"Upcoming"} movies={upcomingMovies} />
    <MovieList title={"Top rated"} movies={topRatedMovies} />
      </div>
    </div>
  )
}

export default SecContainer