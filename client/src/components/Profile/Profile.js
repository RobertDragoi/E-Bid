import React from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";
const Profile = () => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  const { user } = useSelector((state) => state.user);
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
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Profile;
