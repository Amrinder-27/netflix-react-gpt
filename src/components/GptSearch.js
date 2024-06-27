import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {LOGIN_IMAGE} from '../utils/constant';
const GptSearch = () => {
  return (
    <div>
<div className="absolute -z-10">
        <img src={LOGIN_IMAGE} />
      </div>
     <GptSearchBar/>
     <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch