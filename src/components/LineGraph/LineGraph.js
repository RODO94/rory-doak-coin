import "./LineGraph.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import { fetchWeeklySpend } from "../../utils/AxiosRequests";

export default function LineGraph() {
  const [lineData, setLineData] = useState(null);
  const [isSlices, setIsSlices] = useState(false);
  useEffect(() => {
    const getData = async () => {
      return setLineData(await fetchWeeklySpend());
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
        margin={{ top: 20, right: 10, bottom: 85, left: 40 }}
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
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        onClick={(event) => {
          console.log(
            `this is week ${event.data.x} and is amount ${event.data.y} GBP`
          );
        }}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: -10,
            translateY: 70,
            itemsSpacing: 0,
            itemDirection: "top-to-bottom",
            itemWidth: 60,
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
