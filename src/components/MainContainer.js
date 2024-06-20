import React from 'react'
import VideoTitle from './VideoTitle'
import VideoMain from './VideoMain'
import { useSelector } from 'react-redux'
const MainContainer = () => {

    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if(movies === null) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const {overview, id} = mainMovie
  return (
    <div>
        <VideoTitle title = {mainMovie.title} overview={overview}/>
        <VideoMain movieId = {id}/>

    </div>
   
  )
}

export default MainContainer