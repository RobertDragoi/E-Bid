import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logoutOperation } from "../../state/operations/userOperations";
import "./Navbar.scss";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        {isAuthenticated ? (
          <>
            <div className="navbar-item">
              <NavLink className="navbar-link" to="/profile">
                {user?.name}
              </NavLink>
            </div>
            <div className="navbar-item">
              <button
                onClick={() => dispatch(logoutOperation)}
                className="navbar-button"
              >
                <FontAwesomeIcon color="white" icon={faSignOutAlt} />
              </button>
            </div>
          </>
        ) : (
          <div className="navbar-item">
            <NavLink className="navbar-link" to="/register">
              Register
            </NavLink>
          </div>
        )}
      </div>

      <div className="navbar-container-right">
        <div>
          <div className="navbar-item">
            <NavLink className="navbar-link" to="/auctions">
              Auctions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
