import { Redirect, Route, Switch } from "react-router-dom";

import ApiCreatePage from "./ApiCreate/ApiCreatePage";
import ApisListPage from "./ApisList/ApisListPage";
import React from "react";

const ApisPage = () => {
  return (
    <Switch>
      {
        /* Redirect from bookings root URL to /bookings */
        // <Redirect exact={true} from="/admin/course" to="/admin/course/list" />
      }
      <Route path="/apis/new" component={ApiCreatePage} />
      <Route path="/apis" component={ApisListPage} />
      <Redirect exact from="/" to="/apis" />
    </Switch>
  );
};

export default ApisPage;
