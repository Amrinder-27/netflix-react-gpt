import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { AddPopularVideos } from '../utils/movieSlice';
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovie = async () =>{
  
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        
        const movieData = await data.json();
        dispatch(AddPopularVideos(movieData.results))
        console.log(movieData.results);
        
        }
        
        useEffect(()=>{
            getPopularMovie();
        }, []);
}

export default usePopularMovies