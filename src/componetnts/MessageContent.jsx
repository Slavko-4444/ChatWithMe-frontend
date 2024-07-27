import React from "react";
import "../css/MessageContent.css";

const Message = ({ type, text, status, date, index, scrollRef }) => {
  const [dt, time] = date.split("T");
  const [hours, minutes] = time.split(":");
  return (
    <div ref={scrollRef} className={`message ${type}`} key={index}>
      <p className="message-text inline">{text}</p>
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
const MessageContent = ({ message, senderId, scrollRef }) => {
  return (
    <div className="top-24 bottom-16  message-content">
      {message?.map((msg, index) => {
        let TYPE = msg.senderId !== senderId ? "coming" : "sending";

        return (
          <Message
            type={TYPE}
            text={msg.message.text}
            status={msg.status}
            date={msg.updatedAt}
            index={index}
            scrollRef={scrollRef}
          />
        );
      })}
    </div>
  );
};

export default MessageContent;
