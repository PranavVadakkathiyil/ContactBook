import React from 'react'
import PrimaryCard from '../components/PrimaryCard'
import { IoMdAdd } from "react-icons/io";
import Search from '../components/Search';

const Home = () => {
  return (
    <div className='px-4 sm:px-[5vw]'>
      <Search/>
      <button className='flex items-center  border rounded-md px-4 py-2 mt-3 gap-2'>
      <IoMdAdd className='text-[1.5rem]'/>
      <p className='text-[1.1rem]'>Add Info</p>
      </button>
      <div className=' py-3 grid grid-cols-1 sm:grid-cols-4 gap-2'>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
    </div>
    </div>
  )
}

export default Home