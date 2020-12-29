import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Fulllayout from "../layouts/fulllayout";

const MApisPage = lazy(() => import("../app/views/apis/ApisPage"));
const MExchangePage = lazy(() => import("../app/views/Exchange/ExchangePage"));

const Routes = () => {
  console.log("ROUTES");
  return (
    <Switch>
      <Redirect exact from="/" to="/exchange" />
      <Fulllayout>
        {/* <Route path="/apis" component={MApisPage} /> */}
        <Route path="/exchange" component={MExchangePage} />
      </Fulllayout>
    </Switch>
  );
};

export default Routes;
