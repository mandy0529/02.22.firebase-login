import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Wrapper>
      <h1>firebase login-logout</h1>
      <form>
        <label for="id">id : </label>
        <input type="text" name="id" required />
        <label for="password">password :</label>
        <input type="password" name="password" required />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Login;
