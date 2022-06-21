import React from "react";
// import {Chart} from "react-chartjs-2";

const ChartGraph = () => {

    // let chart = <canvas id="myChart" width="120" height="400"></canvas>;
    // const myChart = new Chart(chart, {
    //   type: "line",
    //   data: {
    //     labels: [
    //       "Saturday",
    //       "Sunday",
    //       "Monday",
    //       "Tuesday",
    //       "Wednesday",
    //       "Thursday",
    //       "Friday",
    //     ],
    //     datasets: [
    //       {
    //         label: "price in EGP",
    //         data: [911.8, 912.0, 912.2, 912.4, 912.6, 912.8],
    //         fill: true,
    //         borderColor: "#bd9030",
    //         tension: 0.1,
    //       },
    //     ],
    //   },
    // });
  return (
    <>
      {/* <!-- start chart card --> */}
      <div class="chart container-1 p-2">
        <h5 class="d-inline-block">Price charts :</h5>
        <div class="mt-3 w-25 d-inline-block">
          <select
            class="form-select fw-bold"
            style={{
              color: "white",
              border: "none",
              borderRadius: " 0.25rem",
              backgroundColor: "black",
            }}
          >
            <option selected>Gold</option>
            <option>Salver</option>
            <option>Platinum</option>
          </select>
        </div>
        <canvas id="lineChart" height="120" width="400"></canvas>
        <div class="mt-3 w-50">
          <select
            class="form-select "
            style={{
              color: "white",
              border: "none",
              borderRadius: " 0.25rem",
              backgroundColor: "black",
            }}
          >
            <option>Day</option>
          </select>
        </div>
      </div>
      {/* <!-- end chart card --> */}
    </>
  );
};

export default ChartGraph;
