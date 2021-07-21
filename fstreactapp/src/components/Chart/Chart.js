import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          value={item.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};
export default Chart;
