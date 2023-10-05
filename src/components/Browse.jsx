import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useMovies";
import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } from "../utils/constant";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import HeroContainer from "./HeroContainer";
import SecContainer from "./SecContainer";
const Browse = () => {
  const displayGptPage = useSelector((state) => state.gpt.gptToggle);

  useNowPlaying(NOW_PLAYING);
  useNowPlaying(TOP_RATED);
  useNowPlaying(POPULAR);
  useNowPlaying(UPCOMING);

  return (
    <>
      <Header base_path="./" />
      {displayGptPage ? (
        <GptSearchPage />
      ) : (
        <>
          <HeroContainer />
          <SecContainer />
        </>
      )}
    </>
  );
};

export default Browse;
