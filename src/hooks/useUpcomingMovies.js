import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { AddUpcomingVideos } from '../utils/movieSlice';
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovie = async () =>{
  
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        
        const movieData = await data.json();
        dispatch(AddUpcomingVideos(movieData.results))
        console.log(movieData.results);
        
        }
        
        useEffect(()=>{
            getUpcomingMovie();
        }, []);
}

export default useUpcomingMovies