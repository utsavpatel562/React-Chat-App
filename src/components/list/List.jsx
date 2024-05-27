import React from "react";
import "../list/list.css";
import UserInfo from "./userinfo/UserInfo";
import ChatList from "./ChatList/chatList";
const List = () => {
  return (
    <>
      <div className="list">
        <UserInfo />
        <ChatList />
      </div>
    </>
  );
};

export default List;
