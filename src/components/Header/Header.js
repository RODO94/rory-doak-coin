import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import "./Header.scss";

export default function Header() {
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={`/home/${userId}`} className="header__logo">
          COIN
        </Link>
        <NavLink route={`/threads/${userId}`} text={"Threads"} />
      </nav>
    </header>
  );
}
