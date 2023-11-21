import "./ChatInput.scss";
import { Send } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material";

export default function ChatInput({ handleClick }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
    },
  });
  return (
    <form onSubmit={handleClick} className="chat-window__chat-form">
      <label id="message"></label>
      <textarea className="chat-window__input" name="message" id="message" />
      <button type="submit" className="chat-window__button">
        <ThemeProvider theme={theme}>
          <Send className="chat-window__icon" color="primary" />
        </ThemeProvider>
      </button>
    </form>
  );
}
