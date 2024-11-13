import * as authService from '../../services/authService'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/* Props being used here */
const SignupForm = (props) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  })

  function updateMessage(msg) {
    setMessage(msg)
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {

    event.preventDefault()
    updateMessage('')
    console.log(formData) // this line will print the form data to the console for conformation
    try {
        const newUserResponse = await authService.signup(formData)
        console.log(newUserResponse)
        props.setUser(newUserResponse.user) // this will modify the state in the App component
        navigate('/') // upon redirect you will see the "Dashboard" page
    } catch (error) {
        updateMessage(error.message)
        console.log(error.message)
    }
  }

  /* Stores form data into an object (?) */
  const { username, password, passwordConf } = formData

  const isFormInvalid = () => { /* If there is no username, no password, and/or passwords dont match, the form is invalid */
    return !(username && password && password === passwordConf)
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p> {/* UI feedback */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
            {/* "Sign up" is disabled if the form is not valid */}
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  )
}

export default SignupForm
