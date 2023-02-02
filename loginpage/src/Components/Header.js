import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiChatNewLine } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <h2>Chats</h2>
      <div className="menu">
        <BiSearch />
        <RiChatNewLine />
        <HiOutlineMusicNote />
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default Header;
