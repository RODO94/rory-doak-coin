import { RemoveCircle } from "@mui/icons-material";
import "./ConnectionCard.scss";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function ConnectionCard({ connectionName, image }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
      secondary: { main: "#f131c7" },
      warning: { main: "#848383" },
    },
  });
  return (
    <article className="connection-card">
      <div className="connection-card__wrap">
        <img
          className="connection-card__img"
          src={image}
          alt="profile of the user"
        />
        <p className="connection-card__name">{connectionName}</p>
      </div>
      <div className="connection-card__wrap">
        <p className="connection-card__remove">Remove</p>
        <ThemeProvider theme={theme}>
          <button className="connection-card__remove-icon">
            <RemoveCircle
              color="warning"
              className="connection-card__remove--mobile"
            />
          </button>
        </ThemeProvider>
      </div>
    </article>
  );
}
