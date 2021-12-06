import React from "react";
import { Link } from "react-router-dom";
import "./Auction.scss";
const Auction = (props) => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  return (
    <Link className="auction-container-link" to={`/auction/${props.id}`}>
      <div className="auction-container">
        <div className="auction-container-image">
          <img src="./images/image.jpg"></img>
        </div>
        <div className="auction-container-text">
          <div className="auction-container-text-upper">
            <div>{props.title}</div>
            <div>9000$</div>
          </div>
          <div className="auction-container-text-bottom">
            <div>{convertDate(props.date)}</div>
            <div>You are leading</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Auction;
