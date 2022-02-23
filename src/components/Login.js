import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { modalControl } from "../redux/actions/modalAction";
import { setLogin } from "../redux/actions/userAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setLogin(login.user.email));
      dispatch(modalControl(true, "로그인 되었습니다 🙍"));
      setEmail("");
      setPassword("");
    } catch (error) {
      setEmail("");
      setPassword("");
      dispatch(modalControl(true,'아이디나 비밀번호가 존재하지 않거나 틀렸습니다.'))
    }
  };

  return (
    <Wrapper>
      <h1>Log in</h1>
      <form data-type="" onSubmit={handleLogin}>
        <div>
          <div>
            <label htmlFor="id">Id : </label>
            <input
              placeholder="id 를 입력해주세요"
              type="text"
              name="id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password 를 입력해주세요"
              type="password"
              name="password"
              value={password}
              required
            />
          </div>
        </div>

        <input className="submit-btn" type="submit" value="login" />
      </form>
      <div className="bottom">
        <span>계정이 아직 없으신가요 ? </span>
        <Link to="/sign-up">sign up</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  form {
    display: flex;
    justify-content: center;
    div {
      margin: 1rem;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .submit-btn {
      width: 10%;
      background: tomato;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      border: 3px solid transparent;
      margin: 1rem 0 3rem 0;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        background: transparent;
        border: 3px solid tomato;
        color: tomato;
        transform: scale(0.98);
      }
    }
  }
  a {
    background: teal;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    border: 3px solid transparent;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s linear;
    &:hover {
      background: transparent;
      border: 3px solid teal;
      color: teal;
      transform: scale(0.98);
    }
  }
  .bottom {
    margin-top: 3rem;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export default Login;
