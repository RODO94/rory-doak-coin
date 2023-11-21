import { Link } from "react-router-dom";
import "./NavLink.scss";

export default function NavLink({ text, route }) {
  return (
    <Link className="nav-link" to={route}>
      {text}
    </Link>
  );
}
