import GraphCard from "../../components/GraphCard/GraphCard";
import UserCard from "../../components/UserCard/UserCard";
import BarGraph from "../../components/BarGraph/BarGraph";
import "./Homepage.scss";
import ThreadCard from "../../components/ThreadCard/ThreadCard";

export default function Homepage() {
  return (
    <main className="homepage">
      <UserCard />
      <section className="homepage__graph">
        <h2 className="homepage__title">Monthly Spend</h2>
        <BarGraph />
      </section>
      <ThreadCard />
      <section className="homepage__graph">
        <h2 className="homepage__title">Account Balance</h2>
        <BarGraph />
      </section>
    </main>
  );
}
