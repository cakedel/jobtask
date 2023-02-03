import React from "react";
import { SiKakaotalk } from "react-icons/si";

const Contents = () => {
  return (
    <div className="contents app">
      <div className="chatIcon">
        <SiKakaotalk />
      </div>
      <div className="chatBox">
        <h3>KakaoTalk</h3>
        <div className="time">21:22</div>
        <p>Please check My Kakao Account Info</p>
        <div className="message">
          <strong>1</strong>
        </div>
      </div>
    </div>
  );
};

export default Contents;
