import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
      <form action="">
        <input placeholder='Enter your name' />
        <input placeholder='Email' />
        <input placeholder='Password' />
        <button type='submit'>Submit</button>
        <Link to="/signin"></Link>
      </form>
    </div>
  );
}

export default SignUp
