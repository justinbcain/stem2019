import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Response from "../response/simple";
import Review from "../review/simple";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/response" component={Response} />
        <Route component={Review} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
