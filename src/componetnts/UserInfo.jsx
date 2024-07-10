import React from "react";
import "../css/UserInfo.css";
import { GrUserSettings } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";

const UserInfo = () => {
  return (
    <div className="h-24 p-3 relative flex bg-slate-800  user-info-card">
      <div className="">
        <img src="/images/zika.jpg" className="userinfo" alt="photo" />
      </div>
      <div className="text-2xl text-white  w-full flex justify-center items-center title-userinfo">
        Milos Sosic
      </div>
      <div className="flex flex-col justify-evenly w-12">
        <div className="h-[40%]  border rounded-[10%] bg-white flex hover:cursor-pointer justify-center items-center">
          <GrUserSettings className="text-slate-800 hover:text-lg transition-all" />
        </div>
        <div className="h-[40%]  border rounded-[10%] bg-white flex justify-center items-center hover:text-lg hover:cursor-pointer transition-all">
          <IoMdLogOut className="text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
