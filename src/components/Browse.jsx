import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import HeroContainer from "./HeroContainer";
import SecContainer from "./SecContainer";
const Browse = () => {
  useNowPlaying()
  return (
    <>
      <Header />
      <HeroContainer />
      <SecContainer />
    </>
  );
};

export default Browse;
