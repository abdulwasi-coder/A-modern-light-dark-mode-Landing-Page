import React from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
  const navigation= useNavigate()
  return (
    <section className='w-screen h-screen flex items-center bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-200 dark:bg-linear-to-l dark:from-slate-400  dark:via-slate-600 dark:to-slate-900 justify-center fixed top-0 right-0 left-0 bottom-0 '>
      <form action="" className='dark:bg-slate-600 flex flex-col justify-center px-4 w-75 sm:w-90 h-100 rounded-2xl  bg-white gap-2 ' >
        <h1 className=' m-8 mx-0 font-bold dark:text-slate-300 text-center text-slate-900 text-3xl'>Login to continue</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-slate-700 dark:text-slate-400  font-semibold '>Email</label>
        <input type="email" className='px-1  py-2 rounded-xl border border-slate-300 text-slate-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 border-offset-2 outline-none ' placeholder='name@mail.com' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='text-slate-700 dark:text-slate-400 font-semibold '>Password</label>
        <input type="password" className='  px-1  py-2 rounded-xl border border-slate-300 text-slate-400  focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 border-offset-2 outline-none ' placeholder='******' />
        <span className='dark:text-slate-200/90 text-indigo-600 dark:hover:text-white cursor-pointer'>Forget Password ?</span>
        </div>
        <button className='mx-auto cursor-pointer border dark:border-white/90 border-black/90 hover:scale-105 text-white bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 py-3 m-1 px-10 text-base rounded-lg bg-indigo-600 hover:bg-indigo-700 font-semibold  dark:hover:bg-indigo-700 dark:text-gray-200'>Login</button>
        <span className='dark:text-slate-400'>Don't have an account ?<span className='dark:text-slate-200/90 text-indigo-600 cursor-pointer dark:hover:text-white' onClick={()=> navigation('/signup')}> Sign Up</span></span>
      </form>

    </section>
  )
}

export default login