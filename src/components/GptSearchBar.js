import React from 'react'
import lang from "../utils/langConstants";
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
    const getPrefferedLang = useSelector(store => store.config.preferredLang)
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12'>

            <input type = "text" className='p-4 m-4  col-span-9' placeholder={lang[getPrefferedLang].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[getPrefferedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar