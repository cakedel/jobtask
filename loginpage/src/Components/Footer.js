import React from "react";
import { BiUser } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TfiMore } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="user">
        <BiUser />
      </div>
      <div className="chat">
        <BsFillChatFill />
        <strong>1</strong>
      </div>
      <div className="search">
        <BiSearch />
      </div>
      <div className="more">
        <TfiMore />
      </div>
    </div>
  );
};

export default Footer;
