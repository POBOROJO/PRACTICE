import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../client';


const SignIn = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    console.log(formData)

    async function handleSubmit(e){
       e.preventDefault()
       try{
           const { data, error } = await supabase.auth.signUp({
               email: formData.email,
               password: formData.password,
               options: {
                   data: {
                       name: formData.fullname
                   }
               }
           })
           alert("Check your email for verification link")
       }
       catch(error){
           alert(error.message)
       }
    }

console.log(formData)
    function handleChange (e){
        setFormData((prevFormData)=>{
            return{
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
          <h1 style={{ textAlign: 'center' }}>Sign In</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw' }}>
            <form action="" style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
              <input 
                placeholder='Enter your name' 
                name='fullname' 
                onChange={handleChange}
              />
              <br /> <br />
              <input 
                placeholder='Email' 
                name='email' 
                onChange={handleChange}
              />
              <br /> <br />
              <input 
                placeholder='Password' 
                name='password' 
                type='password'
                onChange={handleChange}
              />
              <br /> <br />
              <button type='submit'>Submit</button>
              <br /> <br />
              {/* Add a link to SignUp page */}
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </form>
          </div>
        </>
      )
    }    

export default SignIn
