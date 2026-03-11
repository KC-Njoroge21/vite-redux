import React from 'react'

const Login = () => {
  return (
    <section className='flex flex-col gap-5 justify-center items-center h-screen'>
      
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-semibold'>Welcome Back</h1>
          <h4>Sign in to continue shopping</h4>
        </div>

        <form className='w-1/3 min-w-75 shadow-lg rounded-lg h-fit p-6 mx-auto flex flex-col gap-5' action="">
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor="Email">Email Adress</label>
            <input className='bg-gray-200 p-2 focus:border focus:border-gray-900 focus:outline-gray-300 focus:outline-4 rounded-lg transition-normal ease-in-out duration-300' type="text" placeholder='you@example.com' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor="Password">Password</label>
            <input className='bg-gray-200 p-2 focus:border focus:border-gray-900 focus:outline-gray-300 focus:outline-4 rounded-lg transition-all ease-in-out duration-300' type="text" placeholder='Enter your password' />
          </div>
          
          <div className='flex gap-3 '>
            <input type="checkbox" />
            <label htmlFor="checkbox">Remember me for 30 days</label>
          </div>

          <button className='bg-black text-white p-2 rounded-lg font-semibold cursor-pointer'>
            Sign In
          </button>

          <div className='flex justify-center'>
            ---- <h4>Or continue with</h4> ----
          </div>

          <div className='flex justify-center gap-5'>
            <button className='p-2 border border-gray-300 rounded-lg cursor-pointer'>Google</button>
            <button className='p-2 border border-gray-300 rounded-lg cursor-pointer'>Apple</button>
          </div>

          <div className='flex justify-center'>
            <h4>Don't have an account? <span className='font-semibold hover:underline cursor-pointer'>Sign up for free</span></h4>
          </div>
        </form>
      
    </section>
  )
}

export default Login