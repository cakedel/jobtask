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
    pass: "",
  });
  const onChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setInput({
      email: "",
      pass: "",
    });
  };

  return (
    <section className="login section">
      <h2>Welcome to KakaoTalk</h2>
      <p>
        If you have a Kakao Account,
        <br /> log in with your email or phone number.
      </p>
      <div className="inputBox">
        <StyledInput
          name="email"
          placeholder="Email or phone number"
          value={input}
          onChange={onChange}
          onClick={onReset}
        />
        <StyledInput
          name="pass"
          placeholder="Password"
          value={input}
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
