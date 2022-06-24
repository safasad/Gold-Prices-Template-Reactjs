import React from "react";
import "../section.css";
import Plot from "react-plotly.js";

/**
 * Line Chart component
 * This component is responsible for displaying Gold prices in a line chart
 * @returns Line Chart Layout
 */
const LineChart = () => {
  //* Line chart data to be displayed on the graph */
  const plotData = [
    {
      x: [
        0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3,
        3.2, 3.4, 3.6, 3.8, 4,
      ],
      y: [
        0, 10, 5, 13, 7, 10, 16, 6, 13, 5, 12, 7, 16, 8, 10, 5, 9, 2, 11, 5, 7,
      ],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "gold" },
    },
  ];

  const plotLayout = {
    width: 400,
    height: 240,
    paper_bgcolor: "black",
    plot_bgcolor: "black",
    "yaxis.title": "Gold Prices",
  };

  return (
    <>
      {/* <!-- start chart card --> */}
      <div className="chart container-1 p-2 ">
        <h5 className="d-inline-block">Price charts :</h5>
        <div className="mt-3 w-25 d-inline-block">
          <select
            className="form-select chartSelect fw-bold"
            style={{
              color: "white",
              border: "none",
              borderRadius: " 0.25rem",
              backgroundColor: "black",
            }}
          >
            <option>Gold</option>
            <option>Salver</option>
            <option>Platinum</option>
          </select>
        </div>

        {/* Set the chart using Plot component */}
        <Plot
          data={plotData} // Get data from plotData array (initialized above)
          layout={plotLayout} // Set layout of the chart
          config={{ responsive: true }}
        />

        {/* End of chart */}
        <div className="mt-3 w-50">
          <select
            className="form-select "
            style={{
              color: "white",
              border: "1px solid #bd9030",
              borderRadius: " 0.25rem",
              backgroundColor: "black",
            }}
          >
            <option >Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>
        </div>
      </div>
      {/* <!-- end chart card --> */}
    </>
  );
};

export default LineChart;
