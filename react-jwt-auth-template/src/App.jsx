// App.jsx

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        { user ? ( /* Renders if there is a user */
          <Route path="/" element={<Dashboard user={user} />} />
        ) : ( /* Renders if no user (User set to null or other falsey value) */
          <Route path="/" element={<Landing />} />
        )}

        {/* The signup form, renders when navbar's signup link is clicked */}
        {/* Set user allows user to be toggled/set in signup form */}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
