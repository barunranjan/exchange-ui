import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Fulllayout from "../layouts/fulllayout";

const MApisPage = lazy(() => import("../app/views/apis/ApisPage"));

const Routes = () => {
  console.log("ROUTES");
  return (
    <Switch>
        <Redirect exact from="/" to="/apis" />
        <Fulllayout>
          <Route path="/apis" component={MApisPage} />
        </Fulllayout>
    </Switch>
  );
};

export default Routes;
