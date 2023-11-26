import { useEffect, useState } from "react";
import { LinearProgress, createTheme } from "@mui/material";
import "./ThreadList.scss";
import { ThemeProvider } from "@emotion/react";
import Thread from "../Thread/Thread";
import axios from "axios";
import NewThread from "../NewThread/NewThread";
import AddThread from "../AddThread/AddThread";

export default function ThreadList({ userId }) {
  const [threadArray, setThreadArray] = useState(null);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const theme = createTheme({
    palette: {
      primary: { main: "#ffffff" },
    },
  });
  const getThreads = async () => {
    const { data } = await axios.get(`http://localhost:8080/threads/${userId}`);
    setThreadArray(data);
  };

  const handleNewThread = () => {
    setIsAddClicked(true);
  };

  useEffect(() => {
    getThreads();
    setIsAddClicked(false);
  }, [userId]);

  if (!threadArray) {
    return <LinearProgress />;
  }
  return (
    <section className="threads-section">
      <h2 className="threads-section__title">Threads</h2>
      <section className="threads-section__list">
        {threadArray.map((thread) => (
          <Thread
            key={thread.id}
            name={`${thread.thread_name}`}
            userId={userId}
            threadId={thread.thread_id}
          />
        ))}
      </section>
      <ThemeProvider theme={theme}>
        {isAddClicked ? (
          <NewThread setThreadArray={setThreadArray} />
        ) : (
          <AddThread handleNewThread={handleNewThread} />
        )}
      </ThemeProvider>
    </section>
  );
}
