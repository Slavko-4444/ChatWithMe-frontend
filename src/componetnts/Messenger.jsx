import React, { useEffect, useRef, useState } from "react";
import "../css/Messenger.css";
import FriendInfo from "./FriendInfo";
import FriendsArea from "./FriendsArea";
import ShortFriendInfo from "./ShortFriendInfo";
import MessageSend from "./MessageSend";
import MessageContent from "./MessageContent";

const Messenger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const slideInfo = useRef();
  const getClassName = () => {
    return isChecked
      ? "absolute h-full top-0 pi border-l"
      : "absolute h-full top-0 right-0 w-4/12  pi border-l";
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="h-screen w-full flex box-conent">
      <div className="w-3/12 bg-white-800">
        <FriendsArea />
      </div>
      <div className="w-9/12 flex main-side">
        <input
          type="checkbox"
          id="dot"
          className="hidden"
          onChange={handleCheck}
        />

        <div className="w-4/6 z-10 message-box">
          <ShortFriendInfo />
          <MessageContent />
          <MessageSend />
        </div>

        <div className={getClassName()}>
          <FriendInfo />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
