import "./ChatWindow.scss";
import { useEffect, useRef, useState } from "react";
import ChatInput from "../ChatInput/ChatInput";
import SingleMessage from "../SingleMessage/SingleMessage";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Send } from "@mui/icons-material";
import ImageWindow from "../ImageWindow/ImageWindow";
import {
  addMessage,
  fetchMessageList,
  getRunStatus,
  runThread,
} from "../../utils/AxiosRequests";
import { NULL } from "sass";

export default function ChatWindow() {
  const { userId, threadId } = useParams();
  const [messageArray, setMessageArray] = useState(null);
  const [imageArray, setImageArray] = useState(null);
  const [isRunComplete, SetIsRunCompelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const bottomDiv = useRef(null);
  const assistantId = "asst_PSbFXkuFSpBUFe9GCuC2ELrF";

  let runId = "";

  const scrolltoBottom = () => {
    bottomDiv.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Format Message
    const bodyObj = {
      role: "user",
      content: event.target.message.value,
    };
    SetIsRunCompelete(false);
    // Add Message
    addMessage(bodyObj, threadId);
    getMessageList(threadId);

    // Run Thread
    startRun(assistantId, threadId);

    // Check Thread Status
    getRunStatus(threadId, runId);
    getMessageList();

    event.target.reset();
  };

  const startRun = async (assistantId, threadId) => {
    try {
      const assistantObj = { assistant_id: assistantId };
      const data = await runThread(threadId, assistantObj);
      runId = data.id;
      let statusObj = {};
      SetIsRunCompelete(false);
      while (!isRunComplete) {
        statusObj = await getRunStatus(threadId, runId);
        if (statusObj.completed_at !== null) {
          getMessageList();
          setIsLoading(false);

          return SetIsRunCompelete(true);
        }
      }
      SetIsRunCompelete(false);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const getMessageList = async () => {
    try {
      const data = await fetchMessageList(threadId);

      if (data) {
        const filteredMessageArray = data.filter(
          (response) => response.type === "text"
        );

        const filteredImageArray = data.filter(
          (response) => response.type === "image_file"
        );
        setMessageArray(filteredMessageArray);
        setImageArray(filteredImageArray);
        return;
      } else {
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getMessageList();
    SetIsRunCompelete(false);
  }, [threadId, runId, isRunComplete]);

  useEffect(() => {
    scrolltoBottom();
  }, [messageArray]);

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
          <div ref={bottomDiv} className="chat-window__bottom"></div>
        </div>
        <ChatInput loadingIcon={loadingIcon} handleClick={handleClick} />
      </article>
      <div className="chat-window__image">
        <ImageWindow imageArray={imageArray} />
      </div>
    </div>
  );
}
