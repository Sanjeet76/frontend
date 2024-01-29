import React, { useState } from 'react'

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };




    return (

        <>

            <nav className="bg-blue-700 ">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center desktop:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={handleToggleMenu}
                            >
                                <span className="absolute -inset-0.5" />
                                {menuOpen ? (
                                    <MenuOpenIcon className="block h-6 w-6" />
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch desktop:justify-start">
                            <div className="hidden desktop:ml-6 desktop:block mobile-display:none">
                                <div className="flex space-x-4">
                                    <img
                                        className="hidden desktop:block h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span className='text-sm text-center desktop:text-center text-white'>John Andre <br />Storfjord As </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`desktop:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">

                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <img
                            className="tablet:hidden h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=" user logo"
                        />
                        <span className='text-sm text-center tablet:text-center text-white'>John Andre <br />Storfjord As </span>
                    </div>
                </div>
            </nav>
             <div className={`desktop:flex ${menuOpen ? '' : 'hidden'}`} id="mobile-menu">
                <Sidebar />
            </div>
        </>
    )
}

export default Navbar
