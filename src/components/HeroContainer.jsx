import { useSelector } from "react-redux";
import VideoBg from "./VideoBg.jsx";
import VideoTitle from "./VideoTitle.jsx";

const HeroContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie
  return (
    <>
      <VideoTitle title={original_title} overview={overview}  />
      <VideoBg id={id}/>
    </>
  );
};

export default HeroContainer;
