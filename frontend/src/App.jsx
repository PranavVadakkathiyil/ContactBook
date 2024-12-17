import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Form from "./pages/Form";

const App = () => {
  return (
    <div className="">
    <NavBar/>
      <Routes >
      <Route path='/' element={<Home/>}/>
        <Route path='/details/:productId' element={<Details/>}/>
        <Route path='/edit' element={<Form/>}/>
        <Route path='/add' element={<Form/>}/>
      </Routes>
    </div>
  );
};

export default App;
