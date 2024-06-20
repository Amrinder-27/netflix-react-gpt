import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { AddNowPlayingMovies } from '../utils/movieSlice';

const useAddNowPlayingMovies = () =>{
  const dispatch = useDispatch();

// fetch data from tmdb api and update redux store
const getNowPlayingMovie = async () =>{
  
const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);

const movieData = await data.json();
dispatch(AddNowPlayingMovies(movieData.results))
console.log(movieData.results);

}

useEffect(()=>{
  getNowPlayingMovie();
}, []);

}

export default useAddNowPlayingMovies;


