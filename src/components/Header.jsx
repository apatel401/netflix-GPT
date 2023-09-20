/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGpt } from "../utils/gptSlice";
import { changeLang } from "../utils/settingSlice";
import lang, { SUPPORTED_LNG } from "../utils/langConstant";

const Header = () => {
  const user = useSelector((state) => state.user);
  const currentLanguage = useSelector((state) => state.setting.language);
  const gptToggle = useSelector((state) => state.gpt.gptToggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/browse");
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

  return (
    <div className="absolute z-10 px-8 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-40 py-6"
        alt={lang[currentLanguage].logoAlt}
        src="./Netflix.svg"
      />
      <div className="flex">
        <select
          className="mr-4 my-auto py-[0.375rem] px-3 bg-black text-white border-2 border-red-600"
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
              className="bg-red-600 py-[0.375rem] px-3 my-auto mr-4 text-white"
              onClick={(e) => handleSearchBtn(e)}
            >
              {!gptToggle ? lang[currentLanguage].gptSearch : lang[currentLanguage].homePage}
            </button>
            <img className="w-8 h-8 my-auto" alt={lang[currentLanguage].logoAlt} src={"./avatar.png"} />
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