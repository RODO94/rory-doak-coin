import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import "./Header.scss";

export default function Header() {
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={"/"} className="header__logo"></Link>
        <NavLink text={"Connections"} />
        <NavLink text={"Loans"} />
        <NavLink route={`/threads/${userId}`} text={"Threads"} />
      </nav>
    </header>
  );
}
