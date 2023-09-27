import React from 'react'

const Signin = () => {
  return (
    <div className='flex justify-center mt-10'>
   <form className='border w-4/12 flex flex-col justify-center my-auto'>
   <h1 className='text-center text-2xl'>Welcome</h1>
   <p></p>
   <div>
    <input className='m-3 border p-2' type='text' placeholder='Email'/>
    <br/>
    <input className='m-3 border p-2' type='password' placeholder='Password'/>
    <br/>
    <button type='submit'  className='m-3 border p-2'>Sign In</button>
   </div>
   </form>
   
    </div>
  )
}

export default Signin
