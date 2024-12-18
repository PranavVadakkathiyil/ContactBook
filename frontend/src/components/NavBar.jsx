import React, { useContext } from "react";
import { FaAddressBook } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const {Search,setSearch}=useContext(DataContext)
  return (
    <div className="flex justify-around py-4 border-b-2 ">
      <NavLink to='/home' className="flex items-center justify-center gap-3">
        <FaAddressBook className="text-3xl" />
        <p className="font-medium ">Data Book</p>
      </NavLink>
      <div className="flex items-center justify-center gap-4">
        <NavLink to='/home'>
          <CiSearch className="text-3xl" onClickCapture={()=>setSearch(prev=>!prev)}/>
        </NavLink>
        <div className="group relative ">
          <IoMdLogIn className="text-3xl"/>
          <div className="absolute hidden group-hover:block  right-0 ">
            <div className="flex flex-col gap-2 w-36  border bg-gray-300   text-black">
              <p className="cursor-pointer hover:bg-blue-500 p-2">LogOut</p>
              
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
