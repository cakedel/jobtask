import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledButton = styled.button`
  padding: 20px 100px;
  width: 100%;
  border: none;
  outline: none;
  color: #666;
  border-radius: 5px;
  background: #f9f9f9;
  cursor: pointer;
`;
// 전역 사용 styled.button 컴포넌트

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  text-align: left;
  color: #999;
  font-size: 20px;
`;
// 전역 사용 styled.input 컴포넌트

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // 입력되는 값을 관리하는 useState 생성

  const { email, password } = input;
 // email, password 비구조화 할당

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  // input tag의 값이 바뀔 때 input의 상태를 바꿔주는 onChange 함수 생성

  const onReset = () => {
    setInput({
      email: "",
      password: "",
    });
  };
  // input을 클릭 할 때 입력되는 값 input을 비우도록 설정.

  return (
    <section className="login section">
      <h2>Welcome to KakaoTalk</h2>
      <p>
        If you have a Kakao Account,
        <br /> log in with your email or phone number.
      </p>
      <div className="inputBox">
        <StyledInput
          type="text"
          name="email"
          placeholder="Email or phone number"
          value={email}
          onChange={onChange}
          onClick={onReset}
        />
        <StyledInput
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          onClick={onReset}
        />
      </div>
      <div className="button">
        <Link to="/main" onClick={(e) => e.preventDefault}>
          <StyledButton>Log In</StyledButton>
        </Link>
        <StyledButton>Sign Up</StyledButton>
      </div>
      <p>Find Kakao Account or Password</p>
    </section>
  );
};

export default Login;
