// App.jsx


import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import * as authService from '../src/services/authService'; // import the authservice

import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'

const App = () => {
  const [user, setUser] = useState(authService.getUser()) // Checks if the user logged into a profile in a previous session. If not, set to null

  function handleSignout() {
    authService.signout()
    setUser(null)
  }
  
  return (


    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        { user ? ( /* Renders if there is a user */
          <Route path="/" element={<Dashboard user={user} />} />
        ) : ( /* Renders if no user (User set to null or other falsey value) */
          <Route path="/" element={<Landing />} />
        )}

        {/* The signup form, renders when navbar's signup link is clicked */}
        {/* Set user allows user to be toggled/set in signup form */}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
