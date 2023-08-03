"use client"
import Link from "next/link"
import { useState } from "react"

const LoginPage = () => {
  const [user,setUser] = useState({
    username: "",
    email:"",
    password:""
  })
  const handleLogin = ()=>{

  }
  return (
    <div className='flex w-full rounded justify-center items-center mt-28'>
    <div className="formContainer">
    <form action="" className='p-2 m-2 flex flex-col'>
    <h3 className="text-xl font-bold mb-4">Login</h3>

    <label htmlFor='email' className='m-1 p-2'> Email </label>
    <input type="text" value={user.email} onChange={(e)=> setUser({...user,email: e.target.value})}  placeholder='email' name='email' className='p-1 m-1 rounded text-center ' />
    <label htmlFor='password' className='m-1 p-2'> Password </label>
    <input type="text"  value={user.password} onChange={(e)=> setUser({...user,password: e.target.value})} placeholder='password' name='password'  className='p-1 m-1 rounded text-center '/>

    <button className='rounded border-2 border-white p-2 w-32 ml-12 mt-5' onClick={handleLogin}>Login Here</button>
    <span className='m-2 p-2 ml-12'>Visit <Link href={"/signup"} className='boder-bottom border-b-2 border-blue-500 cursor-pointer'>SignUp</Link> Page</span>
    </form>
    </div>
  </div>
  )
}

export default LoginPage