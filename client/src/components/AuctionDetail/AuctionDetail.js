import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./AuctionDetail.scss";
const AuctionDetail = () => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  const [value, setValue] = useState();
  const { auctions } = useSelector((state) => state.auction);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const { id } = useParams();
  const auction = auctions.find((auction) => auction._id === id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-2" />
        <div className="col-8">
          <div className="auctiondetail-container">
            <h3>{auction.title}</h3>
            <div>{convertDate(auction.date)}</div>
            <div className="auctiondetail-container-description">
              {auction.description}
            </div>
            <div className="auctiondetail-container-list">
              <h3>List of bidders</h3>
              <div className="auctiondetail-container-list-item">
                <div>Andrei</div>
                <div>100$</div>
              </div>
              <div className="auctiondetail-container-list-item">
                <div>Oana</div>
                <div>120$</div>
              </div>
              <div className="auctiondetail-container-list-item">
                <div>Marian</div>
                <div>140$</div>
              </div>
              <div className="auctiondetail-container-list-item">
                <input type="text" value={value} onChange={onChange} />
                <button className="auctiondetail-button">Place bet</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2" />
      </div>
    </div>
  );
};

export default AuctionDetail;
