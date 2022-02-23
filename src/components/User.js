import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import Login from "./Login";

function User() {
  const { userName } = useSelector((state) => state.user);

  console.log(userName, "user name");
  return <div>{userName === ""||userName===undefined  ? <Login />:<Home />}</div>;
}

export default User;
