import UserCard from "../../components/UserCard/UserCard";
import BarGraph from "../../components/BarGraph/BarGraph";
import "./Homepage.scss";
import ThreadCard from "../../components/ThreadCard/ThreadCard";
import LineGraph from "../../components/LineGraph/LineGraph";
import MobileNav from "../../components/MobileNav/MobileNav";

export default function Homepage() {
  return (
    <main className="homepage">
      <aside className="homepage__aside">
        <UserCard />
        <MobileNav />
        <ThreadCard />
      </aside>
      <div className="homepage__graphs">
        <section className="homepage__graph">
          <h2 className="homepage__title">Account Balances</h2>
          <BarGraph />
        </section>
        <section className="homepage__graph">
          <h2 className="homepage__title">Monthly Spend</h2>
          <LineGraph />
        </section>
      </div>
    </main>
  );
}
