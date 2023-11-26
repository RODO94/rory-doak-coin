import { ThemeProvider } from "@emotion/react";
import "./MobileNav.scss";
import { createTheme } from "@mui/system";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Telegram, Toll } from "@mui/icons-material";

export default function Footer() {
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
    },
  });
  const { userId } = useParams();

  return (
    <div className="mobile-nav__menu">
      <ThemeProvider theme={theme}>
        <Link to={`/home/${userId}`}>
          <Toll color="primary" fontSize="large" />
        </Link>
        <Link to={`/threads/${userId}`}>
          <Telegram color="primary" fontSize="large" />
        </Link>
      </ThemeProvider>
    </div>
  );
}
