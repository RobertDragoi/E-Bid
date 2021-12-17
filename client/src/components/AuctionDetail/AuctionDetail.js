import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  bidAuctionOperation,
  getAuctionOperation,
} from "../../state/operations/auctionOperations";
import "./AuctionDetail.scss";
const AuctionDetail = () => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log("sasa");
    dispatch(getAuctionOperation(id));
  }, []);
  const { auctionDetail } = useSelector((state) => state.auction);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(bidAuctionOperation({ id, price: value }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2" />
        <div className="col-8">
          <div className="auctiondetail-container">
            <h3>{auctionDetail?.title}</h3>
            <div>{convertDate(auctionDetail?.date)}</div>
            <div className="auctiondetail-container-description">
              {auctionDetail?.description}
            </div>
            <div className="auctiondetail-container-list">
              <h3>List of bidders</h3>
              {auctionDetail?.prices.length > 0 &&
                auctionDetail?.prices.map((price) => (
                  <div className="auctiondetail-container-list-item">
                    <div>{price.user.name}</div>
                    <div>{price.price}</div>
                  </div>
                ))}

              <div className="auctiondetail-container-list-item">
                <input
                  type="number"
                  min={
                    auctionDetail?.prices[auctionDetail?.prices.length - 1]
                      ?.price
                  }
                  value={value}
                  onChange={onChange}
                />
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="auctiondetail-button"
                >
                  Place bet
                </button>
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
