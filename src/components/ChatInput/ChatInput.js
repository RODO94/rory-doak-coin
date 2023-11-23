import "./ChatInput.scss";
import { Send } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export default function ChatInput({ handleClick, loadingIcon }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
    },
  });

  const ariaLabel = { "aria-label": "message input box" };
  return (
    <form onSubmit={handleClick} className="chat-window__chat-form">
      <ThemeProvider theme={theme}>
        <TextField
          id="message"
          label="Send a message to your assistant"
          color="primary"
          maxRows={4}
          aria-label={ariaLabel}
          fullWidth
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="send message button">
                  {loadingIcon}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </ThemeProvider>
    </form>
  );
}
