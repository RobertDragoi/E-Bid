import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auction from "../Auction/Auction";
import {
  addAuctionOperation,
  getAuctionsOperation,
} from "../../state/operations/auctionOperations";
import "./Auctions.scss";
const Auctions = () => {
  useEffect(() => {
    dispatch(getAuctionsOperation());
  }, []);
  const [show, setShow] = useState(false);
  const [auction, setAuction] = useState({
    title: "",
    description: "",
    startPrice: "",
  });
  const { title, description, startPrice } = auction;
  const { auctions } = useSelector((state) => state.auction);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setAuction({ ...auction, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addAuctionOperation(auction));
    dispatch(getAuctionsOperation());
    setAuction({
      title: "",
      description: "",
      startPrice: "",
    });
    setShow(false);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <button className="auctions-button" onClick={() => setShow(!show)}>
            Place an auction
          </button>
          {show && (
            <form onSubmit={onSubmit} className="auctions-form">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label className="control-label" htmlFor="name">
                    Title<span className="text-primary">*</span>:
                  </label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    required
                    placeholder="Title"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label" htmlFor="email">
                    Description<span className="text-primary">*</span>:
                  </label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="description"
                    value={description}
                    required
                    placeholder="Description"
                  />
                </div>
              </div>

              <div className="form-group col-md-12">
                <label className="control-label" htmlFor="Address">
                  Start price:
                </label>
                <div>
                  <input
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    name="startPrice"
                    value={startPrice}
                    placeholder="Start price"
                  />
                </div>
              </div>
              <div className="pt-2">
                <input
                  type="submit"
                  value="Start auction"
                  className="auctions-button"
                />
              </div>
            </form>
          )}
          {auctions?.map((auction) => (
            <Auction
              key={`auction_${auction._id}`}
              id={auction._id}
              startPrice={auction.startPrice}
              prices={auction.prices}
              title={auction.title}
              participation={auction.participation}
              date={auction.date}
            />
          ))}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Auctions;
