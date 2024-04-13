import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='w-svw h-svh grid place-content-center'>
        <div className='flex flex-col w-screen max-w-96 gap-4 p-4 bg-white shadow-md'>
            <h1 className='text-2xl font-bold text-center'>Register</h1>
            <form className='flex flex-col gap-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='p-2' id='email' name='email' placeholder='Email' />
            <label htmlFor='password'>Password</label>
            <input type='password' className='p-2' id='password' name='password' placeholder='Password' />
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input type='password' className='p-2' id='confirm-password' name='confirm-password' placeholder='Confirm Password' />
            <button type='submit' className='bg-black hover:bg-black-hover transition text-white py-2'>Register</button>
            <p>Already have an account? <Link to={"/login"} className='underline italic ml-1 hover:text-black-hover transition'>Log in</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Register