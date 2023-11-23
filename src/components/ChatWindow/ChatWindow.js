import "./ChatWindow.scss";
import { useEffect, useState } from "react";
import ChatInput from "../ChatInput/ChatInput";
import SingleMessage from "../SingleMessage/SingleMessage";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ChatWindow() {
  const [messageArray, setMessageArray] = useState(null);
  const { userId, threadId } = useParams();
  const handleClick = (event) => {
    event.preventDefault();
    const array = {
      id: Math.random() * 10,
      role: "user",
      content: event.target.message.value,
    };
    const newArray = [...messageArray, array];
    const sortedArray = newArray.sort((a, b) => b.created_at - a.created_at);
    setMessageArray(sortedArray);
  };

  const getMessageList = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/threads/${threadId}/message`
    );
    console.log(data[1].content[0].text);
    setMessageArray(data);
  };

  useEffect(() => {
    getMessageList();
  }, [threadId]);

  if (!messageArray) {
    return <p className="status-message">Please click a Thread to proceed</p>;
  }

  return (
    <div className="chat-window__container">
      <article className="chat-window">
        <div className="chat-window__image">This will display images</div>
        <div className="chat-window__messages">
          {" "}
          {messageArray
            .sort((a, b) => b.created_at - a.created_at)
            .map((message) => {
              let messageContent = "";
              if (message.content.length === 1) {
                messageContent = message.content[0].text.value;
              }
              return (
                <SingleMessage
                  key={message.id}
                  role={message.role}
                  content={messageContent}
                />
              );
            })}{" "}
        </div>
        <ChatInput handleClick={handleClick} />
      </article>
    </div>
  );
}
