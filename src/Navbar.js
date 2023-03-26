import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="hero">
      <nav className="nav">
        <Link to="/" className="logo">
          TODO
        </Link>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/todos" className="nav-item">
              Todos
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/new-todo" className="nav-item">
              New Todo
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/signup" className="nav-item">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
