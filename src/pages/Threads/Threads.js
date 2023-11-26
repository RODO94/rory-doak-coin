import "./Threads.scss";
import ThreadList from "../../components/ThreadList/ThreadList";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import MobileNav from "../../components/MobileNav/MobileNav";
import { useParams } from "react-router-dom";

export default function Threads() {
  const { userId } = useParams();
  return (
    <main className="threads">
      <ThreadList userId={userId} />
      <section className="threads-chat">
        <ChatWindow />
      </section>
      <MobileNav />
    </main>
  );
}
