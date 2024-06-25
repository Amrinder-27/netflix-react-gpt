import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const {title, movies} = props;
    console.log(movies)
  return (
    <div className='px-6 bg-transparent'>
         <h1 className='text-3xl text-white bold py-4 px-4'>{title}</h1>
 
   
    <div className='flex overflow-x-scroll px-4'>
        

    <div className='flex'>
        {movies?.map(movie =>  <MovieCard posterpath = {movie.poster_path} />)}
       </div>
    </div>
    </div>
    
  )
}

export default MovieList