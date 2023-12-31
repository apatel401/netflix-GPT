/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import {  addTrailerVideos } from "../utils/movieSlice";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const teaserAr = json.results.filter((video) => video.type === "Trailer");
    const teaser = teaserAr.length ? teaserAr[0] : json.results[0];
    dispatch(addTrailerVideos(teaser));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};
export default useMovieTrailer;