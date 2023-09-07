/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
const Header = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log(user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      console.log(error)
      navigate("/error")
    });
  }

  useEffect(() => {
   const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        navigate("/")
        dispatch(removeUser());
      }
    });

    return () => subscribe
  }, []);

  return (
    <div className="absolute z-10 px-8 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-40 py-6" alt="logo" src="./Netflix.svg" />
      {user && <div className="flex">
      <img className="w-8 h-8 my-auto" alt="logo" src={user.photoUrl} />
      <button className="text-white ml-2" onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header