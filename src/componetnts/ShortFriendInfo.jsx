import React from "react";
import { BsChatDots } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import "../css/ShortFriendInfo.css";

const ShortFriendInfo = () => {
  return (
    <div className="absolute flex justify-between items-center top-0 h-24 border px-5 top-message">
      <div className="flex items-center ">
        <img src="/images/mica30896.jpg" class="chat-member-img" alt="photo" />
        <p className="text-2xl">Milica Sosic</p>
      </div>
      <div className="flex flex-row-reverse ">
        <div className="fancy-chat-icon">
          <label htmlFor="dot" className="inline-flex">
            <BsChatDots size={22} />
          </label>
        </div>
        <div className="fancy-chat-icon">
          <HiVideoCamera size={22} />
        </div>
        <div className="fancy-chat-icon">
          <IoMdCall size={22} />
        </div>
      </div>
    </div>
  );
};

export default ShortFriendInfo;
