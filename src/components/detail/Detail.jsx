import React from "react";
import "../detail/detail.css";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isRecieverBlocked, changeBlock } =
    useChatStore();

  const { currentUser } = useUserStore();
  const handleBlock = async () => {
    if (!user) return;
    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isRecieverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="detail">
        <div className="user">
          <img src={user?.avatar || "../avatar.png"} alt="" />
          <h3>{user?.username}</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="../arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & help</span>
              <img src="../arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared photos</span>
              <img src="../arrowUp.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetails">
                  <img src="../photoItem2.jpg" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="../download.png" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetails">
                  <img src="../photoItem2.jpg" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="../download.png" className="icon" />
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Share Files</span>
              <img src="../arrowUp.png" alt="" />
            </div>
          </div>
          <button onClick={handleBlock}>
            {isCurrentUserBlocked
              ? "You are Blocked!"
              : isRecieverBlocked
              ? "User Blocked"
              : "Block User"}
          </button>
          <button className="logout" onClick={() => auth.signOut()}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
