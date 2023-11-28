import ConnectionList from "../ConnectionList/ConnectionList";
import "./ConnectionEnvelope.scss";

export default function ConnectionEnvelope() {
  return (
    <section className="connection-envelope">
      <h2 className="connection-envelope__title">Connections</h2>
      <div className="connection-envelope__underline" />
      <ConnectionList />
    </section>
  );
}
