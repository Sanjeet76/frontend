import React, { useState } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BookIcon from '@mui/icons-material/Book';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DiscountIcon from '@mui/icons-material/Discount';
import CancelIcon from '@mui/icons-material/Cancel';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LogoutIcon from '@mui/icons-material/Logout';
import "./sidebar.css"



const Sidebar = ( ) => {

    const [menuOpen, setMenuOpen] = useState(false);



    const handleCloseMenu = () => {
        setMenuOpen(!menuOpen);


    };

    return (
        <div className=" sidebar bg-white p-4 shadow-lg absolute shadow-indigo-500/40 desktop:w-1/6  " id='sidebar'>


            <div className='text-xl text-center '>
                <span className='p-10 m-8 portrait:m-0 p-1'> Menu </span>
                <hr style={{ width: "100%", height: "3px", backgroundColor: "#00e5ff" }} />
            </div>
            <ul className='  p-1 ml-6 mt-4 cursor-pointer text-nowrap '>
                <li className='p-2' onClick={handleCloseMenu}>
                    <DescriptionIcon style={{ color: '#00e5ff' }} className="invoices" />
                    <span className='m-2  hidden desktop:inline tablet:inline'>Invoices</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <PersonIcon style={{ color: '#00e676' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Customer</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <SettingsOutlinedIcon style={{ color: '#00e5ff' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'> My Business</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <BookIcon style={{ color: '#00e5ff' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Invoice Journal</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <LocalOfferIcon style={{ color: '#b26a00' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Price List</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <DescriptionIcon style={{ color: '#00e5ff' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Multiple Invoicing</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <CancelIcon style={{ color: '#a31545' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Unpaid Invoicing</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <DiscountIcon style={{ color: '#ffeb3b' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Offer</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <InventoryIcon style={{ color: '#00e5ff' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Inventory Control</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <ContactMailIcon style={{ color: '#2a3eb1' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Member Invoicing</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <CloudUploadIcon style={{ color: '#8561c5' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Import/Export</span>
                </li>
                <li className='p-2' onClick={handleCloseMenu}>
                    <LogoutIcon style={{ color: '#00e5ff' }} className="icon" />
                    <span className='m-2 hidden desktop:inline tablet:inline'>Log Out</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
