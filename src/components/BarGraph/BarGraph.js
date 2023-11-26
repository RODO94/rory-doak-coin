import { ResponsiveBar } from "@nivo/bar";
import "./BarGraph.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BarGraph() {
  const [data, setData] = useState([1, 2, 3, 4]);
  const { userId } = useParams();
  useEffect(() => {
    const fetchBalanceData = async () => {
      const balances = await axios.get(
        `http://localhost:8080/accounts/connections/${userId}`
      );
      setData(balances.data);
    };
    fetchBalanceData();
  }, [userId]);

  const colors = {
    savings_balance: "#03a688",
    available_balance: "#f470b0",
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
        margin={{ top: 10, right: 0, bottom: 65, left: 0 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        colors={getColor}
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
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
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
            anchor: "bottom",
            direction: "row",
            translateX: 0,
            translateY: 60,
            itemsSpacing: 25,
            itemWidth: 100,
            itemHeight: 30,
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
