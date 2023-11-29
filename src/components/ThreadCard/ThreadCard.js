import { useParams } from "react-router";
import Thread from "../Thread/Thread";
import "./ThreadCard.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

export default function ThreadCard() {
  const [threadArray, setThreadArray] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const getThreads = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/threads/${userId}`
        );
        setThreadArray(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getThreads();
  }, [userId]);

  if (!threadArray) {
    return <LinearProgress />;
  }

  return (
    <section className="thread-card">
      <h2 className="thread-card__title">Threads</h2>
      {threadArray.map((thread, index) => {
        if (index > 2) {
          return "";
        }
        return (
          <Thread
            key={thread.id}
            name={`${thread.thread_name}`}
            userId={userId}
            threadId={thread.thread_id}
          />
        );
      })}{" "}
    </section>
  );
}
