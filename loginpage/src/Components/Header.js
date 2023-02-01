import React from "react";
import {BiSearch} from "react-icons/bi";
import {RiChatNewLine} from "react-icons/ri";

const Header = () => {
  return (
    <section className="chats section">
      <h2>Chats</h2>
      <div className="menu">
        <BiSearch />
        <RiChatNewLine/>
      </div>
    </section>
  );
};

export default Header;
