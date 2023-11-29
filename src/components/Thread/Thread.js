import "./Thread.scss";
import downArrow from "../../assets/icons/Rectangle-38.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Thread({ threadId, userId, name }) {
  const [isThreadActive, setIsThreadActive] = useState(false);

  return (
    <NavLink
      to={`/${userId}/threads/${threadId}`}
      className={({ isActive }) =>
        isActive ? "thread thread--active" : "thread"
      }
    >
      <strong className="thread__title">{name}</strong>
      <div className="thread__container">
        <p className="thread__date"></p>
        <img className="thread__icon" src={downArrow} alt="expand arrow" />
      </div>
    </NavLink>
  );
}
