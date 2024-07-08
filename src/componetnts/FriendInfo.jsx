import React from "react";
import "../css/FriendInfo.css";

const FriendInfo = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-96 image-friend"></div>
      <div className="m-4 p-1 border border-x-0 h-14 hover:p-2 hover:h-16 hover:cursor-pointer">
        <p className="text-center text-xl">Milica Sosic</p>
        <p className="text-center text-green-600 font-semibold">Active</p>
      </div>
      <div className="p-2 m-4 h-16 grid grid-row grid-cols-3 gap-4">
        <div className="border flex justify-center items-center rounded-3xl bg-slate-400 text-white font-semibold hover:cursor-pointer hover:bg-slate-500">
          # images
        </div>
        <div className="border flex justify-center items-center rounded-3xl bg-slate-400 text-white font-semibold hover:cursor-pointer hover:bg-slate-500">
          # links
        </div>
        <div className="border flex justify-center items-center rounded-3xl bg-slate-400 text-white font-semibold hover:cursor-pointer hover:bg-slate-500">
          <p># chat info</p>
        </div>
      </div>
      <div className="data-show m-4 h-auto border border-red-600 rounded overflow-y-auto grid grid-cols-1 xl:grid-cols-2 gap-1">
        <div className="h-32 border">1</div>
        <div className="h-32 border">1</div>
        <div className="h-32 border">1</div>
        <div className="h-32 border">1</div>
        <div className="h-32 border">1</div>
      </div>
    </div>
  );
};

export default FriendInfo;
