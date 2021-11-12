import React from "react";
import "./Auction.scss";
const Auction = () => {
  return (
    <div className="auction-container">
      <div className="auction-container-image">
        <img src="./images/image.jpg"></img>
      </div>
      <div className="auction-container-text">
        <div className="auction-container-text-upper">
          <div>Audi A4 2.0 TDI 2017</div>
          <div>9000$</div>
        </div>
        <div className="auction-container-text-bottom">
          <div>19.10.2021</div>
          <div>You are leading</div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
