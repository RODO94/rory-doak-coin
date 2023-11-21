import GraphCard from "../../components/GraphCard/GraphCard";
import UserCard from "../../components/UserCard/UserCard";
import BarGraph from "../../components/BarGraph/BarGraph";
import "./Homepage.scss";
import ThreadCard from "../../components/ThreadCard/ThreadCard";
import ScatterPlot from "../../components/ScatterPlot/ScatterPlot";
import BumpGraph from "../../components/BumpGraph/BumpGraph";
import LineGraph from "../../components/LineGraph/LineGraph";

export default function Homepage() {
  return (
    <main className="homepage">
      <aside className="homepage__aside">
        <UserCard />
        <ThreadCard />
      </aside>
      <div className="homepage__graphs">
        <section className="homepage__graph">
          <h2 className="homepage__title">Monthly Spend</h2>
          <BarGraph />
        </section>
        <section className="homepage__graph">
          <h2 className="homepage__title">Account Balance</h2>
          <LineGraph />
        </section>
      </div>
    </main>
  );
}
