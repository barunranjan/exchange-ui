import "./assets/scss/style.css";

import App from "./app/App";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import setupAxios from "./utils/setupAxios";

const { PUBLIC_URL } = process.env;

setupAxios(axios);

ReactDOM.render(
  // <HashRouter>

  //   <Switch>
  //     {indexRoutes.map((prop, key) => {
  //       return <Route path={prop.path} key={key} component={prop.component} />;
  //     })}
  //   </Switch>

  // </HashRouter>
  <App basename={PUBLIC_URL} />,
  document.getElementById("root")
);
