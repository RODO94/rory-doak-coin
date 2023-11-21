import { ResponsiveBump } from "@nivo/bump";
import "./BumpGraph.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BumpGraph() {
  const [bumpData, setBumpData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "http://localhost:8080/transactions/weekly"
      );
      console.log(data);
      return setBumpData(data);
    };
    getData();
  }, []);

  if (!bumpData) {
    return <p>....</p>;
  }
  return (
    <section className="bump-graph">
      <ResponsiveBump
        data={bumpData}
        colors={["#f470b0", "#026052", "#03a688", "#011212", "#c03679"]}
        colorBy="index"
        yScale={{ type: "linear", min: 0, max: "10000" }}
        yFormat=">-0f"
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: "serie.color" }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Weekly Spend",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </section>
  );
}
