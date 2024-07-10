import React from "react";
import "../css/FriendsArea.css";
import UserInfo from "./UserInfo";
import ActiveFriends from "./ActiveFriends";
import FriendsList from "./FriendsList";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

const FriendsArea = () => {
  return (
    <div className="w-full h-full flex flex-col border-r my_fr">
      <UserInfo />
      <div className="h-12 px-2">
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-600 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
      <ActiveFriends />

      <FriendsList />
    </div>
  );
};

export default FriendsArea;
