import Navbar from "./Components/Navbar";
import React from "react";
import {  Link, Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import Allcotes from "./Components/Allcotes";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Landingpage/>} />
        <Route path="/Allcotes" element={<Allcotes/>} />
      </Routes>
    </>
  );
}
