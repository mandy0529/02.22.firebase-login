import React from "react";
import styled from "styled-components";

function Modal() {
  return (
    <Wrapper>
      <span>modal</span>
      <button>확인</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  span {
    position: relative;
    border: 3px solid gold;
    padding: 4rem 10rem;
    font-size: 1.3rem;
    font-weight: bold;
    background: gold;
    border-radius: 10px;
  }
  button {
    position: absolute;
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
    margin-top: 15rem;
    padding:0.5rem 1.5rem;
    background:gold;
    border-radius:10px;
    cursor:pointer;
    transition:all 0.3s linear;
    &:hover {
        background:tomato;
        color:white;
    }
  }
`;
export default Modal;
