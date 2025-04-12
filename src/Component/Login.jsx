import React, { useState } from 'react'
import { useContext} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword,setShowPassword]=useState(false);


    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});

        // here we have sent the data to the user context
        // now we can use this data in any component
    }
    const handleSubmit_logout=(e)=>{
      e.preventDefault();
      setUsername('');
      setPassword('');
      setUser(null);
    

      // here we have sent the data to the user context
      // now we can use this data in any component
  }

    const handleShowPassword=()=>{
        setShowPassword(!showPassword);

    }
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 rounded-4xl shadow-lg p-6 w-1/3 mx-auto mt-10'>
        <h2 className='text-3xl m-7 font-semibold'>Login</h2>


        <input 
        type='text'
        className='m-1 w-2/3 h-9.5 text-[15px] font-semibold border-2 border-gray-300 rounded-md p-2' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
         placeholder='username'
         required
          minLength={3}
         />

<div className= "relative w-2/3 m-1">
        <input 
        className='w-full h-full text-[15px] font-semibold border-2 border-gray-300 rounded-md p-2' 
         
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         type={showPassword?
          'password':'text'}
         placeholder='password'
         required
         minLength={8}
         />

         <img  
         onClick={handleShowPassword}
         className='absolute right-2 top-1/2  -translate-y-1/2 bottom-0 cursor-pointer w-5 h-5'
        
          src='src\assets\eye-solid.svg'

          alt='eye'/>
         



         </div>


        <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded m-3'>Login</button>
        <button onClick={handleSubmit_logout} className='bg-red-500 text-white px-3 py-2 rounded m-2'>Logout</button>

    </div>
  )
}

export default Login