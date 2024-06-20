import React, { useEffect } from 'react'
import Header from './Header';
import useAddNowPlayingMovies from '../hooks/useAddNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useAddNowPlayingMovies();
  return (
    
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      Browse</div>
  )
}

export default Browse