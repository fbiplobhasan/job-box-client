import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContex";

const UseAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default UseAuth;
