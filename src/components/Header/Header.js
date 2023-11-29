import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";

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
          to={`/${userId}/threads/thread_CSLNqDZbKIvQtpJnQRaHO9jD`}
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
          exact
        >
          Connections
        </NavLink>
      </nav>
    </header>
  );
}
