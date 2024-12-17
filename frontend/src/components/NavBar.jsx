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
      <NavLink to='/' className="flex items-center justify-center gap-3">
        <FaAddressBook className="text-3xl" />
        <p className="font-medium ">Data Book</p>
      </NavLink>
      <div className="flex items-center justify-center gap-4">
        <NavLink to='/'>
          <CiSearch className="text-3xl" onClickCapture={()=>setSearch(prev=>!prev)}/>
        </NavLink>
        <div>
          <IoMdLogIn className="text-3xl"/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
