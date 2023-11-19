import { Link } from "react-router-dom";
import "./NavLink.scss";

export default function NavLink({ text }) {
  return (
    <Link className="nav-link" to={"/"}>
      {text}
    </Link>
  );
}
