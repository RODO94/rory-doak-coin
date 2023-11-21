import "./ChatWindow.scss";
import { useEffect, useState } from "react";
import ChatInput from "../ChatInput/ChatInput";
import SingleMessage from "../SingleMessage/SingleMessage";

export default function ChatWindow() {
  const [messageArray, setMessageArray] = useState([
    {
      role: "user",
      id: 1,
      content: "this is the content of the message from the user",
    },
    {
      id: 2,
      role: "assistant",
      content: "this is the response from the assistant",
    },
  ]);
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.message.value);
    const array = {
      id: Math.random() * 10,
      role: "user",
      content: event.target.message.value,
    };
    setMessageArray([...messageArray, array]);
  };

  return (
    <div className="chat-window__container">
      <article className="chat-window">
        <div className="chat-window__image">This will display images</div>
        <div className="chat-window__messages">
          {" "}
          {messageArray
            .sort((a, b) => b.id - a.id)
            .map((message) => {
              console.log("working");
              return (
                <SingleMessage
                  key={message.id}
                  role={message.role}
                  content={message.content}
                />
              );
            })}{" "}
        </div>
        <ChatInput handleClick={handleClick} />
      </article>
    </div>
  );
}
