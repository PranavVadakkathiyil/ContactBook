import React from "react";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const PrimaryCard = ({ _id, Name, image, Email, Phone, Address }) => {
  return (
    <Link
      to={`/details/${_id}`}
      className="flex items-center gap-5 border rounded-md shadow-md"
    >
      <div className="border w-[50px] h-[50px] m-4 rounded-full">
        {image ? (
          <img src={image} alt="image" />
        ) : (
          <IoMdContact className="w-full h-full " />
        )}
      </div>
      <div>
        <p>{Name}</p>
        <p>{Email}</p>
        <p>{Phone}</p>
        <p >{Address}</p>
      </div>
    </Link>
  );
};

export default PrimaryCard;
