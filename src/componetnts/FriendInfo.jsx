import React, { useEffect, useState } from "react";
import "../css/FriendInfo.css";

const ImagesData = () => {
  return (
    <div className="data-show m-4 h-auto  rounded overflow-y-auto grid grid-cols-1 xl:grid-cols-2">
      <div className="h-40 border">1</div>
      <div className="h-40 border">1</div>
      <div className="h-40 border">1</div>
      <div className="h-40 border">1</div>
      <div className="h-40 border">1</div>
    </div>
  );
};

const LinksData = () => {
  return <div className="m-4 h-auto rounded">Links</div>;
};

const ChatData = () => {
  return <div>Chat data</div>;
};

const FriendInfo = () => {
  const [clickItems, setClickItems] = useState({
    images: true,
    links: false,
    chatInfo: false,
  });

  const onClickItmeEvent = (msg) => {
    let newItems = {
      images: false,
      links: false,
      chatInfo: false,
    };
    newItems[msg] = true;
    setClickItems(newItems);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-80 image-friend"></div>
      <div className="m-4 p-1 border border-x-0 h-14 hover:p-2 hover:h-16 hover:cursor-pointer transition-all">
        <p className="text-center text-xl">Milica Sosic</p>
        <p className="text-center text-green-600 font-semibold">Active</p>
      </div>
      <div className="p-2 m-4 h-28 xl:h-14  grid grid-row grid-cols-1 xl:grid-cols-3 gap-4">
        <div
          className="border flex justify-center items-center rounded-3xl bg-slate-400 text-white font-semibold hover:cursor-pointer hover:bg-slate-500"
          onClick={() => onClickItmeEvent("images")}
        >
          # images
        </div>
        <div
          className="border flex justify-center items-center rounded-3xl bg-slate-400 text-white font-semibold hover:cursor-pointer hover:bg-slate-500"
          onClick={() => onClickItmeEvent("links")}
        >
          # links
        </div>
        <div
          className="border flex justify-center items-center rounded-3xl bg-slate-400 text-white font-semibold hover:cursor-pointer hover:bg-slate-500"
          onClick={() => onClickItmeEvent("chatInfo")}
        >
          <p># chat info</p>
        </div>
      </div>
      {clickItems.images ? <ImagesData /> : ""}
      {clickItems.links ? <LinksData /> : ""}
      {clickItems.chatInfo ? <ChatData /> : ""}
    </div>
  );
};

export default FriendInfo;
