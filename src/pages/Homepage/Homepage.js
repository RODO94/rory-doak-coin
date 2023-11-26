import UserCard from "../../components/UserCard/UserCard";
import BarGraph from "../../components/BarGraph/BarGraph";
import "./Homepage.scss";
import ThreadCard from "../../components/ThreadCard/ThreadCard";
import LineGraph from "../../components/LineGraph/LineGraph";
import { Payments, People, Telegram, Toll } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import { Link, useParams } from "react-router-dom";

export default function Homepage() {
  const { userId } = useParams();
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
    },
  });

  return (
    <main className="homepage">
      <aside className="homepage__aside">
        <UserCard />
        <div className="homepage-mobile__menu">
          <ThemeProvider theme={theme}>
            <Link to={`/home/${userId}`}>
              <Toll color="primary" fontSize="large" />
            </Link>
            <Link to={`/threads/${userId}`}>
              <Telegram color="primary" fontSize="large" />
            </Link>
          </ThemeProvider>
        </div>
        <ThreadCard />
      </aside>
      <div className="homepage__graphs">
        <section className="homepage__graph">
          <h2 className="homepage__title">Account Balances</h2>
          <BarGraph />
        </section>
        <section className="homepage__graph">
          <h2 className="homepage__title">Monthly Spend</h2>
          <LineGraph />
        </section>
      </div>
    </main>
  );
}
