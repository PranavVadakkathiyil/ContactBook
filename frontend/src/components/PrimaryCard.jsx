import React from 'react'
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';

const PrimaryCard = () => {
  return (
    <Link to={`/details`} className='flex items-center gap-5 border rounded-md shadow-md'>
        <div className='border w-[50px] h-[50px] m-4 rounded-full'>
        <IoMdContact className='w-full h-full '/>

        </div>
        <div>
            <p>Name : Pranav V</p>
            <p>email : vpranav0801@gmail.com</p>
            <p>Phone : 9562840801</p>
        </div>
        
    </Link>
  )
}

export default PrimaryCard