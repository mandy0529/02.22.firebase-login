import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { auth } from "../firebase";
import { logOut } from "../redux/actions/modalAction";
import { setLogout } from "../redux/actions/userAction";

function Home() {
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      const user = await signOut(auth);
      console.log(user, "user");
      dispatch(logOut(true, "로그아웃 되었습니다."));
      dispatch(setLogout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <h1>welcome " {userName.slice(0, -10)} "</h1>{" "}
      <button onClick={handleLogOut}>logout</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  button {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    background: tomato;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s linear;
    border: 3px solid transparent;
    &:hover {
      border: 3px solid tomato;
      background: transparent;
      color: tomato;
    }
  }
`;
export default Home;
