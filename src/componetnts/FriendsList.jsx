import React, { useEffect, useState } from "react";
import "../css/ActiveFriends.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentFriendAtom,
  friendsListAtom,
} from "../recoil/atoms/friendsAtoms";

const FriendBlock = ({ friend }) => {
  const [currFriend, setCurrFriend] = useRecoilState(currentFriendAtom);

  const toggleMessageContent = () =>
    setCurrFriend({
      userName: friend.userName,
      email: friend.email,
      image: friend.image,
      _id: friend._id,
    });

  return (
    <div
      className="p-2 border-y h-24 firend-element flex items-center hover:bg-slate-300 hover:cursor-pointer "
      onClick={toggleMessageContent}
    >
      <img
        src={"/images/" + friend.image}
        className="friend-image f-i"
        alt="opa"
      />
      <p className="ml-3 font-semibold lg:text-xl text-sm capitalize">
        {friend.userName}
      </p>
    </div>
  );
};

const FriendsList = () => {
  const friends = useRecoilValue(friendsListAtom);
  return (
    <div className="mt-2 friend-list-all flex-1 overflow-y-auto">
      {friends.length ? (
        friends.map((friend, index) => (
          <FriendBlock friend={friend} key={index} />
        ))
      ) : (
        <p className="text-sm md:text-3xl p-2">No friends found</p>
      )}
    </div>
  );
};

export default FriendsList;
