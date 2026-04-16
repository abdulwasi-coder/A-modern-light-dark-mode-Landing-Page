
import logo from '../assets/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className=" dark:text-slate-400 bg-linear-to-br from-emerald-300 via-teal-300 to-cyan-300 dark:bg-linear-to-l dark:from-slate-500 bg dark:via-slate-700 dark:to-slate-900 text-slate-400">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center dark:text-slate-200  text-gray-900">
                            <img src={logo} alt='AWK logo' className="w-15 h-15 stroke-2 fill-none text-white p-2 rounded-full" viewBox="0 0 24 24" />

                            <span className="ml-3 text-xl">Company Logo</span>
                        </a>
                        <p className="mt-2 text-sm text-slate-400">Write your motto here like quality is our choice or whatever you like.</p>
                    </div>
                    <div className="grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest dark:text-slate-200  text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <ul>
                                    <li>
                                    <a className=" hover:text-slate-500">First Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Second Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Third Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Fourth Link</a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm  dark:text-slate-200  mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                               <ul>
                                    <li>
                                    <a className=" hover:text-slate-500">First Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Second Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Third Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Fourth Link</a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm  dark:text-slate-200  mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <ul>
                                    <li>
                                    <a className=" hover:text-slate-500">First Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Second Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Third Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Fourth Link</a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 ">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm  dark:text-slate-200  mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <ul>
                                    <li>
                                    <a className=" hover:text-slate-500">First Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Second Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Third Link</a>
                                </li>
                                <li>
                                    <a className=" hover:text-slate-500">Fourth Link</a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="  bg-linear-to-br from-emerald-300 via-teal-300 to-cyan-300 dark:bg-linear-to-l dark:from-slate-500 bg dark:via-slate-700 dark:to-slate-900  dark:text-slate-300  text-slate-600">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className=" text-sm text-center sm:text-left  ">© 2025 Abdul Wasi Shirzai —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 dark:text-slate-400 ml-1" target="_blank">@abdul wasi-coder</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a>
                                <FaTwitter className="w-5 stroke-2 fill-current h-5 text-slate-800 hover:text-slate-900" />
                            </a>
                            <a className="ml-3 ">
                                <FaFacebookF className="w-5 stroke-2 fill-current h-5 text-slate-800 hover:text-slate-900"/>
                            </a>
                            <a className="ml-3 ">
                                <FaInstagram   className="w-5 h-5 text-slate-800 hover:text-slate-900"/>
                            </a>
                            <a className="ml-3">
                                <FaLinkedinIn className="w-5 h-5 stroke-2 fill-current text-slate-800 hover:text-slate-900"/>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer