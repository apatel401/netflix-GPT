/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import {  options } from '../utils/constant';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovies = (fetchUrl) => {
    const dispatch = useDispatch();
    const { nowPlayingMovies, popularMovies,topRatedMovies,upcomingMovies} = useSelector(store => store.movies)
    const getNowPlayingMovies = async () => {
      const data = await fetch(fetchUrl, options);
      const json = await data.json();
    //   console.log(json.results);
    /*
    refactored the code below to dynamically dispatch 
    action to register movies in redux
    */
    const keywordToActionMap = {
      "now_playing": addNowPlayingMovies,
      "popular": addPopularMovies,
      "upcoming": addUpcomingMovies,
      "top_rated": addTopRatedMovies
    };
    
    for (const keyword in keywordToActionMap) {
      if (fetchUrl.includes(keyword)) {
        const action = keywordToActionMap[keyword];
        dispatch(action(json.results));
      }
    }
    };
  
    useEffect(() => {
      if(!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies){
        getNowPlayingMovies();
      }
    }, []);
}

export default useMovies