import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Vehicles from "./pages/vehicles";
import Detail from "./pages/detail";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/vehicles/" component={Vehicles} />
        <Route exact path="/vehicles/detail/:idv" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
