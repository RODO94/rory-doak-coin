import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const userId = "1";

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={`/${userId}`} className="header__logo">
          COIN
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link--active" : "nav-link"
          }
          to={`/${userId}/threads/thread_A9dsCSidKTAItUqWPa0eqZQ4`}
          end
        >
          Threads
        </NavLink>
        <NavLink
          to={`/${userId}/connections`}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link--active" : "nav-link"
          }
          end
        >
          Connections
        </NavLink>
      </nav>
    </header>
  );
}
