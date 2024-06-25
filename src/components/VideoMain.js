import React, { useEffect, useState } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import {  useSelector } from 'react-redux';
const VideoMain = (props) => {
    const {movieId} = props;
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    useMovieTrailer(movieId)
   
  return (
    <div className='w-screen'>
   { trailerVideo?.map(t => <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+ t?.key + "?autoplay=1&mute=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>) }
   </div>
  )
}

export default VideoMain