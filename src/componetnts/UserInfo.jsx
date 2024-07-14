import React, { useEffect, useState } from "react";
import "../css/UserInfo.css";
import { GrUserSettings } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/atoms/userAtoms";
import { jwtDecode } from "jwt-decode";
import LogOutModal from "./modals/LogOutModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const UserInfo = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const [seeLogut, setSeeLogout] = useState(false);
  const [userData, setUserData] = useState({
    id: null,
    email: null,
    image: null,
    userName: null,
  });

  useEffect(() => {
    if (!userInfo.token.length) {
      const tk = localStorage.getItem("authToken");
      setUserInfo({
        token: tk ? tk : "",
      });
    }
  }, []);

  useEffect(() => {
    if (userInfo.token.length) {
      const decoded = jwtDecode(userInfo.token);
      setUserData({
        ...userData,
        id: decoded.id,
        email: decoded.email,
        image: `/images/${decoded.image}`,
        userName: decoded.userName,
      });
    }
  }, [userInfo]);

  const toggleModal = () => setSeeLogout(!seeLogut);

  const handleLogout = () => {
    setUserInfo({ token: "" });
    localStorage.removeItem("authToken");
    Cookies.remove("authToken");
    navigate("/login");
    toast.success("See you!");
  };

  return (
    <div className="h-24 p-3 relative flex bg-slate-800  user-info-card">
      {seeLogut ? (
        <LogOutModal
          toggleModal={toggleModal}
          seeLogut={seeLogut}
          handleLogout={handleLogout}
        />
      ) : (
        ""
      )}
      <div className="">
        <img src={userData.image} className="userinfo" alt="photo" />
      </div>
      <div className="text-2xl text-white  w-full flex justify-center items-center title-userinfo capitalize">
        {userData.userName}
      </div>
      <div className="flex flex-col justify-evenly w-12">
        <div className="h-[40%]  border rounded-[10%] bg-white flex hover:cursor-pointer justify-center items-center">
          <GrUserSettings className="text-slate-800 hover:text-lg transition-all" />
        </div>
        <div
          className="h-[40%]  border rounded-[10%] bg-white flex justify-center items-center hover:text-lg hover:cursor-pointer transition-all"
          onClick={toggleModal}
        >
          <IoMdLogOut className="text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
