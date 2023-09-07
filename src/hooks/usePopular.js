/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import {  POPULAR, options } from '../utils/constant';
import {  addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopular = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(POPULAR, options);
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(() => {
      getPopularMovies();
    }, []);
}

export default usePopular