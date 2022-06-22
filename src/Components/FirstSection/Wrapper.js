import React from "react";
import LiveMetalPrices from "./LiveMetalPrices/LiveMetalPrices";
import LineChart from "./ChartPart/LineChart";

const GoldPricesSectionWrapper = () => {
  return (
    <div className="col  me-4  ">
      <LiveMetalPrices />
      <LineChart />
    </div>
  );
};

export default GoldPricesSectionWrapper;
