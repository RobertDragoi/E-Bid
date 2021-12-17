import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  faCheckSquare,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Auction.scss";
const Auction = (props) => {
  const { user } = useSelector((state) => state.user);
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
            <div>
              {props.prices.length > 0
                ? props.prices[props.prices.length - 1].price
                : props.startPrice}
            </div>
          </div>
          <div className="auction-container-text-bottom">
            <div>{convertDate(props.date)}</div>
            <div>
              {props.participation ||
              props.prices.some((p) => p.user._id === user._id) ? (
                <FontAwesomeIcon color="black" icon={faCheckSquare} />
              ) : (
                <FontAwesomeIcon color="black" icon={faWindowClose} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Auction;
