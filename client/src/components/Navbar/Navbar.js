import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="container">
      <div className="container-left">
        <div className="item">
          <NavLink className="link" to="/register">
            Register
          </NavLink>
        </div>
        <div className="item">
          <NavLink className="link" to="/">
            Login
          </NavLink>
        </div>
      </div>

      <div className="container-right">
        <div>
          <div className="item">
            <NavLink className="link" to="/">
              Auctions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
