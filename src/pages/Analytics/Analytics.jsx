import  { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import http from "./../../services/HttpService";
import { startOfWeek, endOfWeek } from "date-fns"; 

export default function Analytics() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const cacheKey = "users";

  const getList = () => {
    setLoading(true);
    const isCache = localStorage.getItem(cacheKey);
    if (!isCache) {
      http.get(cacheKey).then((res) => {
        setUsers(res.data || []);
        localStorage.setItem(cacheKey, JSON.stringify(res.data || []));
        setLoading(false);
      });
    } else {
      setUsers(JSON.parse(isCache));
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const dateCounts = {}; // Store user counts for each date

  const currentDate = new Date();
  const currentWeekStart = startOfWeek(currentDate);
  const currentWeekEnd = endOfWeek(currentDate);
  const filteredUsers = users.filter((user) => {
    const creationDate = new Date(user.creationTime);
    return creationDate >= currentWeekStart && creationDate <= currentWeekEnd;
  });

  filteredUsers.forEach((user) => {
    const creationDate = new Date(user.creationTime);
    const formattedDate = creationDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    dateCounts[formattedDate] = (dateCounts[formattedDate] || 0) + 1;
  });

  const chartData = Object.keys(dateCounts).map((date) => ({
    x: new Date(date).getTime(), // Convert date to timestamp
    y: dateCounts[date] || 0,
  }));
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
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val) {
          return new Date(val).toLocaleDateString(); // Format date as desired
        },
      },
    },
    markers: {
      size: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          return y.toFixed(0) + " users";
        },
      },
    },
  };

  const series = [
    {
      name: "User Registrations",
      type: "area",
      data: chartData,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-12 pb-4">
          <h2 className="fw-semibold">Analytics</h2>
          <p className="fs-3 text-dark mt-n1 fw-normal">
            Weekly User Analytics.{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pb-4">
          <h2 className="fw-semibold">Analytics</h2>
          <p className="fs-3 text-dark mt-n1 fw-normal">
            Weekly User Analytics.{" "}
          </p>
        </div>
        <div className="col-12">
          <Chart options={options} series={series} type="line" height={350} />
        </div>
      </div>
    </>
  );
}
