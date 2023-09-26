/* eslint-disable react/prop-types */
const VideoTitle = ({title, overview}) => {
  return (
    <div  className="pt-48 md:pt-60 md:pl-10 pl-6 w-full aspect-video absolute bg-gradient-to-r from-black to-transparent">
    <h1 className="text-xl w-1/3 text-white my-3">{title}</h1>
    <p className="text-white w-1/3 md:block hidden">{overview}</p>
   <div className="my-3">
   <button className="bg-white px-4 py-2 rounded-md hover:bg-opacity-80">Play</button>
    <button className="bg-gray-500 text-white bg-opacity-60 px-4 py-2 ml-2 rounded-md hover:bg-opacity-40 md:inline-block hidden">More Info</button>
        </div> 
    </div>
  )
}

export default VideoTitle