import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <>
      <div>Log In Page</div>
      <Link to={"/Register"}>Register if you do not have an account!</Link>
    </>
  );
}
export default LogIn;
