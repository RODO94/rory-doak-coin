import "./Thread.scss";
import downArrow from "../../assets/icons/Rectangle-38.svg";
import { Link } from "react-router-dom";

export default function Thread({ threadId, userId, name }) {
  return (
    <article className="thread">
      <Link to={`/threads/${userId}/${threadId}`} className="thread__link">
        <strong className="thread__title">{name}</strong>
        <div className="thread__container">
          <p className="thread__date"></p>
          <button className="thread__button">
            <img className="thread__icon" src={downArrow} alt="expand arrow" />
          </button>
        </div>
      </Link>
    </article>
  );
}
