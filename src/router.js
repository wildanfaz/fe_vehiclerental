import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Vehicles from "./pages/vehicles";
import Detail from "./pages/detail";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/vehicles/" element={<Vehicles />} />
        <Route exact path="/vehicles/detail/:idv" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
