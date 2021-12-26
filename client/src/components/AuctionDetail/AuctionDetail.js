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
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auctionDetail, error } = useSelector((state) => state.auction);
  const [value, setValue] = useState(0);
  useEffect(() => {
    dispatch(getAuctionOperation(id));
  }, [id, dispatch]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(bidAuctionOperation({ id, price: value }));
    dispatch(getAuctionOperation(id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2" />
        <div className="col-8">
          <div className="auctiondetail-container">
            <div className="auctiondetail-container-title">
              <h3>{auctionDetail?.title}</h3>
              <p>
                {auctionDetail?.prices[auctionDetail?.prices.length - 1].price}{" "}
                $
              </p>
            </div>
            <div>{convertDate(auctionDetail?.date)}</div>
            <div className="auctiondetail-container-description">
              <h3>Description</h3>
              {auctionDetail?.description}
            </div>
            <div className="auctiondetail-container-list">
              <h3>List of bidders</h3>
              {auctionDetail?.prices.length > 0 &&
                auctionDetail?.prices.map((price) => (
                  <div className="auctiondetail-container-list-item">
                    <div>{price.user.name}</div>
                    <div>{price.price} $</div>
                  </div>
                ))}

              <div className="auctiondetail-container-list-bid">
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
              {error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-2" />
      </div>
    </div>
  );
};

export default AuctionDetail;
