import React from 'react'
import VideoMain from './VideoMain';

const VideoTitle = (props) => {
    const {title, overview} = props;
  return (
    <div className='absolute w-screen aspect-video pt-[10%]  px-8  text-white bg-gradient-to-tr from-black'>
    <h1 className='text-6xl bold'>{title}</h1>  
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div className='py-4'>
        <button className='bg-white text-black px-6  rounded-sm py-2'>▶️Play</button>
        <button className='mx-2 bg-gray-500 bg-opacity-50 rounded-sm text-white px-4 py-2'>More Info</button>
    </div>  

      
    </div>
  )
}

export default VideoTitle