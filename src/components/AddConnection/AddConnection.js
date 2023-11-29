import { ThemeProvider } from "@emotion/react";
import "./AddConnection.scss";
import { createTheme } from "@mui/material";
import { Warning } from "@mui/icons-material";

export default function AddConnection() {
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
      secondary: { main: "#f131c7" },
      warning: { main: "#848383" },
      background: { main: "fff" },
    },
  });

  const handleSubmit = (event) => {};
  return (
    <section className="add-connection">
      <ThemeProvider theme={theme}>
        <h2 className="add-connection__title">Send a connection request</h2>
        <div className="connection-envelope__underline" />
        <p className="add-connection__explainer">
          To connect with someone new, send them a connection request email.
        </p>
        <form onSubmit={handleSubmit} className="add-connection__form">
          <input
            className="add-connection__input"
            type="email"
            name="email"
            placeholder="New connection's email"
          />

          <button type="submit" className="add-connection__button">
            Send Request
          </button>
        </form>
        <div className="add-connection__warning">
          <span className="add-connection__warning-icon">
            <Warning />
          </span>
          <p className="add-connection__warning-text">
            Remember: if new connections accept your request, they will be able
            to see your account information!
          </p>
        </div>
      </ThemeProvider>
    </section>
  );
}
