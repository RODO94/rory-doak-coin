import "./Threads.scss";
import ThreadList from "../../components/ThreadList/ThreadList";

export default function Threads() {
  return (
    <main className="threads">
      <ThreadList />
      <section className="threads-chat">
        <h3>This will be the chat area</h3>
      </section>
    </main>
  );
}
