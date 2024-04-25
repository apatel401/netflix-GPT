/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../hooks/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import lang from "../utils/langConstant";

const Login = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(state => state.setting.language)
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  const [errMsg, setErrMg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validation(email.current.value, password.current.value);
    setErrMg(msg);
    if (msg) return;

    if (isSignedIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/51169932?s=96&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoUrl } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoUrl: photoUrl,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMg(errorCode);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/user-not-found") {
            setErrMg("User not found. please sign up first");
          }
        });
    }
  };
  return (
    <>
      <div className="bg-hero-pattern bg-opacity-50 bg-no-repeat bg-auto h-full relative flex flex-col min-h-full min-w-full">
        <Header base_path={"./"} />
        <form className="w-full m-auto flex flex-col justify-center h-full min-h-full bg-black bg-opacity-80 max-w-[420px] p-8 my-20 md:my-32">
          <h2 className="text-white my-2 text-2xl font-semibold">
            {isSignedIn ? lang[currentLang].signUpBtn : lang[currentLang].signInBtn}
          </h2>
          {isSignedIn && (
            <input
              placeholder={lang[currentLang].namePlaceholder}
              type="text"
              ref={name}
              className="my-3 p-3 rounded-md bg-gray-700"
            />
          )}
          <input
            placeholder={lang[currentLang].emailPlaceholder}
            ref={email}
            type="text"
            className="my-3 p-3 rounded-md bg-gray-700"
          />
          <input
            placeholder={lang[currentLang].passwordPlaceholder}
            ref={password}
            type="password"
            className="my-3 p-3  rounded-md bg-gray-700"
          />
          {errMsg && <p className="text-red-500 my-4">{errMsg}</p>}
          <button
            className="bg-[#e50914] text-lg px-4 py-3 my-2 text-white rounded-md"
            onClick={handleSubmit}
          >
            {isSignedIn ? lang[currentLang].signUpBtn : lang[currentLang].signInBtn}
          </button>
          <p className="text-gray-500  my-4">
           {lang[currentLang].new2Netflix}
            <span
              className="ml-1 text-white hover:underline cursor-pointer"
              onClick={() => setIsSignedIn(!isSignedIn)}
            >
              {isSignedIn ? lang[currentLang].alreadyRgstr : lang[currentLang].signupNow}
            </span>
          </p>
          <p className="text-gray-500  my-4">
            {lang[currentLang].learnMore}
            {!learnMore && (
              <span
                onClick={() => setLearnMore(true)}
                className="text-white hover:underline cursor-pointer"
              >
                {lang[currentLang].learnMoreBtn}
              </span>
            )}
          </p>
          {learnMore && (
            <p className="text-gray-500  my-4 text-sm">
             {lang[currentLang].learnMoreExpanded}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline cursor-pointer"
              >
                Privacy Policy
              </a>{" "}
              <a
                className="text-white hover:underline cursor-pointer"
                rel="noreferrer"
                href="https://policies.google.com/terms"
                target="_blank"
              >
                Terms of Service
              </a>
            </p>
          )}
        </form>
        <div className="w-full bg-opacity-80 bg-black h-60">
          <div className="mx-auto my-8 max-w-5xl">
            <span className="text-gray-500 text-lg">
              Questions? Call{" "}
              <a href="tel:1-844-542-4813" className="hover:underline">
                1-844-542-4813
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
