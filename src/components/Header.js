import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeUser } from '../utils/userSlice';

const Header = () => {

const navigate = useNavigate(); // hook
const dispatch = useDispatch();
const user = useSelector((store) => store.user);
 const handleSignout = () =>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.

    });
  }
 


  return (
    
    <div className='absolute w-full left-0 z-10 px-2 py-3 bg-gradient-to-bl flex justify-between'>
        <img className='w-44' src= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png " alt ="logo"/>
   
    {user && <div className='p-2'>
      <img className='w-10 h-10' src ="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"/>
      <button onClick={handleSignout}>{user.displayName}Sign Out</button>
    </div>}
    </div>
   
  )
}

export default Header