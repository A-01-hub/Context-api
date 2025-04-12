import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'


const App = () => {
  return (
    <UserContextProvider>

    <Login/>

    <Profile/>
    </UserContextProvider>
  )
}

export default App;