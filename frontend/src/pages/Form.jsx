import React, { useState } from 'react'

const Form = () => {
  const [Data, setData] = useState({
    name:'',
    email:'',
    phone:'',
    address:''
  })
  const formHandler = (e)=>{
    const {name,value}=e.target
    setData((prevData) => ({
      ...prevData,  // Preserve the previous form data
      [name]: value,  // Dynamically update the field that was changed
    }));
  }

  return (
    <div className='h-[90vh] flex justify-center items-center'>
      
      <form action="" className='border '>
      <p className='text-center'>Add Contact</p>
        <div >
          <label htmlFor="">Name</label>
          <input className=' w-full outline-none border border-gray-300 text-[18px]' type="text" name='name' value={Data.name} placeholder='Name' required onChange={formHandler} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input className='w-full outline-none ' type="email" name='email' value={Data.email} placeholder='Email' required onChange={formHandler} />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input className='w-full outline-none ' type="Number"  placeholder='Phone' name='phone' value={Data.phone}  required onChange={formHandler} />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input className='w-full outline-none ' type="text" placeholder='Address' name='address' value={Data.address} required onChange={formHandler} />
        </div>
      </form>
    </div>
  )
}

export default Form