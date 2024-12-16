import React from "react";
import { MdOutlineEdit } from "react-icons/md";

import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <div className="px-4 sm:px-[5vw] py-4 ">
      <div className="sm:flex px-0 py-0 justify-center items-center w-full h-[80vh] border ">
        <div className="">
          <IoMdContact className="w-[150px] h-[150px] mx-auto" />
        </div>
        <div className="text-center">
          <p>Name : Pranav V</p>
          <p>Email : vpranav0801@gmail.com</p>
          <p>Phone : 9562840801</p>
          <p>Address : Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center border px-4 py-2">
          <MdOutlineEdit />
          <p>Edit</p>
        </div>
        <Link to="/">
          <button className="border float-right px-4 py-2">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
