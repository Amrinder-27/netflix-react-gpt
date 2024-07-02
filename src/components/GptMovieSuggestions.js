import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList';
const GptMovieSuggestions = () => {

  const searchResultNames = useSelector(store => store.GPT);
  const SearchNames = searchResultNames.showGptNames;
  const moviesResultList = searchResultNames.showSearchGPTResults;
  if(!SearchNames) return null;

  return (
    
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
      {SearchNames.map((movies, index) => <MovieList title = {movies} movies = {moviesResultList[index]} /> )}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestions