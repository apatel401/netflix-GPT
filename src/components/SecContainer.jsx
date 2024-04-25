import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/langConstant";

const SecContainer = () => {
  const currentLang = useSelector(state => state.setting.language);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-0 z-50 relative md:-mt-52">
        <MovieList title={lang[currentLang].nowPlaying} movies={nowPlayingMovies} />
        <MovieList title={lang[currentLang].popular} movies={popularMovies} />
        <MovieList title={lang[currentLang].upcoming} movies={upcomingMovies} />
        <MovieList title={lang[currentLang].topRated} movies={topRatedMovies} />
      </div>
    </div>
  )
}

export default SecContainer;
