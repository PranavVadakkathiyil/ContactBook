import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center justify-center  rounded  px-5 py-2 w-full  my-3">
      <div className="border  px-9 flex items-center gap-7 rounded-md ">
      <input type="text" placeholder="Enter Number" className="outline-none  py-2 " />
      <CiSearch className="text-3xl  cursor-pointer  " />
      </div>
    </div>
  );
};

export default Search;
