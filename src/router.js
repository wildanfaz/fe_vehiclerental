import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Vehicles from "./pages/vehicles";
import Detail from "./pages/detail";
import Location from "./pages/location";
import Type from "./pages/type";
import Admin from "./pages/admin";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/vehicles/" element={<Vehicles />} />
        <Route exact path="/vehicles/detail/:idv" element={<Detail />} />
        <Route
          exact
          path="/vehicles/location/:location"
          element={<Location />}
        />
        <Route exact path="/vehicles/type/:type" element={<Type />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
