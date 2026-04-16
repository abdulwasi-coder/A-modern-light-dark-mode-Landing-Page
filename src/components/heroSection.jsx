import { useNavigate } from 'react-router-dom'


const heroSection = () => {
    const navigation = useNavigate()

    return (
        <main className=" bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-200 dark:bg-linear-to-l dark:from-slate-400  dark:via-slate-600 dark:to-slate-900">
            <div className="container mx-auto flex px-5 pb-2 py-16 md:flex-row flex-col items-center">
                <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className=" bg-linear-to-l from-olive-600 via-amber-600 to-green-600 dark:bg-linear-to-r dark:from-indigo-500 dark:via-cyan-400 dark:to-green-600 font-bold bg-clip-text text-transparent  lg:text-3xl md:text-2xl text-3xl mb-4 ">Modern Web Solutions for your business</h1>
                    <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">I build functional, modern web application designed to work perfectly on any screen. My focus is on writing clean, maintainable React code and using Tailwind CSS to create fast-loading interfaces. Whether you need a custom landing page or a dynamic tool for your business, I deliver reliable digital solutions that are easy to use and scale.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex border border-white/60 text cursor-pointer hover:scale-105 font-semibold  dark:text-gray-200 text-white bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 py-2 px-6 focus:outline-none  rounded focus:ring-2  ring-offset-2 transition-colors text-lg" onClick={() => navigation('/signup')}>Sign up</button>
                        <button className="ml-4 inline-flex cursor-pointer border-white/60 hover:scale-105 font-semibold  dark:text-gray-200 text-white bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 border py-2 px-6 focus:outline-none  rounded focus:ring-2  ring-offset-2 transition-colors text-lg" onClick={() => navigation('/login')}>Login</button>
                    </div>
                </div>
                <picture className="lg:max-w-lg md:w-1/2 w-6/6">
                    <source media='(min-width: 768px)' srcSet='https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <img className="h-80 md:h-100 w-200 object-contain " loading='eager' fetchPriority='high' alt="hero image" src='https://images.unsplash.com/photo-1551434678-e076c223a692?q=40&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600&fm=webp.' />
                </picture>

            </div>
        </main>
    )
}

export default heroSection