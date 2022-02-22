import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const { userName } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <h1>welcome " {userName.slice(0,-10)} "</h1> <Link to="/logout">logout</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    background: tomato;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
  }
`;
export default Home;
