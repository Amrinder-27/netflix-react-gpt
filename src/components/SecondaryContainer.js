import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
const SecondaryContainer = () => {
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    const movies = useSelector(store => store.movies);
  return (
    /**
     * movieList - popular
     *  - multiple cards
     *  - horizontal rows
     *  -  each multiple cards * n
     * 
     * movielist - now playing
     * movielist - trending
     * movelist - horror
     * 
     */
   
   
    <div className='bg-black'>
        <div className='-mt-60 relative z-20 '>
         <MovieList title = {'Now Playing'} movies = {movies.nowPlayingMovies} />
         <MovieList title = {'Popular Movies'} movies = {movies.popularVideos} />
         <MovieList title = {'Upcoming Movies'} movies = {movies.upcomingVideos} />
         <MovieList title = {'Top Rated Movies'} movies = {movies.topRatedVideos} />
    </div>
    </div>

  )
}

export default SecondaryContainer