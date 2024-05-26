// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ isLoggedIn, element: Element, ...rest }) {
  return isLoggedIn ? <Route {...rest} element={Element} /> : <Navigate to="/login" />;
}

export default PrivateRoute;
