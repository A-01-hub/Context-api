import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Profile = () => {
  const {user}=useContext(UserContext);
  if(!user){

  return (
    <div className='font-semibold text-4xl text-center m-9 text-blue-400'>Please Login</div>
  )
}
else{
  return (
    <div className='flex flex-col  items-center justify-center bg-gray-100 rounded-4xl shadow-lg p-9 w-1/3 h-1/3 mx-auto mt-10'>
      <h2 className='text-3xl font-serif font-semibold m-9'>Profile</h2>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-xl font-semibold mb-2'>Username: {user.username}</h3>
        <h3 className='text-xl font-semibold'>Password: {user.password}</h3>
      </div>
    </div>
  )
}
}

export default Profile