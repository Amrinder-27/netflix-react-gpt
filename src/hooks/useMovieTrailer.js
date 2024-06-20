import React, { useEffect, useState } from 'react'
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import {AddTrailerVideo} from '../utils/movieSlice';
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getVideoMovie = async (movieId) =>{
        const getVideo =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
          const fetchVideo = await getVideo.json();
       const Filtertrailer = fetchVideo.results.filter(t => t.type=== 'Trailer' && t.name === 'Final Trailer');
       const trailer = Filtertrailer.length ? Filtertrailer: fetchVideo.results[0];
       console.log(trailer);
  
       dispatch(AddTrailerVideo(trailer));
       
      
      }
  
      useEffect(()=>{
          getVideoMovie(movieId);
      }, [])
}

export default useMovieTrailer