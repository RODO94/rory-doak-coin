import GraphCard from "../../components/GraphCard/GraphCard";
import UserCard from "../../components/UserCard/UserCard";
import BarGraph from "../../components/BarGraph/BarGraph";
import "./Homepage.scss";
import ThreadCard from "../../components/ThreadCard/ThreadCard";

export default function Homepage() {
  return (
    <main className="homepage">
      <UserCard />
      <BarGraph />
      <ThreadCard />
      <BarGraph />
    </main>
  );
}
