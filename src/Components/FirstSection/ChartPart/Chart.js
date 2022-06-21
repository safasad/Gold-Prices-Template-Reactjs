import React,{useEffect, useRef} from "react";
import { Line } from "react-chartjs-2";

const ChartGraph = () => {
    const chartRef = useRef();
    useEffect(()=>{
        // chartRef.current.update()
    },[chartRef])
  const data = {
    labels: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    datasets: [
      {
        label: "price in EGP",
        data: [911.8, 912.0, 912.2, 912.4, 912.6, 912.8],
        fill: true,
        borderColor: "#bd9030",
        tension: 0.1,
      },
    ],
  };
  

  return (
    <>
      {/* <!-- start chart card --> */}
      <div className="chart container-1 p-2">
        <h5 className="d-inline-block">Price charts :</h5>
        <div className="mt-3 w-25 d-inline-block">
          <select
            className="form-select fw-bold"
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
        {/* <Line ref={chartRef} data={data} height="120" width="400" /> */}
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
            <option>Day</option>
          </select>
        </div>
      </div>
      {/* <!-- end chart card --> */}
    </>
  );
};

export default ChartGraph;
