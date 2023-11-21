import { useState } from "react";
import "./SingleMessage.scss";
import { SmartToy } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

export default function SingleMessage({ role, content }) {
  const [isUser, setIsUser] = useState(true);

  console.log(role);
  return (
    <article
      className={
        role === "user" ? "message message--user" : "message message--assistant"
      }
    >
      <p
        className={
          role === "user"
            ? "message__text message__text--user"
            : "message__text message__text--assistant"
        }
      >
        {content}
      </p>
      {/* <ThemeProvider theme={theme}>
        <SmartToy color="primary" />
      </ThemeProvider> */}
    </article>
  );
}
