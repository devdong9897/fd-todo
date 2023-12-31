import React from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase";

const Header = ({
  fbName,
  fbEmail,
  fbUid,
  setFBName,
  setFBEmail,
  setFBUid,
}) => {
  const navigator = useNavigate();
  //fb 로그아웃
  const handleLogout = () => {
    firebase.auth().signOut();
    console.log("로그아웃");
    setFBName("");
    setFBEmail("");
    setFBUid("");
    navigator("");
  };
  return (
    <header>
      <div className="p-7 bg-lime-700">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white hover:text-lime-300">
            로고
          </Link>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link to="/home" className="text-white hover:text-lime-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-lime-300">
                About
              </Link>
            </li>
            <li>
              <Link to={ fbUid ? "/todo" : "/login"} className="text-white hover:text-lime-300">
                Todo
              </Link>
            </li>
          </ul>
          <div className="flex justify-center gap-5">

            {fbUid ? ( <div className="text-white">
              {fbName} {fbEmail} {fbUid}
              <button onClick={handleLogout}>로그아웃</button>
              <Link to="/mypage">마이페이지</Link>
              
            </div>) : 
            
            (<>
            <Link to="/login" className="text-white hover:text-lime-300">
              Login
            </Link>
            <Link to="/signup" className="text-white hover:text-lime-300">
              Signup
            </Link>
            </>
            ) }

          
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
