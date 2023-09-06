/* eslint-disable react/prop-types */
const VideoTitle = ({title, overview}) => {
  return (
    <div  className="py-72 px-10 w-full aspect-video absolute bg-gradient-to-r from-black to-transparent">
    <h1 className="text-xl  w-1/3 text-white my-3">{title}</h1>
    <p className="text-white w-1/3">{overview}</p>
   <div className="my-3">
   <button className="bg-white px-4 py-2 rounded-md hover:bg-opacity-80">Play</button>
    <button className="bg-gray-500 text-white bg-opacity-60 px-4 py-2 ml-2  rounded-md hover:bg-opacity-40">More Info</button>
        </div> 
    </div>
  )
}

export default VideoTitle