import React, { useState } from "react";
import Auction from "../Auction/Auction";
import "./Auctions.scss";
const Auctions = () => {
  const [show, setShow] = useState(false);
  const [auction, setAuction] = useState({
    title: "",
    description: "",
    buynowPrice: "",
  });
  const { title, description, buynowPrice } = auction;

  const onChange = (e) => {
    setAuction({ ...auction, [e.tager.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div class="container mt-3">
      <div class="row">
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
                    name="email"
                    value={description}
                    required
                    placeholder="Description"
                  />
                </div>
              </div>

              <div className="form-group col-md-12">
                <label className="control-label" htmlFor="Address">
                  Buy now price:
                </label>
                <div>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="address"
                    value={buynowPrice}
                    placeholder="Buy now price"
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
          <Auction id={"2000"} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Auctions;
