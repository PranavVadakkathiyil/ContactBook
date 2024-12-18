import React, { useState } from 'react'

const Form = () => {
  //const [Data, setData] = useState({
  //  name:'',
  //  email:'',
  //  phone:'',
  //  address:''
  //})
  //const formHandler = (e)=>{
  //  const {name,value}=e.target
  //  setData((prevData) => ({
  //    ...prevData,  // Preserve the previous form data
  //    [name]: value,  // Dynamically update the field that was changed
  //  }));
  //}
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [address, setaddress] = useState('')
  const FormDataHandler = async(e)=>{
    e.preventDefault()
    console.log(name,email,phone,address)
  }
  return (
    <>
      
      <form onSubmit={FormDataHandler} action="" className='border flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black p-10 shadow-md'>
      <p className='text-center  text-[1.4rem]'>Edit Contact</p>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={(e)=>setname(e.target.value)} value={name} className=' w-full outline-none border border-gray-800 px-5 py-2' type="text" name='name'  placeholder='Name' required  />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input onChange={(e)=>setemail(e.target.value)} value={email} className='w-full outline-none border border-gray-800 px-5 py-2' type="email" name='email'  placeholder='Email' required  />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input onChange={(e)=>setphone(e.target.value)} value={phone} className='w-full outline-none border border-gray-800 px-5 py-2' type="Number"  placeholder='Phone' name='phone'   required />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input onChange={(e)=>setaddress(e.target.value)} value={address} className='w-full outline-none border border-gray-800 px-5 py-2' type="text" placeholder='Address' name='address'  required />
        </div>
        <div>
          <button type='submit' className='border px-6 py-2 hover:bg-gray-600 rounded'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form