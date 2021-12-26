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
      <div className="landing-background-container">
        {" "}
        <img width="600" height="507" src="./images/landing.jpg"></img>
      </div>
      <div className="landing-background-container">
        {" "}
        <h1 className="landing-background-title">
          You want to start participating in auctions?
        </h1>
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
    </div>
  );
};

export default LandingPage;
