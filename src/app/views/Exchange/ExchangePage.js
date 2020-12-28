import { Redirect, Route, Switch } from "react-router-dom";

// import ApiCreatePage from "./ApiCreate/ApiCreatePage";
import ExchangeListPage from "./exchangeList/ExchangeListPage";
import React from "react";
import ExchangeCreatePage from "./exchangeCreate/ExchangeCreatePage";
import ExchangeEdit from "./exchangeEdit/ExchangeEdit";

const ExchangePage = () => {
  return (
    <Switch>
      <Route path="/exchange/edit/:id" component={ExchangeEdit} />
      <Route path="/exchange/new" component={ExchangeCreatePage} />
      <Route path="/exchange" component={ExchangeListPage} />
      <Redirect exact from="/" to="/apis" />
    </Switch>
  );
};

export default ExchangePage;
