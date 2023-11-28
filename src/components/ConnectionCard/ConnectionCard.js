import { AccessTime } from "@mui/icons-material";
import "./ConnectionCard.scss";

export default function ConnectionCard({ connectionName, image }) {
  return (
    <article className="connection-card">
      <img className="connection-card__img" src={image} />
      <p className="connection-card__name">{connectionName}</p>

      <p className="connection-card__remove">Remove Connection</p>
    </article>
  );
}
