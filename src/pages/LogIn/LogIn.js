import "./LogIn.scss";
import bigMain from "../../assets/thebigman.jpg";
import { Link } from "react-router-dom";

export default function LogIn() {
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";

  return (
    <main className="log-in">
      <section className="log-in__section">
        <div className="log-in__profile">
          <img className="log-in__img" src={bigMain} alt="the big man" />
        </div>
        <Link className="log-in__link" to={`/home/${userId}`}>
          Log In
        </Link>
      </section>
    </main>
  );
}
