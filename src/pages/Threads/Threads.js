import "./Threads.scss";
import ThreadList from "../../components/ThreadList/ThreadList";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

export default function Threads() {
  return (
    <main className="threads">
      <ThreadList />
      <section className="threads-chat">
        <ChatWindow />
      </section>
    </main>
  );
}
