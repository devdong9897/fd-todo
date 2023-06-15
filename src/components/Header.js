import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="p-7 bg-lime-700">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white hover:text-lime-300">로고</Link>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link to="/home" className="text-white hover:text-lime-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-lime-300">About</Link>
            </li>
            <li>
              <Link to="/todo" className="text-white hover:text-lime-300">Todo</Link>
            </li>
          </ul>
          <div className="flex justify-center gap-5">
            <Link to="/login" className="text-white hover:text-lime-300">Login</Link>
            <Link to="/signup" className="text-white hover:text-lime-300">Signup</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
