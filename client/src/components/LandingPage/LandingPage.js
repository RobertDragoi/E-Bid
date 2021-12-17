import React from "react";
import { useHistory } from "react-router";
import "./LandingPage.scss";
const LandingPage = () => {
  const history = useHistory();
  return (
    <div className="landing-background">
      <div className="landing-background-form">
        <div className="landing-background-title-container">
          <h3 className="landing-background-title">
            You want to start an auction? Here is the place to do it
          </h3>
          <button
            onClick={() => history.push("/auctions")}
            className="landing-background-landing-button"
          >
            Auctions
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
