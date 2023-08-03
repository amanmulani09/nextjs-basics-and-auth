"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const [user,setUser] = useState({
    username:'',
    email:'',
    password:''
  })

  const handleSignUp = ()=>{

  }
  return (
    <div className='flex w-full rounded justify-center items-center mt-28'>
      <div className="formContainer">
      <form action="" className='p-2 m-2 flex flex-col'>
      <h3 className="text-xl font-bold mb-4">Sign Up</h3>

      <label htmlFor='userName' className='m-1 p-2'> UserName </label>
      <input type="text" value={user.username} onChange={(e)=> setUser({...user,username: e.target.value})} placeholder='username' name='username' className='p-1 m-1 rounded text-center ' />
      <label htmlFor='email' className='m-1 p-2'> Email </label>
      <input type="text" value={user.email} onChange={(e)=> setUser({...user,email: e.target.value})}  placeholder='email' name='email' className='p-1 m-1 rounded text-center ' />
      <label htmlFor='password' className='m-1 p-2'> Password </label>
      <input type="text"  value={user.password} onChange={(e)=> setUser({...user,password: e.target.value})} placeholder='password' name='password'  className='p-1 m-1 rounded text-center '/>

      <button className='rounded border-2 border-white p-2 w-32 ml-12 mt-5' onClick={handleSignUp}>Signup Here</button>
      <span className='m-2 p-2 ml-12'>Visit <Link href={"/login"} className='boder-bottom border-b-2 border-blue-500 cursor-pointer'>Login</Link> Page</span>
      </form>
      </div>
    </div>
  )
}

export default SignupPage