import React from 'react'
import { Link } from 'react-router-dom'
import netflix from "../../public/assets/netflix-logo.png"
function LoginPage() {
  return (
    <div className=' hero-bg h-screen w-full '>
      <header className=' max-w-6xl text-center mx-auto flex items-center justify-between p-4  '>
        <Link to={"/"}>
          <img className=' h-20 w-full  ' src={netflix} alt="" />
        </Link>
      </header>
      <div className=" flex justify-center items-center mt-10 mx-3   ">
        <div className=" max-w-md space-y-6  bg-black/60 p-8 w-full rounded-md shadow-md  ">
          <h1 className=" text-2xl font-bold  text-white text-center uppercase "> sign in </h1>
         
          <form className='space-y-4 '>
            <div className="  ">
              <label htmlFor="email" className=' text-gray-300 block font-medium text-sm '> Email </label>
              <input type="email" id='email' placeholder='sample@mail.com'
                className=' w-full border-2   border-gray-700 rounded-md py-3 px-2 fo text-white bg-transparent 
                 focus:outline-none focus:ring ' />
            </div>
            <div className="  ">
              <label htmlFor="password" className=' text-gray-300 block font-medium text-sm '> Password </label>
              <input type="password" id='password' placeholder='*****************'
                className=' w-full border-2  border-gray-700 rounded-md py-3 px-2 fo text-white bg-transparent 
                 focus:outline-none focus:ring ' />
            </div>
            <button className=' w-full mt-4 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-md'> Sign in</button>
          </form>
          
          <div className=" text-center text-gray-400">
            Dont't Have aAccount?{" "} <Link to={"/signup"} className='text-red-700 font-semibold hover:underline'> register </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage