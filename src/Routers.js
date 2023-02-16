import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import Enterprise from "./components/Enterprise";
import Teams from "./components/Teams";
import Individuals from "./components/Individuals";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/individuals" element={<Individuals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
