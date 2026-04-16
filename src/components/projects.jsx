import { FaGithub } from "react-icons/fa6";
import { CgVercel } from "react-icons/cg";

const projects = () => {
    return (
        <section className=" text-slate-600 dark:text-slate-300 bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-200 dark:bg-linear-to-l dark:from-slate-400 bg dark:via-slate-600 dark:to-slate-900">
            <div className="container px-5 py-20 pt-10 mx-auto">
                <div className="mx-auto mb-20  text-slate-900 sm:text-3xl dark:text-slate-200 text-2xl font-medium text-center">
                    <h2 className=' md:px-15 md:text-3xl text-2xl '>Top Three Projects that clearly uses Tailwind and handle complex data</h2>
                </div>
                <ul className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <li className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
                        </div>
                        <h3 className="text-xl dark:text-slate-300 font-medium title-font text-gray-900 mt-5">Shooting Stars</h3>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <div className='flex items-center justify-center sm:justify-start gap-7 mt-5'>
                            <FaGithub className=' dark:text-slate-100 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 bg-linear-to-br from-emerald-600 via-teal-600 rounded-full to-cyan-600  cursor-pointer animate-bounce hover:text-slate-700 hover:scale-105 size-7' />
                        <span className='dark:text-slate-100 flex text-slate-800 items-center animate-bounce hover:text-slate-700 hover:scale-105 cursor-pointer'>Live Visual <CgVercel className='size-5'/></span>
                        </div>
                    </li>
                    <li className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
                        </div>
                        <h3 className="text-xl dark:text-slate-300 font-medium title-font text-gray-900 mt-5">The Catalyzer</h3>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <div className='flex items-center justify-center sm:justify-start gap-7 mt-5'>
                            <FaGithub className=' dark:text-slate-100 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 cursor-pointer bg-linear-to-br from-emerald-600 via-teal-600 rounded-full to-cyan-600  hover:text-slate-700 animate-bounce hover:scale-105 size-7' />
                        <span className='dark:text-slate-100 text-slate-800 flex items-center hover:text-slate-700 animate-bounce hover:scale-105 cursor-pointer'>Live Visual <CgVercel className='size-5 '/></span>
                        </div>
                    </li>
                    <li className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
                        </div>
                        <h3 className="text-xl dark:text-slate-300 font-medium title-font text-gray-900 mt-5">The 400 Blows</h3>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <div className='flex items-center justify-center sm:justify-start gap-7 mt-5'>
                            <FaGithub className=' dark:text-slate-100 dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 cursor-pointer hover:text-slate-700  bg-linear-to-br rounded-full from-emerald-600 via-teal-600 to-cyan-600  animate-bounce hover:scale-105 size-7' />
                        <span className='dark:text-slate-100 flex items-center text-slate-800 hover:text-slate-700 animate-bounce hover:scale-105 cursor-pointer'>Live Visual <CgVercel className='size-5'/></span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default projects