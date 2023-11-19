import "./Thread.scss";
import downArrow from "../../assets/icons/Rectangle-38.svg";
import { Link } from "react-router-dom";

export default function Thread() {
  return (
    <section className="thread-list">
      <Link to={"/"} className="thread">
        <strong className="thread__title">Personal Finance</strong>
        <div className="thread__container">
          <p className="thread__date">Thu</p>
          <button className="thread__button">
            <img className="thread__icon" src={downArrow} alt="expand arrow" />
          </button>
        </div>
      </Link>
      <Link to={"/"} className="thread">
        <strong className="thread__title">Savings</strong>
        <div className="thread__container">
          <p className="thread__date">10/11</p>
          <button className="thread__button">
            <img className="thread__icon" src={downArrow} alt="expand arrow" />
          </button>
        </div>
      </Link>
      <Link to={"/"} className="thread">
        <strong className="thread__title">Payment plan</strong>
        <div className="thread__container">
          <p className="thread__date">25/10</p>
          <button className="thread__button">
            <img className="thread__icon" src={downArrow} alt="expand arrow" />
          </button>
        </div>
      </Link>
    </section>
  );
}
