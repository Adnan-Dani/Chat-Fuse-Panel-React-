import join from "./../../assets/images/icons/join.png";
import ApexCharts from "apexcharts";
import register from "./../../assets/images/icons/register.png";
import active from "./../../assets/images/icons/active.png";
import uninstall from "./../../assets/images/icons/uninstall.png";
import Chart from "react-apexcharts";
import RoundedChart from "../../components/RoundedChart";
export default function Dashboard() {
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
  const barSeries = [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }];
  const colors =  [
    'red',    // Monday
    'blue',   // Tuesday
    'green',  // Wednesday
    'orange', // Thursday
    'purple', // Friday
    'brown',  // Saturday
    'pink',   // Sunday
  ];
  const barOptions = {
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: colors,
    xaxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      labels: {
        style: {
          fontSize: '12px',
          colors: colors
        }
      }
    },
  
  };
  

  

  return (
    <>
      <div className="row">
        <div className="col-12 pb-4">
          <h2 className=" fw-semibold">Dashboard</h2>
          <p>Welcome Back.</p>
        </div>
      </div>
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row py-2">
                  <div className="col d-flex align-items-center justify-content-end">
                    <div
                      data-label="20%"
                      className="css-bar mb-0 css-bar-primary css-bar-20"
                    >
                      <img
                        src={card.icon}
                        style={{ height: "84px", width: "84px" }}
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center">
                    <div>
                      <h1 className="fw-bold">{card.counter}</h1>
                      <h6 className="text-muted mb-0 fw-normal">
                        {card.label}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-6 d-flex align-items-strech">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Analytics</h5>
                </div>
                <div></div>
              </div>
              <div>
              <Chart options={barOptions} series={barSeries} type="bar" height={300} />

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h5 className="card-title mb-9 fw-semibold">Installation</h5>
                  <Chart options={options} series={series}  type="line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex align-items-strech">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Customers Map</h5>
                </div>
            
              </div>
              <div id="chart">

              <div id="card" className="row ">
                  <div className="col-md-6 text-center">
                    <RoundedChart
                      series={[89]}
                      label={"UnInstalled"}
                      type="radialBar"
                    />
                    <p>UnInstalled</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <RoundedChart

                      // options={options}
                      label={"Installed"}
                      series={[45]}
                      type="radialBar"
                    />
                    <p>Installed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    </>
  );
}
