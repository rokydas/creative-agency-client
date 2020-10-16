import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteUser = ({ children, ...rest }) => {

  const email = JSON.parse(localStorage.getItem("email"));
  const photoURL = JSON.parse(localStorage.getItem("photoURL"));
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  return (
    <Route
      {...rest}
      render={({ location }) =>
        email && !isAdmin ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRouteUser;