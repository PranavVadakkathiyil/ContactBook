import React, { useState } from "react";

const Login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [currentState, setcurrentState] = useState('Login');

  const dataSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(name,email,password)

  };
  return (
    <div className="w-full h-[90vh] flex justify-center items-center border">
      <form
        onSubmit={dataSubmitHandler}
        action=""
        className="flex-col justify-center items-center border px-5 py-6 rounded-sm shadow-sm"
      >
        <p className="text-center text-2xl "> {currentState}</p>
        {
          currentState === 'Sign Up' ?
          (<div className="mt-4">
            <label htmlFor="">Name:</label>
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Name"
              required
              className="w-full px-4 py-2 outline-none border "
            />
          </div>)
          :
          null
        }
        
        
        
        <div className="mt-4">
          <label htmlFor="">Email:</label>
          <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
            required
            className="w-full px-4 py-2 outline-none border"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Password:</label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
            required
            className="w-full px-4 py-2 outline-none border"
          />
        </div>


        {
          currentState === 'Login' ? 
          (
            <label htmlFor="" className="float-right text-gray-300" onClick={()=>setcurrentState('Sign Up')}>
            Sign up
          </label>
          )
          :
          (
            <label htmlFor="" className="float-right text-gray-300" onClick={()=>setcurrentState('Login')}>
            Login
          </label>
          )
        }
       
        <div className="w-full flex justify-center">
          <button type="submit" className="px-4 py-2 border mt-4 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
