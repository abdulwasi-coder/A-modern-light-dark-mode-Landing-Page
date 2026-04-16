import React from 'react'
import { MdOutlineShutterSpeed } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";

const features = () => {
  return (
    <section className="bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-200 dark:bg-linear-to-l dark:from-slate-400 bg dark:via-slate-600 dark:to-slate-900">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl dark:text-slate-200 text-2xl font-medium title-font text-center  mb-20">High-Performance Web Solutions Tailored to your business</h1>
        <div className="flex dark:text-slate-300 flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 pl-1 pr-0 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 justify-center rounded-full  bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600  dark:bg-slate-500 mb-4 shrink-0">

              <MdOutlineShutterSpeed className=' text-white  w-6 h-6' />

            </div>
            <div className="grow pl-6">
              <h2 className="dark:text-slate-300 text-slate-800 text-lg title-font font-medium mb-2">Lighting-Fast Performance</h2>
              <p className="leading-relaxed text-base">I optimize every line of code to ensure your site loads in under 2 seconds. Using React's efficient rendering and Tailwind's minimal CSS, I build high-speed experiences that keep your visitors from leaving.</p>
              <a className="mt-3 text-indigo-600 hover:text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2 stroke-2 fill-none" viewBox="0 0 24 24">
                  
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 pl-1 pr-0 flex">

            <div className="w-12 h-12 inline-flex items-center dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 justify-center rounded-full  bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600   mb-4 shrink-0">
              <SlScreenSmartphone className='text-white w-6 h-6' />
            </div>
            
            <div className="grow pl-6">
              <h2 className=" text-lg title-font dark:text-slate-300 text-slate-800 font-medium mb-2">Fully Responsive Design</h2>
              <p className="leading-relaxed text-base">Your website will look perfect on every device, from smarthphones to large desktops. I use a 'mobile-first' approach to ensure your users have a seamless experience no matter hpw they access your app.</p>
              <a className="mt-3 text-indigo-600 hover:text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 stroke-2 fill-none h-4 ml-2" viewBox="0 0 24 24">
                  
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 pl-1 pr-0 flex">
            <div className="w-12 h-12 inline-flex rounded-full items-center dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 justify-center bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600  mb-4 shrink-0">
              <FaCode className='text-white w-6 h-6 font-thin' />
            </div>
            <div className="grow pl-6">
              <h2 className="dark:text-slate-300 text-slate-800 text-lg title-font font-medium mb-2">Clean & Maintainable Code</h2>
              <p className="leading-relaxed text-base">I build using modular React components, making your project easy to update and scale. You get a professional, organized codebase that follows global industry standards and also with a stable lighthouse score.</p>
              <a className="mt-3 text-indigo-600 hover:text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2 stroke-2 fill-none" viewBox="0 0 24 24">

                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default features