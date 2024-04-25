import { useSelector } from "react-redux"
import lang from "../utils/langConstant"

/* eslint-disable react/prop-types */
const VideoTitle = ({title, overview}) => {
  const currentLang = useSelector(state => state.setting.language)
  return (
    <div  className="pt-48 md:pt-60 md:pl-10 pl-6 w-full aspect-video absolute bg-gradient-to-r from-black to-transparent">
    <h1 className="text-xl w-1/3 text-white my-3">{title}</h1>
    <p className="text-white w-1/3 md:block hidden">{overview}</p>
   <div className="my-3">
   <button className="bg-white px-4 py-2 rounded-md hover:bg-opacity-80">{lang[currentLang].playBtn}</button>
    <button className="bg-gray-500 text-white bg-opacity-60 px-4 py-2 ml-2 rounded-md hover:bg-opacity-40 md:inline-block hidden">{lang[currentLang].moreInfoBtn}</button>
        </div> 
    </div>
  )
}

export default VideoTitle