import lang from "../utils/langConstant"


const GptSearchPage = () => {
  return (
    <>
     <div className="flex justify-center pt-[10%] relative">
      <form className="bg-black grid grid-cols-12 w-1/2 p-2" >
        <input className="p-2 col-span-10" type="text" placeholder={lang.hindi.searchPlaceHolder} />
        <button className="bg-red-600 text-white p-2 ml-2  col-span-2">{lang.hindi.search}</button>
      </form>
      </div>
      <div className="absolute top-0 -z-10 bg-hero-pattern bg-opacity-50 bg-no-repeat bg-auto h-full flex flex-col min-h-full min-w-full">
            </div>
    </>
     
  )
}

export default GptSearchPage