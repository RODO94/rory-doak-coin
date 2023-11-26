import "./ChatWindow.scss";
import { useEffect, useState } from "react";
import ChatInput from "../ChatInput/ChatInput";
import SingleMessage from "../SingleMessage/SingleMessage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Send } from "@mui/icons-material";
import ImageWindow from "../ImageWindow/ImageWindow";

export default function ChatWindow() {
  const { userId, threadId } = useParams();
  const [messageArray, setMessageArray] = useState(null);
  const [imageArray, setImageArray] = useState(null);
  const [isRunComplete, SetIsRunCompelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const assistantId = "asst_7VYbIXPEu7YKYSv7aMeJviCY";

  let runId = "";

  const handleClick = (event) => {
    event.preventDefault();
    getMessageList();
    setIsLoading(true);

    // Format Message
    const bodyObj = {
      role: "user",
      content: event.target.message.value,
    };
    SetIsRunCompelete(false);
    console.log(isRunComplete);
    // Add Message
    addMessage(bodyObj);

    // Run Thread
    runThread(assistantId, threadId);

    // Check Thread Status
    getRunStatus(threadId, runId);
    getMessageList();

    event.target.reset();
  };

  const getRunStatus = async (threadId, runId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/threads/${threadId}/${runId}`
      );
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const runThread = async (assistantId, threadId) => {
    try {
      const assistantObj = { assistant_id: assistantId };
      const { data } = await axios.post(
        `http://localhost:8080/threads/${threadId}/run`,
        assistantObj
      );
      runId = data.id;
      let statusObj = {};
      SetIsRunCompelete(false);
      console.log(runId);
      console.log(isRunComplete);
      console.log("before While");
      while (!isRunComplete) {
        statusObj = await getRunStatus(threadId, runId);
        console.log(statusObj.status);
        console.log(statusObj.completed_at);
        if (statusObj.completed_at !== null) {
          getMessageList();
          setIsLoading(false);

          return SetIsRunCompelete(true);
        }
      }
      SetIsRunCompelete(false);
      console.log("After While");
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const addMessage = async (bodyObj) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/threads/${threadId}/message`,
        bodyObj
      );
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const getMessageList = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/threads/${threadId}/message`
      );

      const filteredMessageArray = data.filter(
        (response) => response.type === "text"
      );

      const filteredImageArray = data.filter(
        (response) => response.type === "image_file"
      );
      setMessageArray(filteredMessageArray);
      setImageArray(filteredImageArray);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getMessageList();
    SetIsRunCompelete(false);
  }, [threadId, runId, isRunComplete]);

  const loadingIcon = isLoading ? (
    <CircularProgress color="primary" />
  ) : (
    <Send color="primary" />
  );

  if (!messageArray) {
    return <p className="status-message">Please click a Thread to proceed</p>;
  }

  return (
    <div className="chat-window__container">
      <article className="chat-window">
        <div className="chat-window__messages">
          {" "}
          {messageArray
            .sort((a, b) => b.created_at - a.created_at)
            .map((message) => (
              <SingleMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
        </div>
        <ChatInput loadingIcon={loadingIcon} handleClick={handleClick} />
      </article>
      <div className="chat-window__image">
        <ImageWindow imageArray={imageArray} />
      </div>
    </div>
  );
}
