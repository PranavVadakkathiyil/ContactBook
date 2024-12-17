import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { DataContext } from "../context/DataContext";
import { IoMdContact } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const { Data } = useContext(DataContext);
  const { productId } = useParams();

  const [Dataset, setDataset] = useState(null);
  const featchData = async () => {
    const item = Data.find((item) => item._id === productId);
    setDataset(item);
  };

  useEffect(() => {
    featchData();
  }, [Data, productId]);

  return (
    <div className="px-4 sm:px-[5vw] py-4 ">
      <div className="sm:flex px-0 py-0 justify-center items-center w-full h-[80vh] border ">
        <div>
          {Dataset ? (
          <>
            <div className="">
              {Dataset.image ? (
                <img
                  src={Dataset.image}
                  alt="image"
                  className="w-[150px] h-[150px] mx-auto"
                />
              ) : (
                <IoMdContact className="w-[150px] h-[150px] mx-auto" />
              )}
            </div>
            <div className="text-center">
              <p>{Dataset.Name}</p>
              <p>{Dataset.Email}</p>
              <p>{Dataset.Phone}</p>
              <p>{Dataset.Address}</p>
            </div>
          </>
        ) : (
          <p>Loading</p>
        )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <Link to='/edit' className="flex items-center border px-4 py-2">
          <MdOutlineEdit />
          <p>Edit</p>
        </Link>
        <Link to="/">
          <button className="border float-right px-4 py-2">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
