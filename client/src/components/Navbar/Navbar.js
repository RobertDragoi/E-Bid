import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.scss";
const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <div className="navbar-item">
          {isAuthenticated ? (
            <NavLink className="navbar-link" to="/register">
              {user?.name}
            </NavLink>
          ) : (
            <NavLink className="navbar-link" to="/register">
              Register
            </NavLink>
          )}
        </div>
      </div>

      <div className="navbar-container-right">
        <div>
          <div className="navbar-item">
            <NavLink className="navbar-link" to="/actions">
              Auctions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
