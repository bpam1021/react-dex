import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import PokeInfo from "../pages/PokeInfo";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/pokeInfo/:pokeName" component={PokeInfo} />
  </Switch>
);

export default Router;
