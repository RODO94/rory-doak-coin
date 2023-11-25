import { useEffect, useState } from "react";
import { LinearProgress, createTheme } from "@mui/material";
import "./ThreadList.scss";
import { ThemeProvider } from "@emotion/react";
import { Add } from "@mui/icons-material";
import Thread from "../Thread/Thread";
import axios from "axios";

export default function ThreadList({ userId }) {
  const [threadArray, setThreadArray] = useState(null);
  const [newThreadCreated, setNewThreadCreated] = useState(false);
  const theme = createTheme({
    palette: {
      primary: { main: "#ffffff" },
    },
  });
  const getThreads = async () => {
    const { data } = await axios.get(`http://localhost:8080/threads/${userId}`);
    setThreadArray(data);
  };

  const handleCreateThread = async (event) => {
    try {
      setNewThreadCreated(true);
      const newThread = await axios.post(
        "http://localhost:8080/threads/create"
      );
      console.log(newThread);
      getThreads();
    } catch (error) {}
  };

  useEffect(() => {
    getThreads();
    setNewThreadCreated(false);
  }, [userId, newThreadCreated]);

  if (!threadArray) {
    return <LinearProgress />;
  }
  return (
    <section className="threads-section">
      <h2 className="threads-section__title">Threads</h2>
      <section>
        {threadArray.map((thread) => (
          <Thread
            key={thread.id}
            name={`Thread ${thread.thread_id[10]}`}
            userId={userId}
            threadId={thread.thread_id}
          />
        ))}
      </section>
      <div className="threads-section__wrap"></div>
      <ThemeProvider theme={theme}>
        <button
          onClick={handleCreateThread}
          className="threads-section__save-button"
        >
          New thread
          <span className="threads-section__icon">
            <Add color="primary" />
          </span>
        </button>
      </ThemeProvider>
    </section>
  );
}
