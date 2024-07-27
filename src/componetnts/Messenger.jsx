import React, { useEffect, useRef, useState } from "react";
import "../css/Messenger.css";
import FriendInfo from "./FriendInfo";
import FriendsArea from "./FriendsArea";
import ShortFriendInfo from "./ShortFriendInfo";
import MessageSend from "./MessageSend";
import MessageContent from "./MessageContent";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentFriendAtom } from "../recoil/atoms/friendsAtoms";
import { userAtom } from "../recoil/atoms/userAtoms";
import axios from "axios";
import { MessagesAtom } from "../recoil/atoms/messageAtoms";

const Messenger = () => {
  const scrollRef = useRef();

  const currFriend = useRecoilValue(currentFriendAtom);
  const userInfo = useRecoilValue(userAtom);
  const [message, setMessage] = useRecoilState(MessagesAtom);
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState("");

  const getMessage = async () => {
    try {
      const response = await axios.get(
        `/api/api/chat-with/get-messages/${currFriend._id}`
      );
      setMessage(response.data.message);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getMessage();
  }, [currFriend]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [message]);

  const getClass = () => {
    return isChecked
      ? "absolute h-full top-0 pi border-l"
      : "absolute h-full top-0 right-0 w-4/12  pi border-l";
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const sendMessage = async () => {
    const messageBlock = {
      senderName: userInfo.userName,
      receiverId: currFriend._id,
      message: text,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "/api/api/chat-with/send-message",
        messageBlock,
        config
      );
      getMessage();
      setText("");
    } catch (error) {
      console.log(error.response);
    }
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
          <MessageContent
            message={message}
            senderId={userInfo.id}
            scrollRef={scrollRef}
          />
          <MessageSend
            text={text}
            setText={setText}
            sendMessage={sendMessage}
          />
        </div>

        <div className={getClass()}>
          <FriendInfo />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
