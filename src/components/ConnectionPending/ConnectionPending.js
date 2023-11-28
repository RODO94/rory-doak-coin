import "./ConnectionPending.scss";

export default function ConnectionPending() {
  return (
    <article className="connection-card">
      <img className="connection-card__img" src={image} />
      <p className="connection-card__name">{connectionName}</p>
      <span className="connection-card__request">
        <AccessTime />
        Request sent
      </span>
      <p className="connection-card__remove">Remove Connection</p>
    </article>
  );
}
