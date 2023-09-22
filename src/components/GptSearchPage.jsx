import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstant";
import { useRef } from "react";
import OpenAI from "openai";
import { options, SEARCH_MOVIE_API } from "../utils/constant";
import { addMovieSuggestions, addSearchText } from "../utils/gptSlice";
import MovieSuggestions from "./MovieSuggestions";
// import openai from "../utils/openai";

const GptSearchPage = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.gpt.movies);
  const searchText = useSelector((store) => store.gpt.searchText);
  const gptQuery = `Act as movie recommand ${inputRef?.current?.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example: Gadar, Sholay, Don, Golmaal, koi mill gaya`;
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const currentLanguage = useSelector((state) => state.setting.language);
  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(addSearchText(inputRef.current.value));
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = completion.choices[0].message?.content.split(",")
    const promiseArray = gptMovies.map((movie) => fetchMovies(movie))

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addMovieSuggestions({
        suggestedMovies: tmdbResults,
        suggestedMovieNames: gptMovies,
      })
    );
  };

  //Fetch movie in tmdb database
  const fetchMovies = async (movie) => {
    const data = await fetch(
      SEARCH_MOVIE_API + movie + "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };
  return (
    <>
      <div className="flex justify-center pt-[10%] relative">
        <form
          className="bg-black grid grid-cols-12 w-1/2 p-2"
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            ref={inputRef}
            className="p-2 col-span-10"
            type="text"
            placeholder={lang[currentLanguage].searchPlaceHolder}
            value={searchText}
          />
          <button className="bg-red-600 text-white p-2 ml-2  col-span-2">
            {lang[currentLanguage].search}
          </button>
        </form>
      </div>
      <div>{movies && <MovieSuggestions />}</div>
      <div className="fixed top-0 -z-10 bg-hero-pattern bg-opacity-50 bg-no-repeat bg-auto h-full flex flex-col min-h-full min-w-full"></div>
    </>
  );
};

export default GptSearchPage;
