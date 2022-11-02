import React from "react";
import Nav from './Nav';
import Store from './Store';
import Services from "./Services";
import About from "./About";
import {Routes, Route} from "react-router-dom"


function Rout() {
  return (
    <>
        <Nav />
      <Routes>
        <Route path="/Store" element={<Store />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default Rout;
