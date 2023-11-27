import Chart from "react-apexcharts";
import useUsers from "../../hooks/useUsers";

export default function Analytics() {
  const { data } = useUsers();

  const dateCounts = {}; // Store user counts for each date

  data.forEach((user) => {
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
