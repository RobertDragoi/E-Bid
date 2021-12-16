import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { bidAuctionOperation } from "../../state/operations/auctionOperations";
import "./AuctionDetail.scss";
const AuctionDetail = () => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { auctions } = useSelector((state) => state.auction);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(bidAuctionOperation({ id, price: value }));
  };
  const { id } = useParams();
  const auction = auctions.find((auction) => auction._id === id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-2" />
        <div className="col-8">
          <div className="auctiondetail-container">
            <h3>{auction?.title}</h3>
            <div>{convertDate(auction?.date)}</div>
            <div className="auctiondetail-container-description">
              {auction?.description}
            </div>
            <div className="auctiondetail-container-list">
              <h3>List of bidders</h3>
              {auction.prices.length > 0 &&
                auction.prices.map((price) => (
                  <div className="auctiondetail-container-list-item">
                    <div>{price.user.name}</div>
                    <div>{price.price}</div>
                  </div>
                ))}

              <div className="auctiondetail-container-list-item">
                <form onSubmit={onSubmit}>
                  <input type="text" value={value} onChange={onChange} />
                  <input
                    type="submit"
                    value="Place bet"
                    className="auctiondetail-button"
                  />
                </form>
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
