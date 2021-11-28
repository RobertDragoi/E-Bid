import React, { useState } from "react";
import "./AuctionDetail.scss";
const AuctionDetail = () => {
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div class="container">
      <div class="row">
        <div className="col-2" />
        <div className="col-8">
          <div className="auctiondetail-container">
            <h3>Audi A4 2.0 TDI 2017</h3>
            <div>19.10.2021</div>
            <div className="auctiondetail-container-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
