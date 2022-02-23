import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import {
  notAvailableModal,
  sucessSignup,
} from "../redux/actions/modalAction";

function SignUp() {
  const [email, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const createSignUp = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        sucessSignup(
          true,
          "계정이 가입되었습니다. 생성한 계정으로 로그인해주세요 🙇"
        )
      );
      setId("");
      setPassword("");
    } catch (error) {
    
      dispatch(
        notAvailableModal(
          true,
          "아이디 형식이나 비밀번호 최소 숫자가 입력이 되지 않았습니다. 다시 입력해주세요"
        )
      );
    }
  };

  return (
    <Wrapper>
      <h1>sign up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">e-mail : </label>
          <input
            placeholder="올바른 형식의 이메일을 작성해주세요"
            data-type="email"
            onChange={(e) => setId(e.target.value)}
            type="text"
            name="email"
            value={email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            placeholder="6글자 이상의 password 를 작성해주세요"
            onChange={(e) => setPassword(e.target.value)}
            data-type="password"
            type="password"
            value={password}
            name="password"
            required
          />
        </div>
        <input className="submit-btn" type="submit" value="sign-up" />
      </form>
      <Link to="/">go to login</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  form {
    input {
      width: 20%;
    }
    div {
      margin: 1rem;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .submit-btn {
      width: 10%;
      background: teal;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      border: 3px solid transparent;
      margin: 1rem 0 3rem 0;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        background: transparent;
        border: 3px solid teal;
        color: teal;
        transform: scale(0.98);
      }
    }
  }
  a {
    background: blue;
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
      border: 3px solid blue;
      color: blue;
      transform: scale(0.98);
    }
  }
`;

export default SignUp;
