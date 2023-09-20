import { useSelector } from "react-redux";
import lang from "../utils/langConstant";
import { useRef } from "react";
import { openai } from "../utils/openai";

const GptSearchPage = () => {
  const currentLanguage = useSelector((state) => state.setting.language);
  const inputRef = useRef(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: inputRef.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices);
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
          />
          <button className="bg-red-600 text-white p-2 ml-2  col-span-2">
            {lang[currentLanguage].search}
          </button>
        </form>
      </div>
      <div className="absolute top-0 -z-10 bg-hero-pattern bg-opacity-50 bg-no-repeat bg-auto h-full flex flex-col min-h-full min-w-full"></div>
    </>
  );
};

export default GptSearchPage;
