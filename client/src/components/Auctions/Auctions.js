import React from "react";
import Auction from "../Auction/Auction";
const Auctions = () => {
  return (
    <div class="container">
      <div class="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Auction />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Auctions;
