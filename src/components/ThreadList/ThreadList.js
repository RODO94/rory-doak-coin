import { useState } from "react";
import { createTheme } from "@mui/material";
import "./ThreadList.scss";
import { ThemeProvider } from "@emotion/react";
import { Add } from "@mui/icons-material";
import Thread from "../Thread/Thread";

export default function ThreadList() {
  const [threadArray, setThreadArray] = useState(null);
  const theme = createTheme({
    palette: {
      primary: { main: "#ffffff" },
    },
  });
  return (
    <section className="threads-section">
      <h2 className="threads-section__title">Threads</h2>
      <Thread />
      <div className="threads-section__wrap"></div>
      <ThemeProvider theme={theme}>
        <button className="threads-section__save-button">
          Save current thread
          <span className="threads-section__icon">
            <Add color="primary" />
          </span>
        </button>
      </ThemeProvider>
    </section>
  );
}
