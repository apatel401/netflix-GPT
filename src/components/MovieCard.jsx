/* eslint-disable react/prop-types */
import { POSTER_LG, POSTER_PATH } from "../utils/constant";

const MovieCard = ({ poster_path, title }) => {
  if (!poster_path) return null;
  return (
    <div className="pr-4 md:w-40 w-32">
      <img
        src={POSTER_PATH + POSTER_LG + poster_path}
        alt={title + " poster image"}
      />
    </div>
  );
};

export default MovieCard;
