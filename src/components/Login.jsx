/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/Validation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  const [errMsg, setErrMg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validate(email.current.value, password.current.value)
    setErrMg(msg)
    if(msg) return;

    if(isSignedIn){
    //Sign Up logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      setErrMg(errorCode)
    });
    }else{
    //Sign in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user)
     navigate("/browse")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode === "auth/user-not-found"){
        setErrMg("User not found. please sign up first")
      }
    });
    }
  };
  return (
    <>
      <div className="bg-hero-pattern bg-opacity-50 bg-no-repeat bg-auto h-full relative flex flex-col min-h-full min-w-full">
        <Header />
        <form className="w-full m-auto flex flex-col justify-center h-full min-h-full bg-black bg-opacity-80 max-w-[420px] p-8 my-20">
          <h2 className="text-white my-2 text-2xl font-semibold">
            {isSignedIn ? "Sign Up" : "Sign In"}
          </h2>
          {isSignedIn && (
            <input
              placeholder="Full Name"
              type="text"
              className="my-3 p-3 rounded-md bg-gray-700"
            />
          )}
          <input
            placeholder="Email Address"
            ref={email}
            type="text"
            className="my-3 p-3 rounded-md bg-gray-700"
          />
          <input
            placeholder="Password"
            ref={password}
            type="password"
            className="my-3 p-3  rounded-md bg-gray-700"
          />
          {errMsg &&  <p className="text-red-500 my-4">{errMsg}</p>}
          <button
            className="bg-[#e50914] text-lg px-4 py-3 my-2 text-white rounded-md"
            onClick={handleSubmit}
          >
            {isSignedIn ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-gray-500  my-4">
            New to Netflix?{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={() => setIsSignedIn(!isSignedIn)}
            >
              {isSignedIn ? "Already Registered. Sign in now" : "Sign up Now"}
            </span>
          </p>
          <p className="text-gray-500  my-4">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.{" "}
            {!learnMore && (
              <span
                onClick={() => setLearnMore(true)}
                className="text-white hover:underline cursor-pointer"
              >
                Learn more
              </span>
            )}
          </p>
          {learnMore && (
            <p className="text-gray-500  my-4 text-sm">
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline cursor-pointer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="text-white hover:underline cursor-pointer"
                rel="noreferrer"
                href="https://policies.google.com/terms"
                target="_blank"
              >
                Terms of Service
              </a>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalized advertising by Google).
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
