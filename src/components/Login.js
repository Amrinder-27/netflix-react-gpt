import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValid } from "../utils/validate";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
const Login = () => {
  const [isSignInform, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const HandleSignUpForm = () => {
    setSignInForm(!isSignInform);
  };

  const handleButtonClick = () => {
    console.log(email);
   
    const message = checkValid(
      email.current.value,
      password.current.value,
      //fullname.current.value
    );
    setErrorMessage(message);
    if (message) return;

    // signIn or sign Up code here
    if (!isSignInform) {
      //signup code setup
      createUserWithEmailAndPassword(auth,  email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: fullname.current.value, 
          photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          
        }).then(() => {
          // Profile updated!
          // ...
          dispatch(addUser({uid:auth.currentUser.uid, displayName: auth.currentUser.displayName, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"}));
          navigate('/browse');

        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode +"-"+ errorMessage);
        // ..
      });


    } else {
      // sign In code setup

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
   
   navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
  });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/d99fa435-e8f8-405d-8685-c69b263f2e92/AU-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 mx-auto right-0 left-0 my-36 absolute p-12 bg-black bg-opacity-80 text-white "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 bg-gray-800 w-full my-4"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 bg-gray-800 w-full my-4"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 bg-gray-800 w-full my-4"
        />
        <p className="text-red-500 font-bold text-xl">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={HandleSignUpForm}>
          {isSignInform
            ? "New to Netflix? Sign Up now"
            : "Already registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
