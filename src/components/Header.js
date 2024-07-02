import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addUser,removeUser } from '../utils/userSlice';
import {toggleGPTSearchView, ClearSearchNames} from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";
import {LOGO, USER_AVATAR, SUPPORTED_LANGUAGES} from '../utils/constant';
const Header = () => {

const navigate = useNavigate(); // hook
const dispatch = useDispatch();
const user = useSelector((store) => store.user);
const gptSearch = useSelector(store => store.GPT.showGPTSearch);
 const handleSignout = () =>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.

    });
  }
 
  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
     
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName} = user;
        dispatch(addUser({uid : uid, displayName: displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe;
  }, [])

  const handleGptSearchClick = () =>{

    dispatch(toggleGPTSearchView());
    dispatch(ClearSearchNames());
  }
  const handleLanguageSelector = (e) => {
      console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))
  }
  return (
    
    <div className='absolute w-full left-0 z-10 px-2 py-3 bg-gradient-to-bl bg-opacity-10 flex justify-between from-black'>
        <img className='w-44' src= {LOGO} alt ="logo"/>
   
    {user && <div className='p-2 flex text-white items-center'>
    {gptSearch &&  (<select className='p-2 bg-gray-900 text-white m-2' onChange = {handleLanguageSelector}>
      {SUPPORTED_LANGUAGES.map(lang => <option key ={lang.identifier} value={lang.identifier}>{lang.name}</option> )  }
      </select>)}
      <button className='px-4 py-2 m-2 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{gptSearch ? "HomePage": "GPT Search"}</button>
      <img className='w-10 h-10 mr-2' src = {USER_AVATAR}/>
      <button onClick={handleSignout}>{user.displayName}Sign Out</button>
    </div>}
    </div>
   
  )
}

export default Header