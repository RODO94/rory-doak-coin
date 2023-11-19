import Thread from "../Thread/Thread";
import "./ThreadCard.scss";

export default function ThreadCard() {
  return (
    <section className="thread-card">
      <h2 className="thread-card__title">Threads</h2>
      <Thread />
    </section>
  );
}
