import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authStatusAtom, userAtom } from "../recoil/atoms/userAtoms";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authStatus = useRecoilValue(authStatusAtom);
  const userInfo = useRecoilValue(userAtom);
  const token = localStorage.getItem("authToken");

  return authStatus.isAuthenticated || token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
