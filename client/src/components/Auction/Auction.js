import React from "react";
import "./Auction.scss";
const Auction = () => {
  return (
    <div className="auction-container">
      <div className="auction-container-image"></div>
      <div className="auction-container-text">
        <div className="auction-container-text-upper">
          <div>Title</div>
          <div>Reached Price</div>
        </div>
        <div className="auction-container-text-bottom">
          <div>Start date</div>
          <div>Your participation</div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
