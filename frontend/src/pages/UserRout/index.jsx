import React from "react";
import Navbar from "../../layout/navbar";
import { Outlet } from "react-router-dom";
import Header from "../../layout/header";

function UserRout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default UserRout;
