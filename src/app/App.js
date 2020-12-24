import AppLoader from "../components/AppLoader";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Routes from "../routes/Routes";

const App = ({ basename }) => {
  return (
    <>
      <React.Suspense fallback={<AppLoader />}>
        <BrowserRouter basename={basename}>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </>
  );
};

export default App;
