/* eslint-disable react/prop-types */
import { POSTER_LG, POSTER_PATH } from "../utils/constant";

const MovieCard = ({ poster_path, title }) => {
  return (
    <div className="pr-4 w-40">
      <img
        src={POSTER_PATH + POSTER_LG + poster_path}
        alt={title + " poster image"}
      />
    </div>
  );
};

export default MovieCard;
