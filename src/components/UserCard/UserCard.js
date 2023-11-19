import "./UserCard.scss";
import downArrow from "../../assets/icons/Rectangle-38.svg";

export default function UserCard() {
  return (
    <article className="user-card">
      <h1 className="user-card__welcome">Hello Rory!</h1>
      <p className="user-card__text">Total account balance</p>
      <strong className="user-card__amount">£20,573</strong>
      <div className="user-card__accounts-wrap">
        <div className="user-card__accounts-contain">
          <span className="user-card__accounts-count">2</span>
          <p className="user-card__accounts-text">Accounts linked</p>
        </div>
        <button className="user-card__accounts-button">
          <img
            className="user-card_accounts-icon"
            src={downArrow}
            alt="expand arrow"
          />
        </button>
      </div>
    </article>
  );
}
