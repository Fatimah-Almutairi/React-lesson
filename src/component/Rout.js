import React from "react";
import Nav from './Nav';
import Store from './Store';
import Services from "./Services";
import Login from "./Login";
import Cards from "./Cards";
import About from "./About";
import Read from "./Read";
import Update from "./Update";
import {Routes, Route} from "react-router-dom"


function Rout() {
  return (
    <>
        <Nav />
      <Routes>
        <Route path="/" element={<Store />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Cards" element={<Cards />}></Route>
        <Route path="/Read" element ={<Read /> }></Route>
        <Route path="/Update" element ={<Update/>}></Route>
      </Routes>
    </>
  );
}

export default Rout;
