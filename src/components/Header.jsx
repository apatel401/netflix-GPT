/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGpt } from "../utils/gptSlice";
import { changeLang } from "../utils/settingSlice";
import lang, { SUPPORTED_LNG } from "../utils/langConstant";
import { useLocation } from "react-router-dom";

const Header = ({ base_path }) => {
  const user = useSelector((state) => state.user);
  const currentLanguage = useSelector((state) => state.setting.language);
  const gptToggle = useSelector((state) => state.gpt.gptToggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    //setting up current language according to html page lang
    const currentLanguage = document.querySelector("html").lang || "en";
    // console.log(currentLanguage);
    dispatch(changeLang(currentLanguage));
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        //!bugfixed to read header file everywhere
        if (location.pathname === "/") {
          navigate("/browse");
        } else {
          navigate(location.pathname);
        }
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });

    return () => subscribe;
  }, []);

  const handleSearchBtn = (e) => {
    e.preventDefault();
    dispatch(toggleGpt());
  };

  const handleLangChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLang(e.target.value));
  };
  const handleHome = (e) => {
    if (gptToggle) {
      dispatch(toggleGpt());
    }
    let newPath = "./";
    if (location.pathname.includes("movie")) {
        newPath = "../../";
    } else if (location.pathname.includes("browse")) {
        newPath = "../";
    }
    navigate(newPath);
  };
  return (
    <div
      className={`absolute z-10 px-8 md:bg-gradient-to-b bg-transparent md:from-black  w-full flex md:flex-row justify-between md:py-0 py-4 ${
        user ? "flex-col" : "flex-row"
      }`}
    >
      <img
        className={`w-24 md:w-40 md:py-6 py-1 md:mx-0 cursor-pointer ${
          user ? "mx-auto" : "mx-0"
        }`}
        alt={lang[currentLanguage].logoAlt}
        src={base_path + "Netflix.svg"}
        onClick={() => handleHome()}
      />

      <div className={`flex ${user ? "justify-center" : "justify-normal"}`}>
        <select
          className="mr-4 my-auto py-[0.25rem] px-2 md:py-[0.375rem] md:px-3 bg-black text-white border-2 border-red-600"
          onChange={handleLangChange}
        >
          {SUPPORTED_LNG.map((lang) => {
            return (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            );
          })}
        </select>
        {user && (
          <>
            <button
              className="bg-red-600 py-[0.25rem] px-1 md:py-[0.375rem] md:px-3 my-auto mr-4 text-white border-2 border-red-600"
              onClick={(e) => handleSearchBtn(e)}
            >
              {!gptToggle
                ? lang[currentLanguage].gptSearch
                : lang[currentLanguage].homePage}
            </button>
            <img
              className="w-8 h-8 my-auto"
              alt={lang[currentLanguage].logoAlt}
              src={base_path + "avatar.png"}
            />
            <button className="text-white ml-2 my-2" onClick={handleSignOut}>
              {lang[currentLanguage].signOutBtn}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
