import React from "react";
import { FaAddressBook } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="flex justify-around py-4 border-b-2 ">
      <div className="flex items-center justify-center gap-3">
        <FaAddressBook className="text-3xl" />
        <p className="font-medium ">Data Book</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div>
          <CiSearch className="text-3xl"/>
        </div>
        <div>
          <IoMdLogIn className="text-3xl"/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
