import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "./LandingPage.scss";
const LandingPage = () => {
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/auctions");
    }
  });
  return (
    <div className="landing-background">
      <div className="landing-background-form">
        <div className="landing-background-title-container">
          <h3 className="landing-background-title">
            You want to start an auction? Here is the place to do it
          </h3>
          {isAuthenticated ? (
            <button
              onClick={() => history.push("/auctions")}
              className="landing-background-landing-button"
            >
              Auctions
            </button>
          ) : (
            <button
              onClick={() => history.push("/register")}
              className="landing-background-landing-button"
            >
              Register
            </button>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
