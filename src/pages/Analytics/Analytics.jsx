import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

export default function Analytics() {
  const series = [
    {
      name: "TEAM A",
      type: "area",
      data: [31, 43, 26, 41, 31, 47, 33],
    },
  ];
  const options = {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    markers: {
      size: 0,
    },

    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };
 
  
  return (
    <> 
      <div className="row">
      <div className="col-12 pb-4">
          <h2 className=" fw-semibold">Analytics</h2>
          <p className=" fs-3 text-dark mt-n1 fw-normal">Weekly Analytics. </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" >
        <Chart options={options} series={series} type="line"   />
      </div>
     
      </div>
     
   
    </>
  );
}
