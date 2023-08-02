import join from "./../../assets/images/icons/join.png";
import register from "./../../assets/images/icons/register.png";
import active from "./../../assets/images/icons/active.png";
import uninstall from "./../../assets/images/icons/uninstall.png";
import Chart from "react-apexcharts";
import RoundedChart from "../../components/RoundedChart";
export default function Questions() {
  const cards = [
    {
      icon: active,
      counter: 100,
      label: "Active Users",
    },
    {
      icon: join,
      counter: 100,
      label: "New Users",
    },
    {
      icon: uninstall,
      counter: 100,
      label: "Uninstalled",
    },
    {
      icon: register,
      counter: 100,
      label: "Total Registeration",
    },
  ];

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
  const barSeries = [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ];
  const colors = [
    "red", // Monday
    "blue", // Tuesday
    "green", // Wednesday
    "orange", // Thursday
    "purple", // Friday
    "brown", // Saturday
    "pink", // Sunday
  ];
  const barOptions = {
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: colors,
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      labels: {
        style: {
          fontSize: "12px",
          colors: colors,
        },
      },
    },
  };

  return (
    <>
      <div className="row ">
        <div className="col-12 pb-4">
          <h2 className=" fw-semibold">Question Collections</h2>
          <p>Welcome Back.</p>
        </div>
      </div>
      <div className="row align-items-center" >
        <div className="col-md-1">1</div>
        <div className="col-md-11">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <img
                    src="https://c4.wallpaperflare.com/wallpaper/595/327/767/katherine-langford-beautiful-wallpaper-preview.jpg"
                    height={70}
                    width={70}
                    className=" "
                    style={{ borderRadius: "50% !important" }}
                    alt="..."
                  />
                </div>
                <div className="col-md-2">
                  <h6 className=" fw-semibold">Username</h6>
                  <p>Kamran Creation</p>
                </div>
                <div className="col-md-3">
                  <h6 className=" fw-semibold">Mobile Number</h6>
                  <p>Kamran Creation</p>
                </div>
                <div className="col-md-3">
                  <h6 className=" fw-semibold">Email</h6>
                  <p>Kamran Creation </p>
                </div>
                <div className="col-md-2">
                  <h6 className=" fw-semibold">Question List</h6>
                  <p>v</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}
