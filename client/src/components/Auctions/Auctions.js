import React from "react";
import Auction from "../Auction/Auction";
import "./Auctions.scss";
const Auctions = () => {
  return (
    <div class="container mt-3">
      <div class="row">
        <div className="col-2"></div>
        <div className="col-8">
          <button
            className="auctions-button"
            onClick={() => console.log("button")}
          >
            Place an auction
          </button>
          <Auction id={"2000"} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Auctions;
