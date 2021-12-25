import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAuctionsOperation } from "../../state/operations/auctionOperations";
import Auction from "../Auction/Auction";
import "./Profile.scss";
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { usersAuctions } = useSelector((state) => state.auction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAuctionsOperation(user._id));
  }, []);
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="profile-container">
            <div className="profile-container-row-left">
              <div>Name</div>
              <div>Address</div>
              <div>Date of registration</div>
            </div>
            <div className="profile-container-row">
              <div>{user.name}</div>
              <div>{user.address}</div>
              <div>{convertDate(user.date)}</div>
            </div>
          </div>
          <div className="profile-title">
            <h2 className="profile-title-left">My</h2>
            <h2 className="profile-title-right">Auctions</h2>
          </div>
          {usersAuctions?.map((auction) => (
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

export default Profile;
