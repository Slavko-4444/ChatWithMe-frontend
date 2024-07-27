import React from "react";
import "../css/MessageContent.css";

const Message = ({ type, text, status, date }) => {
  const [dt, time] = date.split("T");
  const [hours, minutes] = time.split(":");
  return (
    <div className={`message ${type}`}>
      <p className="message-text">{text}</p>
      <div className="message-info">
        <span className={`message-status ${status.toLowerCase()}`}>
          {status}
        </span>
        <span className="message-date">
          {hours}:{minutes}
        </span>
      </div>
    </div>
  );
};
const MessageContent = ({ message, senderId }) => {
  return (
    <div className="top-24 bottom-16  message-content">
      {message?.map((msg, index) => {
        let TYPE = msg.senderId !== senderId ? "comming" : "sending";

        return (
          <Message
            type={TYPE}
            text={msg.message.text}
            status={msg.status}
            date={msg.updatedAt}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MessageContent;
