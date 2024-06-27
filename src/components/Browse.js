import React, { useEffect } from 'react'
import Header from './Header';
import useAddNowPlayingMovies from '../hooks/useAddNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptSearch = useSelector(store => store.GPT.showGPTSearch);
  console.log(gptSearch);
  useAddNowPlayingMovies();
  return (
    
    <div>
      <Header/>
      { gptSearch ?<GptSearch/>:<><MainContainer/>
        <SecondaryContainer/></> }
      
      </div>
  )
}

export default Browse