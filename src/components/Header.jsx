import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  // console.log(user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
        navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
      navigate("/error")
    });
  }
  return (
    <div className="absolute z-10 px-8 bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="w-40 py-6" alt="logo" src="./Netflix.svg" />
      {user && <div className="flex">
      <img className="w-8 h-8 my-auto" alt="logo" src={user.photoUrl} />
      <button className="text-white ml-2" onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header