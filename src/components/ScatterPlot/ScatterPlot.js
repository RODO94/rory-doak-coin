import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./ScatterPlot.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ScatterPlot() {
  const [data, setData] = useState([1, 2, 3, 4]);
  const userId = "57581dd2-96b8-4402-912b-c669c16f21a2";
  useEffect(() => {
    const fetchBalanceData = async () => {
      const balances = await axios.get(
        `http://localhost:8080/accounts/connections/${userId}`
      );
      console.log(await balances.data);
      setData(await balances.data);
    };
    fetchBalanceData();
  }, [userId]);

  if (!data) {
    return <p>We are loading your content, please wait</p>;
  }

  return (
    <section className="scatter-plot">
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: "linear", min: 0, max: "auto" }}
        xFormat=">-.2f"
        yScale={{ type: "linear", min: 0, max: "auto" }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "weight",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "size",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
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
      />
    </section>
  );
}
