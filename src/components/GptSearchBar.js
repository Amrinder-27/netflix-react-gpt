import React, { useRef } from 'react'
import lang from "../utils/langConstants";
import { useSelector } from 'react-redux';
import {model} from "../utils/openAiHelper";
const GptSearchBar = () => {
    const getPrefferedLang = useSelector(store => store.config.preferredLang);
    const searchText = useRef();
    const handleGPTSearchClick = async() =>{
      console.log(searchText.current.value) ;
      
      // Make an API call to open AI gpt and get movies suggestions
      // const chatGptQuery =  "Act as a movie recommendation system and suggest some movies for this query" + searchText.current.value+ "only give name of 5 movies & movies name should be in comma separated like gadar, golmaal, panchayat"
      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: chatGptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(gptResults.choices)

      const prompt = "Act as a movie recommendation system and suggest some movies for this query" + searchText.current.value + "only give name of 5 movies & movies name should be in comma separated like gadar, golmaal, panchayat"
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);



    }
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit = {(e) => e.preventDefault()}>

            <input ref = {searchText} type = "text" className='p-4 m-4  col-span-9' placeholder={lang[getPrefferedLang].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick = {handleGPTSearchClick}>{lang[getPrefferedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar