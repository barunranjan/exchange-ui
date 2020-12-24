import Loader from "react-loader-spinner";
import React from "react";

const AppLoader = (props) => {
  return (
    <Loader
      type="Puff"
      color="#007bff"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default AppLoader;
