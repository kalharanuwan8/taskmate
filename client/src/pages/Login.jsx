import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='flex flex-row'> 
            <div>
                <form className='flex flex-col items-center  w-300'>
                <input type="text" placeholder='email' className='w-80 h-10 rounded-xl bg-white mt-5 ml-5 pl-3 border-black '/>
                <input type="password" placeholder='password' className='w-80 h-10 rounded-xl bg-white mt-5 ml-5 pl-3 border-black '/>
                <button className ='text-blue-800 font-bold mt-2 ml-50   '>Forgot Password?</button>
                <button type='submit' className='w-80 h-10 rounded-xl bg-white mt-1 ml-5 pl-3 border-black '>Login</button>
                <div className='flex flex-row'> 
                    <p className='text-gray-500 mt-2 ml-5 pl-3'>Don't have an account?</p>
                    <button className='text-blue-600 font-bold mt-2 ml-2'>Sign Up</button>
                </div>
                </form>
            </div>
            <div>
                <img src = 'src/assets/TASKMATE.png' className="w-50 h-50 mt-5" />
            </div>
        </div>
    </div>
  )
}

export default Login