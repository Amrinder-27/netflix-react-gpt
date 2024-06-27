import React from 'react'
import { IMAGE_URL } from '../utils/constant'
const MovieCard = (props) => {
    const {posterpath} = props;
  
  return (
    <div className='w-48 pr-1'>
        <img alt='Movie Card' src = {IMAGE_URL + posterpath} />
    </div>
  )
}

export default MovieCard