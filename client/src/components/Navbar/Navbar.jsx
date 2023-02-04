import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/searchIcon.svg";
import Avatar from "../Avatar/Avatar";

import "./Navbar.css";

const Navbar = () => {
  var User = null;
  // var User = "Ashu";
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={Logo} alt="logo" width="150px" />
        </Link>
        <Link to="/about" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/products" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/for-teams" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img
            src={SearchIcon}
            alt="SearchIcon"
            width="18px"
            className="searchIcon"
          />
        </form>
        {User === null ? (
          <Link to="auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Link to="/" className="avatar">
              <Avatar
                backgroundColor="blue"
                px="10px"
                py="10px"
                color="white"
                borderRadius="50%"
              >
                M
              </Avatar>
            </Link>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
