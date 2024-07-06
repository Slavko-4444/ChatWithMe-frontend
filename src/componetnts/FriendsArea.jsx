import React from "react";
import "../css/FriendsArea.css";

const FriendsArea = () => {
  return (
    <div className="w-full h-full flex flex-col border border-red-700 my_fr">
      <div className="h-28">UserInfo</div>
      <div className="h-12">Search field</div>
      <div className="h-24">Active Friends</div>
      <div className="flex-1">Friends</div>
    </div>
  );
};

export default FriendsArea;
