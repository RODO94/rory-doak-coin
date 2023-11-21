import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./ScatterPlot.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ScatterPlot() {
  const [data, setData] = useState(null);
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";

  const formatData = (array) => {
    if (!array) {
      return "No array";
    }
    const newDataArray = array.map((item) => {
      return (item = {
        id: item.connect_first_name,
        data: [
          {
            x: item.available_balance / 100,
            y: item.savings_balance / 100,
          },
        ],
      });
    });
    return newDataArray;
  };

  useEffect(() => {
    const fetchBalanceData = async () => {
      const balances = await axios.get(
        `http://localhost:8080/accounts/connections/${userId}`
      );
      setData(formatData(balances.data));
    };
    fetchBalanceData();
  }, [userId]);

  if (!data) {
    return <p>We are loading your content, please wait</p>;
  }
  console.log(data);

  const colors = {
    Rory: "#FED0A2",
  };
  const getColor = (serie) => colors[serie.serieId];

  return (
    <section className="scatter-plot">
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 10, right: 36, bottom: 70, left: 80 }}
        xScale={{ type: "linear", min: 0, max: "auto" }}
        xFormat=" ^-100.2~f"
        yScale={{ type: "linear", min: 0, max: "10000" }}
        yFormat=">-.2f"
        blendMode="multiply"
        colors={getColor}
        axisTop={null}
        axisRight={null}
        onClick={(event) => {
          console.log(event);
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Available Balance",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Savings",
          legendPosition: "middle",
          legendOffset: -60,
        }}
      />
    </section>
  );
}
