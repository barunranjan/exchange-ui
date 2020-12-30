import AppLoader from "../components/AppLoader";
import { BrowserRouter } from "react-router-dom";
import React, { Fragment } from "react";
import Routes from "../routes/Routes";

const App = ({ basename }) => {
  return (
    <div data-test="test-app">
      <React.Suspense data-test="test-cache-loading" fallback={<AppLoader />}>
        <BrowserRouter basename={basename}>
          <Routes data-test="test-routes" />
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
};

export default App;
