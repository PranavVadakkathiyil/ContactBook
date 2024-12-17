import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { DataContext } from "../context/DataContext";
const Search = () => {
  
  
  const {Search,setdoSearch,doSearch}= useContext(DataContext)
  const handleSearch = (e)=>{
     setdoSearch(e.target.value)
  }
  
  return Search ? (
    <div className="flex items-center justify-center  rounded  px-5 py-2 w-full  my-3">
      <div className="border  px-9 flex items-center gap-7 rounded-md ">
      <input onChange={handleSearch} type="text" placeholder="Enter Name" className="outline-none  py-2  " />
      </div>
    </div>
  ):(
    <></>
  )
  
};

export default Search;
