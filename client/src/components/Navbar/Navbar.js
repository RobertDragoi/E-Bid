import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  faSignOutAlt,
  faAlignJustify,
  faUserAlt,
  faUserPlus,
  faStamp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  logoutOperation,
  getUserOperation,
} from "../../state/operations/userOperations";
import "./Navbar.scss";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserOperation());
  }, []);
  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <div className="navbar-item-icon">
          <FontAwesomeIcon color="white" icon={faAlignJustify} />
        </div>
        {isAuthenticated ? (
          <div className="navbar-item-content">
            <div className="navbar-item-content-item">
              <NavLink className="navbar-link" to="/profile">
                <FontAwesomeIcon color="white" icon={faUserAlt} />
                {user?.name}
              </NavLink>
            </div>
            <div className="navbar-item-content-item">
              <NavLink className="navbar-link" to="/auctions">
                <FontAwesomeIcon color="white" icon={faStamp} />
                Auctions
              </NavLink>
            </div>
            <div
              className="navbar-item-content-item"
              onClick={() => dispatch(logoutOperation)}
            >
              <div className="navbar-link">
                <FontAwesomeIcon color="white" icon={faSignOutAlt} />
                Log out
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-item-content">
            <div className="navbar-item-content-item">
              <NavLink className="navbar-link" to="/register">
                <FontAwesomeIcon color="white" icon={faUserPlus} />
                Register
              </NavLink>
            </div>
            <div className="navbar-item-content-item">
              <NavLink className="navbar-link" to="/auctions">
                <FontAwesomeIcon color="white" icon={faStamp} />
                Auctions
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
