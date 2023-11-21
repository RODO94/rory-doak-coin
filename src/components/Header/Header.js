import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={"/"} className="header__logo"></Link>
        <NavLink text={"Connections"} />
        <NavLink text={"Loans"} />
        <NavLink route="/threads" text={"Threads"} />
      </nav>
    </header>
  );
}
