import "./LogIn.scss";
import bigMan from "../../assets/thebigman.jpg";
import { Link } from "react-router-dom";

export default function LogIn() {
  const userId = "1";

  return (
    <main className="log-in">
      <section className="log-in__section">
        <div className="log-in__profile">
          <img className="log-in__img" src={bigMan} alt="the big man" />
        </div>
        <Link className="log-in__link" to={`/${userId}`}>
          Log In
        </Link>
      </section>
    </main>
  );
}
