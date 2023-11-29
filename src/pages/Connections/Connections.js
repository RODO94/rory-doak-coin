import AddConnection from "../../components/AddConnection/AddConnection";
import ConnectionEnvelope from "../../components/ConnectionEnvelope/ConnectionEnvelope";
import MobileNav from "../../components/MobileNav/MobileNav";

import "./Connections.scss";

export default function Connections() {
  return (
    <main className="connections">
      <AddConnection />
      <ConnectionEnvelope />
      <MobileNav />
    </main>
  );
}
