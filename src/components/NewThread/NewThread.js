import { ThemeProvider } from "@emotion/react";
import "./NewThread.scss";
import {
  IconButton,
  InputAdornment,
  TextField,
  createTheme,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createThread, fetchThreads } from "../../utils/AxiosRequests";

export default function NewThread({ setThreadArray }) {
  const [newThreadCreated, setNewThreadCreated] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: { main: "#011212" },
    },
  });
  const getThreads = async () => {
    const { data } = await fetchThreads(userId);
    setThreadArray(data);
  };

  const handleThread = async (event) => {
    event.preventDefault();
    try {
      setNewThreadCreated(true);
      const threadObj = { thread_name: event.target.name.value };
      const newThread = await createThread(threadObj);
      getThreads();
      navigate(`/threads/${userId}/${newThread.data}`);
      event.target.reset();
    } catch (error) {}
  };
  return (
    <form onSubmit={handleThread} className="new-thread__form">
      <ThemeProvider theme={theme}>
        <TextField
          id="name"
          className="new-thread__input"
          label="Thread name"
          color="primary"
          maxRows={4}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="Name your thread button">
                  <Add />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </ThemeProvider>
    </form>
  );
}
