import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
// import { BACKDROP_LG, POSTER_PATH } from "../utils/constant";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MoviePage = () => {
  const { movieId } = useParams();
  const gptToggle = useSelector((state) => state.gpt.gptToggle);
  const movieDetails = useMovieDetails(movieId);
  // console.log(movieDetails?.genres)
  //   const {
  //     backdrop_path,
  //     genres,
  //     homepage,
  //     id,
  //     imdb_id,
  //     original_language,
  //     original_title,
  //     overview,
  //     popularity,
  //     poster_path,
  //     production_companies,
  //     production_countries,
  //     release_date,
  //     revenue,
  //     runtime,
  //     spoken_languages,
  //     status,
  //     tagline,
  //     title,
  //     video,
  //     vote_average,
  //     vote_count,
  //   } = movieDetails;
  if (!movieDetails) return null;
  return (
    <div>
      <Header base_path="../../" />
      {!gptToggle ? (
        <>
          <VideoTitle
            title={movieDetails?.original_title}
            overview={movieDetails?.overview}
          />
          <VideoBg id={movieDetails?.id} />
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};

export default MoviePage;
