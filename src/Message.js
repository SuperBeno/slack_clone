import "./Message.css";
import React from "react";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="Message's Avatar"></img>
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
