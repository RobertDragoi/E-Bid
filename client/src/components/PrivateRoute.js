import React, { createElement } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
const PrivateRoute = ({ component, ...rest }) => {
  const isLogged = Cookies.get("token") || null;
  console.log(isLogged);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? createElement(component, props) : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
