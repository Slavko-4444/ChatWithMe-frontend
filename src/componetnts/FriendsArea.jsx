import React from "react";
import "../css/FriendsArea.css";
import UserInfo from "./UserInfo";

const FriendsArea = () => {
  return (
    <div className="w-full h-full flex flex-col border-r my_fr">
      <UserInfo />
      <div className="h-12">Search field</div>
      <div className="h-24">Active Friends</div>
      <div className="flex-1">Friends</div>
    </div>
  );
};

export default FriendsArea;
