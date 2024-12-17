import React, { useContext, useEffect, useState } from "react";
import PrimaryCard from "../components/PrimaryCard";
import { IoMdAdd } from "react-icons/io";
import Search from "../components/Search";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
const Home = () => {
  
  const {Data,doSearch}=useContext(DataContext)
  const [first, setfirst] = useState(Data)
  useEffect(() => {
    const Filter = Data.filter((item)=>item.Name.toLowerCase().includes(doSearch.toLowerCase()))
  doSearch === '' ?  setfirst(Data) : setfirst(Filter)
  }, [doSearch])
  
  
  return (
    <div className="px-4 sm:px-[5vw]">
      <Search />
      <Link to='/add' >
      <button className="flex items-center  border rounded-md px-4 py-2 mt-3 gap-2">
        
        <IoMdAdd  className="text-[1.5rem]" />
        
        <p className="text-[1.1rem]">Add Info</p>
      </button>
      </Link>
      <div className=" py-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
        {first.map((item, key) => (
          <PrimaryCard
            key={key}
            _id={item._id}
            Name={item.Name}
            image={item.image}
            Email={item.Email}
            Phone={item.Phone}
            Address={item.Address}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
