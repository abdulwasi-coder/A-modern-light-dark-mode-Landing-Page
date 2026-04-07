import logo from '../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'


const header = () => {
  const navigation = useNavigate()
  return (
    <header className="text-slate-60 bg-linear-to-br from-emerald-300 via-teal-300 to-cyan-300 dark:bg-linear-to-l dark:from-slate-500 bg dark:via-slate-700 dark:to-slate-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center dark:text-slate-300 text-gray-900 mb-4 md:mb-0">
          <img className="w-10 h-10 hover:scale-105 outline-none rx-50 text-white rounded-full overflow-hidden" src={logo} alt="AWS Logo" stroke="currentColor" viewBox="-20 -20 140 140" />
          <span className="ml-3  dark:text-slate-200 hover:scale-105 text-xl">Logo</span>
        </a>
        <nav aria-label='Main Navigation' className="md:ml-auto  flex flex-wrap dark:text-gray-400 items-center text-base justify-center">

          <ul className='flex gap-1.5 text-sm sm:text-[15px] dark:text-slate-300 text-slate-700'>
            <li className="mr-5 cursor-pointer hover:scale-105 hover:text-gray-900"><NavLink to="/">Home</NavLink></li>
            <li className="sm:mr-5  cursor-pointer mr-2.5 hover:scale-105 hover:text-gray-900"><NavLink to='/about us'>About Us</NavLink></li>
            <li className="mr-5 cursor-pointer hover:scale-105 hover:text-gray-900"><NavLink to='/'>Services</NavLink></li>
            <li className="mr-5 cursor-pointer hover:scale-105 hover:text-gray-900"><NavLink to='/'>Contact</NavLink></li>
          </ul>
        </nav>
        <button aria-label='a button for signing up' className="inline-flex border border-white/60 hover:animate-none hover:scale-105 items-center font-semibold  bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 dark:text-gray-200 cursor-pointer  py-1.5 px-3 focus:outline-none hover:bg-indigo-700 text-white rounded text-base mt-4 md:mt-0" onClick={() => navigation('/signup')}>Sign Up
          <svg fill="none" stroke="currentColor" stroke-width="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default header