import React, {useState} from 'react'
import { Navigate,Link} from 'react-router-dom';

import './index.css'

const Signup = () => {

const initialState = { name: '', password: '', email: '', phone: '', profession: '' }
const [state,setState]=useState(initialState)
const [error, setError] = useState(null);


const handleOnChange = (e) => {
    setState(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    try {
      localStorage.setItem('users_data', JSON.stringify(state));
  
      <Navigate to='/login'/>
    } catch (error) {
      setError(error.message)
    }
  }

  const onReset = () => {
    setState(initialState);
    setError(null);
  }


  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <div className="input-group">

        <label className="" htmlFor="name">Name</label>
          <input className="" type="text" name="name" id="name" value={state.name} onChange={handleOnChange} />
        
        </div>

        <div className="input-group">
        <label className="" htmlFor="password">Password</label>
          <input className="" type="password" name="password" id="password" value={state.password} onChange={handleOnChange} />
        
        </div>
        <div className="input-group">
        <label className="" htmlFor="email">Email</label>
          <input className="" type="text" name="email" id="email" value={state.email} onChange={handleOnChange} />
        
        </div>
        <div className="input-group">
        <label className="" htmlFor="phone">Phone</label>
          <input className="" type="text" name="phone" id="phone" value={state.phone} onChange={handleOnChange} />
        
        </div>
        <div className="input-group">
        <select className="input-group-1" name="profession" id="profession" onChange={handleOnChange}>
            <option value="student">Student</option>
            <option value="developer">FrontEnd Developer</option>
            <option value="full-stack">Full Stack Developer</option>
            <option value="be-developer">BackEnd Developer</option>
            <option value="self-employed">Self Employed</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button className="signup-btn" onClick={onSubmit}>SignUp</button>
        <button className="" onClick={onReset}>Reset</button>
      
      </form>
      <Link className='login' to={'/login'}>Login Instead?</Link>
    </div>
  )
}

export default Signup
