import React from "react";
import "../detail/detail.css";

const Detail = () => {
  return (
    <>
      <div className="detail">
        <div className="user">
          <img src="../avatar.png" alt="" />
          <h3>Utsav Patel</h3>
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
              <span>Privacy % help</span>
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
                <img src="../photoItem2.jpg" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="../download.png" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Share Files</span>
              <img src="../arrowUp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
