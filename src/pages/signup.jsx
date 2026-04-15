import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const signup = () => {
    const navigation= useNavigate()
    const userref= useRef(null)
    const click = ()=>{
        userref.current.focus()
    }
    useEffect(()=>{
        click()
    })
    return (
        <section className='w-screen h-screen flex items-center  bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-200 dark:bg-linear-to-l dark:from-slate-400  dark:via-slate-600 dark:to-slate-900 justify-center fixed top-0 right-0 left-0 bottom-0 '>
            <form action="" className='dark:bg-slate-600 flex flex-col -md justify-center px-4 w-75 sm:w-90 h-113 rounded-2xl  bg-white gap-2 ' >
                <h1 className=' m-8 font-bold dark:text-slate-300 mx-auto text-center text-slate-900 text-[26px]'>Sign Up to Continue</h1>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='text-slate-700 font-semibold  dark:text-slate-400'>Email</label>
                    <input type="email" ref={userref} className=' px-1  py-2 rounded-xl border dark:focus:border-slate-400 border-slate-300 text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-amber-500/10 border-offset-2 outline-none ' placeholder='name@mail.com' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='text-slate-700 font-semibold dark:text-slate-400'>Password</label>
                    <input type="password" className=' px-1  py-2 rounded-xl border dark:focus:border-slate-400 border-slate-300 text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-amber-500/10 border-offset-2 outline-none ' placeholder='******' />
                    <label htmlFor="confirmation" className='text-slate-700 font-semibold dark:text-slate-400'>Confirm Password</label>
                    <input type="password" className='  px-1  py-2 rounded-xl border dark:focus:border-slate-400 border-slate-300 text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-amber-500/10 border-offset-2 outline-none ' placeholder='******' />

                </div>
                <button className='mx-auto border cursor-pointer dark:border-white/90 border-black/90 hover:scale-105 text-white bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 dark:text-gray-200 font-semibold py-3 m-1 px-10 text-base rounded-lg '>Sign Up</button>
                <span className='dark:text-slate-400'>have an account ?<span className='dark:text-slate-200/90 text-indigo-600  dark:hover:text-white font-semibold cursor-pointer'  onClick={()=> navigation('/login')}> Log In</span></span>
            </form>

        </section>
    )
}

export default signup