import React, { useState } from "react";
import { LoginDiv } from "../style/UserCss";
import { useNavigate } from "react-router";

const Login = () => {
  // Link, NavLink, useNaviage
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 로그인
  const handleLogin = e => {
    e.preventDefault();
    // Firebase 로그인시도
  };
  return (
    <div className="p-6 mt-5 shadow rounded-md bg-white">
      <h2>Login</h2>
      {/* 1. emotion을 활용하여 tag의 용도를 구분한다. 
        2. css도 함께 적용한다.
    */}
      <div className="signup">
        <LoginDiv>
          <form>
            <label htmlFor="">이메일</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="">비밀번호</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              minLength={8}
              maxLength={16}
            />
            <div className="flex justify-center gap-5 w-full">
              <button
                className="border rounded px-3 py-2 shadow"
                onClick={e => handleLogin(e)}
              >
                로그인
              </button>
              <button
                className="border rounded px-3 py-2 shadow"
                onClick={e => {
                  e.preventDefault();
                  navigate("/signup");
                }}
              >
                회원가입
              </button>
              <button className="border rounded px-3 py-2 shadow" onClick={e => {
                e.preventDefault();
                navigate("/signup");
              }}>

                비밀번호 찾기
              </button>
            </div>
          </form>
        </LoginDiv>
      </div>
    </div>
  );
};

export default Login;
