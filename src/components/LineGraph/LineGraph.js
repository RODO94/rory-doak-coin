import "./LineGraph.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";

export default function LineGraph() {
  const [lineData, setLineData] = useState(null);
  const [isSlices, setIsSlices] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "http://localhost:8080/transactions/weekly"
      );
      return setLineData(data);
    };
    getData();
  }, []);

  if (!lineData) {
    return <p>....</p>;
  }
  return (
    <section className="line-graph">
      <ResponsiveLine
        data={lineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        colors={["#f470b0", "#026052", "#03a688", "#011212", "#c03679"]}
        colorBy="index"
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Week",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Spend (£)",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        onClick={(event) => {
          console.log(
            `this is week ${event.data.x} and is amount ${event.data.y} GBP`
          );
        }}
        onMouseEnter={(point) => {
          console.log(point);
        }}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                  itemHeight: 1.2,
                  itemWidth: 1.2,
                },
              },
            ],
          },
        ]}
        enableSlices={isSlices ? "y" : false}
      />
    </section>
  );
}
