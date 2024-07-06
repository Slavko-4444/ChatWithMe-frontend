import React from "react";
import "../css/MessageContent.css";

import SimpleBar from "simplebar-react";

const Message = ({ type, text, status, date }) => {
  return (
    <div className={`message ${type}`}>
      <p className="message-text">{text}</p>
      <div className="message-info">
        <span className={`message-status ${status.toLowerCase()}`}>
          {status}
        </span>
        <span className="message-date">{date}</span>
      </div>
    </div>
  );
};
const MessageContent = () => {
  return (
    <div className="top-24 bottom-16  message-content">
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />

      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="coming"
        text="This is a coming message."
        status="Sent"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
      <Message
        type="sending"
        text="This is a sending message."
        status="Seen"
        date="2024-07-06"
      />
    </div>
  );
};

export default MessageContent;
