import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import Pricedata from "./Pricedata";
import Navbar from "../../Navbar/Navbar";

const PriceList = () => {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="pt-5 w-full h-screen bg-white desktop:w-5/6 float-right">
        <div className="">
          <div className="box1">
            <div className="flex items-center border border-primary-100 rounded-full py-1 p-2  mb-2 desktop:w-80 ">
              <input type="text" placeholder='Search Article No...' style={{ outline: 'none', width: '100%' }} />
              <SearchOutlinedIcon style={{ color: '#00e5ff', marginLeft: "10px" }} />
            </div>

            <div className="flex items-center border border-primary-100 rounded-full py-1 p-2 w-full mb-2 desktop:w-80 ">
              <input type="text" placeholder='Search Product...' style={{ outline: 'none', width: '100%' }} />
              <SearchOutlinedIcon style={{ color: '#00e5ff', marginLeft: "10px" }} />
            </div>
          </div>

          <div className="box2 ">
            <div className="text-nowrap grid grid-cols-3 gap-3 ">
              <div>
              <button className="flex border border-primary-300 rounded-lg shadow-lg absolute shadow-indigo-500/40 py-2 p-2">
                New Product <AddCircleRoundedIcon style={{ color: '#00e676 ' }} className="flex ml-1" />
              </button>
              </div>

            <div>
              <button className="flex border border-primary-300 rounded-lg shadow-lg absolute shadow-indigo-500/40 py-2 p-2">
                Print List <LocalPrintshopRoundedIcon style={{ color: '#00e5ff' }} className="flex ml-1" />
              </button>
              </div>

              <div>
              <button className="flex border border-primary-300 rounded-lg shadow-lg absolute shadow-indigo-500/40 py-2 p-2">
                Advance Mode <ToggleOnRoundedIcon style={{ color: '#00e5ff' }} className="flex ml-1" />
              </button>
              </div>
            </div>
          </div>
          </div>


        <div className="pt-10">
          <Pricedata />
        </div>
      </div>
    </div>
    </>
  )
}

export default PriceList;
