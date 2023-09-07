/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import {  TOP_RATED, options } from '../utils/constant';
import {  addTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTopRated = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(TOP_RATED, options);
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    };
  
    useEffect(() => {
      getTopRatedMovies();
    }, []);
}

export default useTopRated