/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { NOW_PLAYING, options } from './constant';
import { addNowPlayingMovies } from './movieSlice';
import { useEffect } from 'react';

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(NOW_PLAYING, options);
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlaying