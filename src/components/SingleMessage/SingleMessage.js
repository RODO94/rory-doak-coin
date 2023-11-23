import { useState } from "react";
import "./SingleMessage.scss";
import { SmartToy } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { marked } from "marked";

export default function SingleMessage({ role, content }) {
  const parsedContent = marked.parse(content);
  return (
    <article
      className={
        role === "user" ? "message message--user" : "message message--assistant"
      }
    >
      <strong
        className={
          role === "user"
            ? "message__title message__title--user"
            : "message__title message__title--assistant"
        }
      >
        {role}
      </strong>
      <div
        className={
          role === "user"
            ? "message__text message__text--user"
            : "message__text message__text--assistant"
        }
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      ></div>
    </article>
  );
}
