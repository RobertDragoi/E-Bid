import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <div className="item">
          <NavLink className="link" to="/register">
            Register
          </NavLink>
        </div>
        <div className="item">
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </div>
      </div>

      <div className="navbar-container-right">
        <div>
          <div className="item">
            <NavLink className="link" to="/auctions">
              Auctions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
