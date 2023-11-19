import { ResponsiveBar } from "@nivo/bar";
import "./BarGraph.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BarGraph() {
  const [data, setData] = useState([1, 2, 3, 4]);
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";
  useEffect(() => {
    const fetchBalanceData = async () => {
      const balances = await axios.get(
        `http://localhost:8080/accounts/connections/${userId}`
      );
      console.log(balances.data);
      setData(balances.data);
    };
    fetchBalanceData();
  }, [userId]);

  const colors = {
    savings_balance: "#FED0A2",
    available_balance: "#E0E0E0",
  };
  const getColor = (bar) => colors[bar.id];

  if (!data) {
    return <p>We are loading your content, please wait</p>;
  }
  return (
    <article className="bar-graph">
      <ResponsiveBar
        data={data}
        keys={["savings_balance", "available_balance"]}
        indexBy="connect_known_as"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={getColor}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </article>
  );
}
