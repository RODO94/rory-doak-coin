import "./UserCard.scss";
import downArrow from "../../assets/icons/Rectangle-38.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { LinearProgress } from "@mui/material";

export default function UserCard() {
  const [userArray, setUserArray] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const getAccounts = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/accounts/${userId}`
      );
      setUserArray(data);
      let balanceAmount = 0;
      const balanceArray = data.map((balance) => {
        return (balanceAmount = balanceAmount + balance.account_balance / 100);
      });
      setUserBalance(balanceAmount);

      return balanceArray;
    };
    getAccounts();
  }, [userId]);

  if (!userArray) {
    return <LinearProgress />;
  }

  return (
    <article className="user-card">
      <h1 className="user-card__welcome">Hello Rory!</h1>
      <p className="user-card__text">Total account balance</p>
      <strong className="user-card__amount">{`£${userBalance}`}</strong>
      <div className="user-card__accounts-wrap">
        <div className="user-card__accounts-contain">
          <span className="user-card__accounts-count">{userArray.length}</span>
          <p className="user-card__accounts-text">
            {userArray.length > 1 ? "Accounts linked" : "Account Linked"}
          </p>
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
