import React from "react";

const Login = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center border">
      <form
        action=""
        className="flex-col justify-center items-center border px-5 py-6 rounded-sm shadow-sm"
      >
        <p className="text-center text-2xl ">Sign Up</p>
        <div className="mt-4">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            className="w-full px-4 py-2 outline-none border "
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            className="w-full px-4 py-2 outline-none border"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            className="w-full px-4 py-2 outline-none border"
          />
        </div>
        <label htmlFor="" className="float-right text-gray-300">Login Here</label>
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
