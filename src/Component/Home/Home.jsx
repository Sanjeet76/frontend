import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="width:100%;position:relative;z-index:10;font-weight:600 ">
         
            <div className="  px-60 mt-10 flex justify-between items-center  desktop:items-stretch">
              
                <div className=" text-white font-bold text-lg  ">
                    <a href="/"> <img
                        src="https://storage.123fakturere.no/public/icons/diamond.png"
                        alt="logo"
                        className="h-8 w-4/5 mt-2 hidden bg-transparent desktop:block"
                    /></a>
                </div>


                <ul className="hidden desktop:flex  text-nowrap space-x-4 ml-40">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300  text-[15px] font-bold">Home</a>
                    </li>
                    <li>
                        <a href="/order" className="text-white hover:text-gray-300 text-[15px] font-bold ">Order</a>
                    </li>
                    <li>
                        <a href="/customers" className="text-white hover:text-gray-300 text-[15px] font-bold ">Our Customers</a>
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:text-gray-300 text-[15px] font-bold ">About Us</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-300 text-[15px] font-bold ">Contact Us</a>
                    </li>
                </ul>
              
                <div className="  hidden desktop:block float-end font-bold text-white flex   px-1 space-x-2  items-center ">
                    <div className="center language-text inline text-[15px] font-bold inline">English</div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDTHz-w__ahIBHDztPMpT2aEcFB3R5hP6wm9Rf7thYg&s"
                        alt="British Flag"
                        className="w-6 h-4 ml-1 inline"
                    />
                </div>
            

             
            </div>
            
            <div className="desktop:hidden  float-end p-2 flex font-bold text-white  mt-5 mr-10 space-x-2  items-center ">
                    <div className="center language-text text-[15px] font-bold inline">English</div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDTHz-w__ahIBHDztPMpT2aEcFB3R5hP6wm9Rf7thYg&s"
                        alt="British Flag"
                        className="w-6 h-4 ml-1 inline "
                    />
                </div>

            
            <div className="desktop:hidden inline  ">
               
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={handleToggleMenu}
                    className='relative  focus:outline-none  '
                >
                    <MenuIcon className=' text-white ml-20 mt-5  ' />
                </IconButton>

                {menuOpen && (
                    <div className="flex flex-col mt-2 ml-5 space-y-2 w-1/3 p-3 bg-white border  shadow-md ">
                        <a href="/" className=" mb-2 p-3 font-bold ">Home</a>
                        <a href="/order" className="mb-2 p-3 font-bold ">Order</a>
                        <a href="/customers" className="mb-2 p-3 font-bold ">Our Customers</a>
                        <a href="/about" className="mb-2 p-3 font-bold ">About Us</a>
                        <a href="/contact" className="mb-2 p-3 font-bold ">Contact Us</a>
                    </div>
                )}
             
            </div>
            
        </nav>
    );
};

export default Home;
