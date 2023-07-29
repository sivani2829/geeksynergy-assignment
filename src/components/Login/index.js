import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import './index.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('users_data'))
    if (userData && userData.email === email && userData.password === password) {
    <Navigate to='/home'/>
    } else {
      setErrorMessage('Invalid Credentials')
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
   
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button  onClick={handleLogin}><a href='/home' className="login-btn">Login</a></button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  )
}

export default Login
