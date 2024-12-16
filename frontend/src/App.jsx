import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="">
    <NavBar/>
      <Routes >
      <Route path='/' element={<Login/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </div>
  );
};

export default App;
