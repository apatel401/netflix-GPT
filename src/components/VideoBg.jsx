/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";
const VideoBg = ({ id }) => {
  const videoTrailer = useSelector((state) => state.movies?.trailerVideos);

  useMovieTrailer(id)

  return (
    <div>
      <iframe
      className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoTrailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBg;
