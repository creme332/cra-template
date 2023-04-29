import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter
    // basename="/subdirectory/cra-template/build" // comment this line if your project is NOT served from a sub-directory
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
