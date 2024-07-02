import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { model } from "../utils/openAiHelper";
import { AddSearchGptresults, AddSearchNames } from "../utils/gptSlice";
import { options } from "../utils/constant";

const GptSearchBar = () => {
  const getPrefferedLang = useSelector((store) => store.config.preferredLang);
  const searchText = useRef();
  const genAI = new GoogleGenerativeAI(
   process.env.REACT_APP_GEMINI_API
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const dispatch = useDispatch();

  const searchMovie = async (movies) => {
    const searchList = await fetch(
      "https://api.themoviedb.org/3/search/collection?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await searchList.json();

    return json.results;
  };
  const handleGPTSearchClick = async () => {
    // Make an API call to open AI gpt and get movies suggestions
    // const chatGptQuery =  "Act as a movie recommendation system and suggest some movies for this query" + searchText.current.value+ "only give name of 5 movies & movies name should be in comma separated like gadar, golmaal, panchayat"
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: chatGptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices)

    const prompt =
      "Act as a movie recommendation system and suggest some movies for this query" +
      searchText.current.value +
      "only give name of 5 movies & movies name should be in comma separated like gadar, golmaal, panchayat";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const searchGptResults = response.text().split(",");
    //dispatch(AddSearchGptresults(searchGptResults));

    const promiseArray = searchGptResults.map((gpt) => searchMovie(gpt));
    const searchMoviesList = await Promise.all(promiseArray);

    console.log(searchMoviesList);
    dispatch(AddSearchNames(searchGptResults));
    dispatch(AddSearchGptresults(searchMoviesList));
  };

  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  col-span-9"
          placeholder={lang[getPrefferedLang].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[getPrefferedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
