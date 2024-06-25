import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { AddTopRatedVideos } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovie = async () =>{
  
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        
        const movieData = await data.json();
        dispatch(AddTopRatedVideos(movieData.results))
        console.log(movieData.results);
        
        }
        
        useEffect(()=>{
            getTopRatedMovie();
        }, []);
}

export default useTopRatedMovies