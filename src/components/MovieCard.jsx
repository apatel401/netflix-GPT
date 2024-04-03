/* eslint-disable react/prop-types */
import { POSTER_LG, POSTER_PATH } from "../utils/constant";
import { Link } from "react-router-dom";
import { toggleGpt } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieCard = ({ poster_path, title, id }) => {
  const dispatch = useDispatch();
  const gptToggle = useSelector((state) => state.gpt.gptToggle);
  const handleClick = () => {
if(gptToggle) dispatch(toggleGpt());
  }
  if (!poster_path) return null;
  return (
    <div className="pr-4 md:w-40 w-32">
      <Link
        to={`/movie/${id}`}
        className="hover:cursor-pointer hover:shadow-lg"
        onClick={handleClick}>
      <img
        src={POSTER_PATH + POSTER_LG + poster_path}
        alt={title + " poster image"}
      />
      </Link>
    </div>
  );
};

export default MovieCard;
