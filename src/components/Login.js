import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInform, setSignInForm ] = useState(true);
    const HandleSignUpForm = () => {
        
        setSignInForm(!isSignInform);
    }
   
  return (
    <div className=''>
        <Header />
        <div className='absolute'>
        <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/d99fa435-e8f8-405d-8685-c69b263f2e92/AU-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"/> 
        </div>
        <form className='w-3/12 mx-auto right-0 left-0 my-36 absolute p-12 bg-black bg-opacity-80 text-white '>
        <h1 className='text-3xl font-bold py-4'>{isSignInform? 'Sign In' : "Sign Up"}</h1>
       {!isSignInform && <input type = "text" placeholder='Full Name' className='p-4 bg-gray-800 w-full my-4'/>}
            <input type = "text" placeholder='Email address' className='p-4 bg-gray-800 w-full my-4'/>
            <input type = "password" placeholder='Password' className='p-4 bg-gray-800 w-full my-4'/>
            <button className='p-4 my-4 bg-red-700 w-full rounded-md' >{isSignInform? 'Sign In' : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={HandleSignUpForm}>{isSignInform? 'New to Netflix? Sign Up now' : "Already registered Sign In now"}</p>
        </form>
        </div>
  )
}

export default Login