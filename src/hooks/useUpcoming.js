/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { UPCOMING, options } from '../utils/constant';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useUpcoming = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch(UPCOMING, options);
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
      getUpcomingMovies();
    }, []);
}

export default useUpcoming